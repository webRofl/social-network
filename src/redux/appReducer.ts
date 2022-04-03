import { getMe } from './authReducer.ts';

const SET_INITIALIZED = 'appReducer/SET_INITIALIZED';

type initialStateType = {
  isInitialized: boolean
};

const initialState: initialStateType = {
  isInitialized: false,
};

const appReducer = (state: initialStateType = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        isInitialized: true,
      };

    default:
      return state;
  }
};

type initializeAppType = {
  type: typeof SET_INITIALIZED
}

export const initializeApp = (): initializeAppType => ({ type: SET_INITIALIZED });

export const initialize = () => (dispatch: any) => {
  const promise: any = dispatch(getMe());
  Promise.all([promise]).then(() => {
    dispatch(initializeApp());
  });
};

export default appReducer;
