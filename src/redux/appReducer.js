import { getMe } from './authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
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

export const initializeApp = () => ({ type: SET_INITIALIZED });

export const initialize = () => (dispatch) => {
  const promise = dispatch(getMe());
  Promise.all([promise]).then(() => {
    dispatch(initializeApp());
  });
};

export default appReducer;
