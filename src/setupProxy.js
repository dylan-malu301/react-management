const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: process.env.APP_API_BASEURL,
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}