import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';

const get = (url, params) => axios.get(URL + url, params);

export default { get };