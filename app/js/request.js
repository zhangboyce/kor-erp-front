import axios from 'axios';

export const host = 'http://localhost:8080/mverp_dev';

export function get(url) {
    return axios.get(host + url);
}

export function post(url, params) {
    return axios.post(host + url, params);
}