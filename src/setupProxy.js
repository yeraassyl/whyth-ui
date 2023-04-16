const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/session', '/lesson', '/prompt', '/chat-history'],
        createProxyMiddleware({
            target: 'http://142.93.97.228:1337', // Replace with the address of your backend server
            changeOrigin: true,
        })
    );
};
