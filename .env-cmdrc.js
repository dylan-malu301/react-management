const devConfig = {
  PORT: 3000, // 启动端口
  HOST: '127.0.0.1',
  APP_API_BASEURL: 'http://192.168.1.30:20964'
}

const mode = {
  development: devConfig
}
module.exports = Promise.resolve(mode)