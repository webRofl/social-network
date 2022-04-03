import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import authReducer from './authReducer.ts';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
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
