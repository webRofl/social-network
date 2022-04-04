import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import authReducer from './authReducer.ts';
import dialogReducer from './dialogsReducer.ts';
import profileReducer from './profileReducer.ts';
import usersReducer from './usersReducer.ts';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer.ts';

const reducers = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
