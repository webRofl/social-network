import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import StartApp from './App';

// if (window.location.pathname === '/')
//   window.history.replaceState({ profile: 'profile' }, 'My profile', '/profile'); // my edit (redirect from start page to profile) History API

ReactDOM.render(<StartApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
