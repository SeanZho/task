import axios from 'axios';

const BASE_URL = 'http://0.0.0.0:5000/api'

export const request = async (options) => {
    const { method = 'get', body, path } = options;
    const url = `${BASE_URL}/${path}`;
    if (method === 'get') {
        const data = await axios.get(url)
        return data;
    } else if (method === 'post') {
        const res = await axios.post(url, body);
        return res;
    } else if (method === 'delete') {
        const res = await axios.delete(url, body);
        return res;
    }
} 