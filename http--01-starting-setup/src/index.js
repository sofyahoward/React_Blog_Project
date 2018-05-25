import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-Type'] = 'Application/json';

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error); //TO LOG THE ERROR GLOBALLY
    return Promise.reject(error); //TO HANDLE ERROR LOCALLY WITHIN A COMPONENT
})

axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error); //TO LOG THE ERROR GLOBALLY
    return Promise.reject(error); //TO HANDLE ERROR LOCALLY WITHIN A COMPONENT
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
