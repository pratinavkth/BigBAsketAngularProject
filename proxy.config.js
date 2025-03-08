const PROXY_CONFIG = {
    '/api': {
      target: 'https://freeapi.miniprojectideas.com',
      secure: true,
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': '/api'
      }
    }
  };
  
  module.exports = PROXY_CONFIG;