import axios from "axios";

const URL = "http://react_api.test/api";

const get = (url, params) => axios.get(URL + url, params);
const post = (url, params, config) => axios.post(URL + url, params, config);

export default { get, post };
