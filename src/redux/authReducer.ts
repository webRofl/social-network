import { authAPI, profileAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const SET_AUTH_ERROR = 'authReducer/SET_AUTH_ERROR';
const SET_USER_INFO = 'authReducer/SET_USER_INFO';
const SET_CAPTCHA_URL_SUCCESS = 'authReducer/SET_CAPTCHA_URL_SUCCESS';

type initialStateType = {
  userId: number | null,
  email: string | null,
  fullName: string | null,
  isAuth: boolean,
  profilePhoto: string | null,
  errors: string[] | null,
  captchaUrl: string | null,
};

const initialState: initialStateType = {
  userId: null,
  email: null,
  fullName: null,
  isAuth: false,
  profilePhoto: null,
  errors: null,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        errors: action.errorMessage.push(action.errorMessage),
      };
    case SET_USER_INFO:
      return {
        ...state,
        fullName: action.fullName,
        profilePhoto: action.profilePhoto,
      };
    case SET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

// action creator

type setAuthUserDataDataType = {
  userId: number
  email: string
  fullName: string
  isAuth: boolean
  errors: string[] | null
};

type setAuthUserDataType = {
  type: typeof SET_USER_DATA
  data: setAuthUserDataDataType
};

export const setAuthUserData = (
  userId: number,
  email: string,
  fullName: string,
  isAuth: boolean = true,
  errors: string[] = null
): setAuthUserDataType => ({
  type: SET_USER_DATA,
  data: { userId, email, fullName, isAuth, errors },
});

type setErrorMessageType = {
  type: typeof SET_AUTH_ERROR,
  errorMessage: string
};

export const setErrorMessage = (errorMessage: string): setErrorMessageType => ({
  type: SET_AUTH_ERROR,
  errorMessage,
});

type setUserInfoType = {
  type: typeof SET_USER_INFO
  fullName: string
  profilePhoto: string
};

export const setUserInfo = (fullName: string, profilePhoto: string): setUserInfoType => ({
  type: SET_USER_INFO,
  fullName,
  profilePhoto,
});

type setCaptchaUrlSuccessType = {
  type: typeof SET_CAPTCHA_URL_SUCCESS
  captchaUrl: string
};

export const setCaptchaUrlSuccess = (captchaUrl: string): setCaptchaUrlSuccessType => ({
  type: SET_CAPTCHA_URL_SUCCESS,
  captchaUrl,
});

// thunk creator

export const getMe = () => async (dispatch: any) => {
  const data = await authAPI.getMyProfile();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) =>
  async (dispatch: any) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === 0) {
      dispatch(getMe());
    } else {
      if (loginData.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      dispatch(setErrorMessage(loginData.messages[0]));
    }
  };

export const logout = () => async (dispatch: any) => {
  const logoutData = await authAPI.logout();
  if (logoutData.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};

export const getMyData = (id: string) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(id);
  dispatch(setUserInfo(response.fullName, response.photos.small));
};

const getCaptchaUrl = () => async (dispatch: any) => {
  const captchaUrl = await securityAPI.getCaptchaUrl();
  dispatch(setCaptchaUrlSuccess(captchaUrl.url));
};

export default authReducer;
