import axios from 'axios';

const api = axios.create({
	baseURL: process.env.API || "https://portfolio-backend-sm.herokuapp.com"
})

export default api;
