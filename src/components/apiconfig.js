import axios from 'axios';

const instance = axios.create({
    /* DEV */
    baseURL: 'http://localhost:4500/api/v1/dtis/stage'
    /* QA */
    //baseURL: 'http://3.218.228.45:4500/api/v1/dtis/stage'
    /* PROD */
    //baseURL: 'http://3.219.61.17:4500'
});
instance.defaults.headers.common['Authorization'] = 'Basic SW50ZXJwcm9jc3lzOmo0bWI0bDQ=';
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
