import axios from 'axios';
import { BASE_URL } from '../../conf/connection.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const serveConnection = axios.create({
    baseURL: BASE_URL
});

export const setAuthToken = () => {
    const token = AsyncStorage.getItem('@HDMweb:tokenBG');
    if (token) {
        serveConnection.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete serveConnection.defaults.headers.common['Authorization'];
    }
};