import axios from 'axios'

const request = axios.create({
    baseURL: 'https://autumnfish.cn',
});

axios.interceptors.response.use(response => {
    return response.data
}, err => {
    return Promise.reject(err)
})

export default request;