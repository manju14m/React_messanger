import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider } from 'react-redux'
import firebase from 'firebase/app'

import store from './stote'


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCsHPqlbZWljW3nxcK1l37k_5B-vjjSMFk",
//   authDomain: "myreactchat-c81f1.firebaseapp.com",
//   projectId: "myreactchat-c81f1",
//   storageBucket: "myreactchat-c81f1.appspot.com",
//   messagingSenderId: "336145805297",
//   appId: "1:336145805297:web:1c7bb095550f082b41de50",
//   measurementId: "G-7TSWHWKF0W"
// };

// export const auth = firebase.auth()

// firebase.initializeApp(firebaseConfig);




ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);













// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
