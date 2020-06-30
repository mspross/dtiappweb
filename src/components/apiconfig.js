import axios from 'axios';

const instance = axios.create({
    /* DEV */
    //baseURL: 'http://localhost:5000'
    /* QA */
    baseURL: 'http://3.218.228.45:4500'
    /* PROD */
    //baseURL: 'http://3.219.61.17:5000'
});
instance.defaults.headers.common['Authorization'] = 'Basic SW50ZXJwcm9jc3lzOmo0bWI0bDQ=';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
