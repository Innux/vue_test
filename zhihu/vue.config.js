module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://news-at.zhihu.com',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api/4'
        }
      }
    }
  }
}