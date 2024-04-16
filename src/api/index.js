import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9001/mes',
    timeout: 500000
});

export const loginInfo = async (data) => {
    const res = await instance.post('/login', data);
    return res;
}

export const downLoad = () => {
    return instance.get('/download2', {
        responseType: 'blob'
    })
}