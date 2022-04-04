import { getMe } from './authReducer';

const SET_INITIALIZED = 'appReducer/SET_INITIALIZED';

type InitialStateType = {
  isInitialized: boolean
};

const initialState: InitialStateType = {
  isInitialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializeAppType = {
  type: typeof SET_INITIALIZED
}

export const initializeApp = (): InitializeAppType => ({ type: SET_INITIALIZED });

export const initialize = () => (dispatch: any) => {
  const promise = dispatch(getMe());
  Promise.all([promise]).then(() => {
    dispatch(initializeApp());
  });
};

export default appReducer;
