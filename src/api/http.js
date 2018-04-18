/**
 * @author yangbin
 * @date 2018/4/17
 * @Description: 封装http请求
 */
import axios from 'axios'

axios.interceptors.response.use(function (rst) {
  // Do something with response data
  return rst;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

function getMethod (url, config={}) {
  return new Promise((resolve, reject) => {
    axios.get(url, config).then(rst => {
      resolve(rst)
    }).catch(err => {
      reject(err)
    })
  })
}

function postMethod (url, data={}, config={}){
  return new Promise((resolve, reject) => {
    axios.post(url, data, config).then(rst => {
      resolve(rst)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  get: getMethod,
  post: postMethod
}