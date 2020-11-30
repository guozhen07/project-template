import Axios from 'axios'

const HTTP = Axios.create({
  timeout: 30000,
  headers: {'X-Custom-Header': 'foobar'}
})

// 请求拦截器
HTTP.interceptors.request.use((config)=> {
  // 判断token
  const token = sessionStorage.getItem(token)
  token && (config.headers['Authorization'] = token)
  // 为get请求增加时间戳
  return setConfig(config)
}, (error) => {
  return Promise.reject(error)
})

// 返回拦截器
HTTP.interceptors.response.use((response) => {
  return response
}, (error) => {
  // 错误代码处理
  statusCode(error.response && error.response.status)
  return Promise.reject(error)
})

// 设置请求内容
function setConfig(config) {
  const method = config.method
  if (method.toLowerCase() === 'get') {
    config.params && (config.params.timestamp = new Date().getTime())
  }
  return config
}

// 返回错误处理
function statusCode(errCode) {
  let txt = ''
  switch(errCode) {
    case '401':
      txt = '登录超时，请重新登录'
      break;
    case '404':
      txt = '网络异常'
      break;
    case '500':
      txt = '服务器异常'
      break;
    default:
      txt = '未知错误'
  }
  console.error(txt)
}

export default HTTP