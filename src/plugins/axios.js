import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3000/';

export const http = Axios;
