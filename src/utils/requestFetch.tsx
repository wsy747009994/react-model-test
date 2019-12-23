// import fetch from 'dva/fetch';
import { notification } from 'antd';
import qs from 'querystring';
 
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

// 返回的状态
// const checkStatus = (response: { status: string | number; statusText: string | undefined; url: any; }) => {
//     if (response.status >= 200 && response.status < 300) {
//       return response;
//     }
//     /**
//      * 暂时没用，服务端返回的 status 始终为200
//      *
//      * @type {*|string|string}
//      */
//     const errorText = codeMessage[response.status] || response.statusText;
//     notification.error({
//       message: `请求错误 ${response.status}: ${response.url}`,
//       description: errorText,
//     });
   
//     const error: any = new Error(response.statusText);
//     error.name = response.status;
//     error.response = response;
//     throw error;
// }

// fetch超时处理
const TIMEOUT = 100000;
const timeoutFetch = (url: any, options: any) => {
    let fetchPromise = fetch(url, options);
    let timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('请求超时')), TIMEOUT);
    });
    return Promise.race([fetchPromise, timeoutPromise]);
};


/**
 * 请求url，返回promise 对象
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(url: string | string[], options: any) {
    const defaultOptions = {
      credentials: 'include',
      method: 'GET',
      mode: 'cors',
    };
    const mergeOptions = {
      ...defaultOptions,
      ...options
    };
    // const userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
    // const appKey = window.sessionStorage.getItem('appKey');
   
    mergeOptions.headers = {
      accept: 'application/json',
      'content-type': 'application/json; charset=utf-8',
      ...mergeOptions.headers,
    };
    // if (appKey) mergeOptions.headers.uuuappkey = appKey;
    // if (userInfo) mergeOptions.headers.uuutoken = userInfo.sessionId;
   
    // if (mergeOptions.method !== 'GET') {
    //   mergeOptions.body = JSON.stringify(mergeOptions.body);
    // }
   
    // if (mergeOptions.method !== 'POST' && mergeOptions.params) {
    //   url = `${url}${url.indexOf('?') !== -1 ? '&' : '?'}${qs.stringify(mergeOptions.params)}`;
    // }
   
    // if (!mergeOptions.hideTime && !mergeOptions.params) {
    //   url = `${url}?timeStamp=${new Date().getTime()}`;
    // }
   
    return timeoutFetch(url, mergeOptions)
    // .then(checkStatus)
    // .then((response: { json: () => any; }) => {
    // return response.json();
    // })
    .then((data) => {
    
    })
    .catch((error) => {
    
    });
}
