import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
    baseURL: process.env.REACT_APP_QA
});
instance.defaults.headers.common['Authorization'] = 'Basic SW50ZXJwcm9jc3lzOmo0bWI0bDQ=';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
