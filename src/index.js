import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.interceptors.request.use(
  (req) => {
    if (window.sessionStorage.getItem("userDetails")) {
      const savedUser = JSON.parse(window.sessionStorage.getItem("userDetails"));
      req.headers.Authorization = "Bearer " + savedUser.token;
      console.log("added auth");
    }
    req.headers['Access-Control-Allow-Origin'] = '*';
    return req;
  },
  error => {
    Promise.reject(error);
  }
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
