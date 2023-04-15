const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ['/session', '/lesson', '/prompt', '/chat-history'],
        createProxyMiddleware({
            target: 'http://64.226.105.245:1337', // Replace with the address of your backend server
            changeOrigin: true,
        })
    );
};
