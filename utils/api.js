import axios from 'axios';

const api = axios.create({
    baseURL: "https://morning-headland-07678.herokuapp.com"
})

export default api;
