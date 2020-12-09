import axios from 'axios';

const api = axios.create({
	baseURL: process.env.API || "https://morning-headland-07678.herokuapp.com"
})

export default api;
