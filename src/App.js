import './App.css';
import React, { Suspense, lazy } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initialize } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// import ProfileContainer from './components/Profile/ProfileContainer';
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

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.isInitialized) return <Preloader />;

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
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isInitialized: state.app.isInitialized };
};

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
