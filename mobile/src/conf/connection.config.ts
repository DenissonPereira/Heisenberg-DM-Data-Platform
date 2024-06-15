import axios from 'axios';

export const BASE_URL = "http://10.0.0.206:8080";

export const api = axios.create({
    baseURL: BASE_URL,
});