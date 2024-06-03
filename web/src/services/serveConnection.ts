import axios from 'axios';
import { BASE_URL } from '../config';

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