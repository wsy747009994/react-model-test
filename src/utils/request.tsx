import axios from 'axios';
import { notification } from 'antd';

const codeMessage: any = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

 // 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 1000 // request timeout
})

service.interceptors.request.use(config =>{
    // config.headers['Authorization'] = localStorage.getItem('token') || '';
    return config
}, error => {
    // 处理错误信息
    return Promise.reject(error)
})

service.interceptors.response.use((response: any) => {
    console.log('数据',response)
    if(response.data.code === 200){
        return response.data.data;
    }else if(response.data.errorMsg){
        notification['error']({
            message: '提示',
            description: response.data.errorMsg,
        })
        return false
    }else{
        notification['error']({
            message: '提示',
            description: '服务器发生错误，请检查服务器。',
        })
    }

}, (error: { message: string | string[]; response: string | null | undefined | any; }) => {
    console.log('错误',error);
    // 错误操作
    if(error.message.includes('timeout')){
      notification['error']({
        message: '提示',
        description: '请求超时',
      })
    }else if(error.response === undefined || error.response === null || error.response === ''){
      notification['error']({
        message: '提示',
        description: '服务器发生错误，请检查服务器。',
      })
    }else{
      Promise.resolve(error.response.status).then(res => {
        notification['error']({
          message: '提示',
          description: codeMessage[res],
        })
      })
    }
    return false;
})
export default service;

