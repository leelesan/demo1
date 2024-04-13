import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9001/mes',
    timeout: 50000
});

export const loginInfo = async (data) => {
    const res = await instance.post('/login', data);
    return res;
}