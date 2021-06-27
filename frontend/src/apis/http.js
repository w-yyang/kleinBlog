import axios from "axios";

const instance = axios.create({
    baseURL: '',
    timeout: 3000
});

instance.interceptors.request.use((config) => {
    return config;
}, (err) => {
    return Promise.reject('请求出错', err);
});

instance.interceptors.response.use((res) => {
    return res;
}, (err) => {
    return Promise.reject('响应出错', err);
});

export default instance;