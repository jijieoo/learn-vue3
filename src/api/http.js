import axios from 'axios';

// 创建axios实例并进行通用项配置
const instance = axios.create({
    baseURL: '',
    timeout: 60000,
});

// 请求拦截
instance.interceptors.request.use((config) => config, (error) => Promise.reject(error));

// 响应拦截
instance.interceptors.response.use(
    (response) => Promise.resolve(response.data),
    (error) => Promise.reject(error),
);

export const {
    get,
    put,
    post,
} = instance;

export const del = instance.delete;
