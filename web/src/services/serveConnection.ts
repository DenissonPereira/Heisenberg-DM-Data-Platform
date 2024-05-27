import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8080';

export const serveConnection = axios.create({
    baseURL: BASE_URL
});

export const setAuthToken = () => {
    const token = localStorage.getItem('@HDMweb:tokenBG');
    if (token) {
        serveConnection.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete serveConnection.defaults.headers.common['Authorization'];
    }
};