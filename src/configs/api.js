import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_BLANJA
})

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token')    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export default api