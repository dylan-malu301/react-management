import axios from "axios";
import ReactDOM from 'react-dom';
import {Spin, notification} from 'antd'
const config = {
  baseURL: '/api',
  loading: true,
  isCheckCode: true
}

// 当前请求数量
let requestCount = 0
// 显示loading
function showLoading() {
  if (requestCount === 0) {
    var loadingDom = document.createElement('div')
    loadingDom.setAttribute('id', 'request-loading')
    document.body.appendChild(loadingDom)
    ReactDOM.render(<Spin tip="加载中..." size="small"/>, loadingDom)
  }
  requestCount++
}
// 隐藏loading
function hideLoading() {
  requestCount--
  requestCount === 0 && document.body.removeChild(document.getElementById('request-loading'))
}
// 创建axios实例
const request = axios.create(config)
request.interceptors.request.use(
  config => {
    config.loading && showLoading()
    return config
  },
  error => {
    config.loading && hideLoading()
    Promise.reject(error)
  }
)
request.interceptors.response.use(
  response => {
    response.config.loading && hideLoading()
    return response
  },
  error => {
    error.config.loading && hideLoading()
    return Promise.reject(error)
  }
)

export default request