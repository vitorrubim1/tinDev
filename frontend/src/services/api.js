import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333' //PORTA DA API
});

export default api;