import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//setting a default configuration to be used across the entire app //OPTIMIZATION
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'; //we can set the base for the  url
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    //edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    //edit res config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
