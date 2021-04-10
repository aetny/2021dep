//
import axios from 'axios';
import Qs from 'qs';
import { Notify } from 'vant';
axios.defaults.timeout = 5000;

axios.defaults.baseUrl = urlObj[sceneParams];
console.log(urlObj[sceneParams]);

axios.interceptors.request.use(
  config => {
    config.headers.common = {
      'Content-Type': 'application/json;charset=UTF-8'
    }
    if (config.data && config.data.isFormData) {
      config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
      config.transformRequest = [
        function (data) {
          delete data.isFormData;
          return Qs.stringify(data)
        }
      ]
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
)
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  err => {
    if (err && err.response) {
      let errorMsg;
      switch (err.response.status) {
        case 400:
          errorMsg = '错误请求';
          break;
        case 401:
          errorMsg = '未授权，请重新登录';
          break;
        case 403:
          errorMsg = '拒绝访问';
          break;
        case 404:
          errorMsg = '请求错误,未找到该资源';
          break;
        case 405:
          errorMsg = '请求方法未允许';
          break;
        case 408:
          errorMsg = '请求超时';
          break;
        case 500:
          errorMsg = '服务器端出错';
          break;
        case 501:
          errorMsg = '请求方法未允许';
          break;
        case 502:
          errorMsg = '网络错误';
          break;
        case 503:
          errorMsg = '服务不可用';
          break;
        case 504:
          errorMsg = '网络超时';
          break;
        case 505:
          errorMsg = 'http版本不支持该请求';
          break;
        default:
          console.log(`连接错误${err.response.status}`)
      }

    } else {
      errorMsg = '连接到服务器失败';
    }
    Notify({
      message: errorMsg,
      type: 'warning'
    })
    return Promise.resolve(err.response)
  }
)
export function get(data) {
  let { url, params } = data;
  return axios.get(url, params).then(res => {
    //需要加上状态控制
    return Promise.resolve(res)
  })
}
export function post() {
  return axios.post({ url: data.url, params: data.params }).then(res => {
    return Promise.resolve(res)
  })
}