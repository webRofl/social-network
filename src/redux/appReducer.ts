import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { getMe } from './authReducer';
import { Dispatch } from 'redux';

const SET_INITIALIZED = 'appReducer/SET_INITIALIZED';

type InitialStateType = {
  isInitialized: boolean;
};

const initialState: InitialStateType = {
  isInitialized: false,
};

type ActionsType = InitializeAppType;

const appReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
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
  type: typeof SET_INITIALIZED;
};

export const initializeApp = (): InitializeAppType => ({
  type: SET_INITIALIZED,
});

export const initialize = () => (dispatch: Dispatch<ActionsType>) => {
  //@ts-ignore
  const promise = dispatch(getMe());
  Promise.all([promise]).then(() => {
    dispatch(initializeApp());
  });
};

export default appReducer;
