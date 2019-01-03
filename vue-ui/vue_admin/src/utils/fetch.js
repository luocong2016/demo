import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import { storage } from './storage';

const Axios = axios.create({
  baseURL: '/apis',
  timeout: 5000
});

Axios.interceptors.request.use(
  config => {
    const token = storage.getItem('token');
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

Axios.interceptors.response.use(
  response => {
    const { data, status } = response;

    // Token
    if (data.code == 401 || data.sataus == 401 || status === 401) {
      MessageBox.alert(
        '你已被登出，可以取消继续留在该页面，或者重新登录',
        '确定登出',
        {
          confirmButtonText: '重新登录',
          type: 'warning'
        }
      ).then(() => {
        location.reload();
      });
    }

    // Success
    // response.data
    if (data.code == 0 || data.status == 0) {
      Message({
        message: data.message || data.msg || '网络请求出现错误!',
        type: 'error',
        duration: 5 * 1000
      });
    }

    return data;
  },
  error => {
    if (error.response.status === 401) {
      MessageBox.alert(
        '你已被登出，可以取消继续留在该页面，或者重新登录',
        '确定登出',
        {
          confirmButtonText: '重新登录',
          type: 'warning'
        }
      ).then(() => {
        // integrant
        location.reload();
      });
      return Promise.reject(error);
    }

    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });

    return Promise.reject(error);
  }
);

export default Axios;
