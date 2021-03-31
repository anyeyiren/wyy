import axios from "axios";


/*
* 封装网络请求
* */
//创建axios实例
const requsest = axios.create({
    baseURL: 'http://123.207.32.32:9001/',
    timeout: 10000
});



//配置请求

requsest.interceptors.request.use(config => {
    return config;
}, error => {
    return error;
});

//配置拦截
requsest.interceptors.response.use(response => {
    return response.data;
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = "请求错误";
                break;
            case 401:
                error.message = "未授权访问";
                break;
            default:
                error.message = "其他错误信息";

        }
        return error;
    }
});

export default requsest;