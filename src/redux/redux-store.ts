import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import authReducer from './authReducer';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
