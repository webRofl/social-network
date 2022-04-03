import './App.css';
import React, { Suspense, lazy, useEffect } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initialize } from './redux/appReducer.ts';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import {
  HashRouter,
  useNavigate,
  Routes,
  Route,
  useMatch,
} from 'react-router-dom';

const ProfileContainer = lazy(() =>
  import('./components/Profile/ProfileContainer')
);
const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const News = lazy(() => import('./components/News/News'));
const Music = lazy(() => import('./components/Music/Music'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const PageNotFound = lazy(() =>
  import('./components/PageNotFound/PageNotFound')
);

const App = (props) => {
  const navigate = useNavigate();
  const match = useMatch('/*');

  useEffect(() => {
    props.initialize();
  }, []);

  useEffect(() => {
    if (match.pathname === '/' && props.userId) {
      navigate('/profile/' + props.userId);
    }
  }, [props.userId]);

  if (!props.isInitialized) return <Preloader />;

  return (
    <div className="app-wrapper" role="main">
      <HeaderContainer />
      <div className="app-wrapper-content">
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<UsersContainer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized,
  userId: state.auth.userId,
});

const AppContainer = connect(mapStateToProps, { initialize })(App);

const StartApp = () => {
  // use <BrowserRouter basename={process.env.PUBLIC_URL}><BrowserRouter/> instead of HashRouter
  return (
    <HashRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.StrictMode>
    </HashRouter>
  );
};

export default StartApp;
