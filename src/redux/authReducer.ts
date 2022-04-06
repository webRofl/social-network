import { Dispatch } from 'redux';
import { authAPI, profileAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const SET_AUTH_ERROR = 'authReducer/SET_AUTH_ERROR';
const SET_USER_INFO = 'authReducer/SET_USER_INFO';
const SET_CAPTCHA_URL_SUCCESS = 'authReducer/SET_CAPTCHA_URL_SUCCESS';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  fullName: null as string | null,
  isAuth: false,
  profilePhoto: null as string | null,
  errors: null as string[] | null,
  captchaUrl: null as string | null,
};

type InitialStateType = typeof initialState;

type ActionTypes =
  | SetAuthUserDataActionType
  | SetErrorMessageActionType
  | SetUserInfoActionType
  | SetCaptchaUrlSuccessActionType;

const authReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        //@ts-ignore
        errors: action.errorMessage,
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

type SetAuthUserDataDataActionType = {
  userId: number | null;
  email: string | null;
  fullName: string | null;
  isAuth: boolean;
  errors: string[] | null;
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  data: SetAuthUserDataDataActionType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  fullName: string | null,
  isAuth: boolean = true,
  errors: string[] | null = null
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  data: { userId, email, fullName, isAuth, errors },
});

type SetErrorMessageActionType = {
  type: typeof SET_AUTH_ERROR;
  errorMessage: string;
};

export const setErrorMessage = (
  errorMessage: string
): SetErrorMessageActionType => ({
  type: SET_AUTH_ERROR,
  errorMessage,
});

type SetUserInfoActionType = {
  type: typeof SET_USER_INFO;
  fullName: string;
  profilePhoto: string;
};

export const setUserInfo = (
  fullName: string,
  profilePhoto: string
): SetUserInfoActionType => ({
  type: SET_USER_INFO,
  fullName,
  profilePhoto,
});

type SetCaptchaUrlSuccessActionType = {
  type: typeof SET_CAPTCHA_URL_SUCCESS;
  captchaUrl: string;
};

export const setCaptchaUrlSuccess = (
  captchaUrl: string
): SetCaptchaUrlSuccessActionType => ({
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
  (
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: string | null = null
  ) =>
  async (dispatch: any) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === 0) {
      dispatch(getMe());
    } else {
      if (loginData.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      console.log(loginData.messages[0]);

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
