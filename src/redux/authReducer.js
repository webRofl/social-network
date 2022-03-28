import { authAPI, profileAPI } from '../api/api';

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const SET_AUTH_ERROR = 'authReducer/SET_AUTH_ERROR';
const SET_USER_INFO = 'authReducer/SET_USER_INFO';

const initialState = {
  userId: null,
  email: null,
  fullName: null,
  isAuth: false,
  profilePhoto: null,
  errors: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        errors: action.errorMessage,
      };
    case SET_USER_INFO:
      return {
        ...state,
        fullName: action.fullName,
        profilePhoto: action.profilePhoto,
      };
    default:
      return state;
  }
};

// action creator

export const setAuthUserData = (
  userId,
  email,
  fullName,
  isAuth = true,
  errors = null
) => ({
  type: SET_USER_DATA,
  data: { userId, email, fullName, isAuth, errors },
});

export const setErrorMessage = (errorMessage) => ({
  type: SET_AUTH_ERROR,
  errorMessage,
});

export const setUserInfo = (fullName, profilePhoto) => ({
  type: SET_USER_INFO,
  fullName,
  profilePhoto,
});

// thunk creator

export const getMe = () => async (dispatch) => {
  const data = await authAPI.getMyProfile();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login));
  }
};

export const login =
  (email, password, rememberMe = false) =>
  async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe);
    if (loginData.resultCode === 0) {
      dispatch(getMe());
    } else {
      dispatch(setErrorMessage(loginData.messages[0]));
    }
  };

export const logout = () => async (dispatch) => {
  const logoutData = await authAPI.logout();
  if (logoutData.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, null, false));
  }
};

export const getMyData = (id) => async (dispatch) => {
  const response = await profileAPI.getProfile(id);
  dispatch(setUserInfo(response.fullName, response.photos.small));
};

export default authReducer;
