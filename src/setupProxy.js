const { createProxyMiddleware } = require('http-proxy-middleware');
// For development only
// On production, use nginx to proxy requests to the backend server
module.exports = function (app) {
    app.use(
        ['/api/session', '/api/lesson', '/api/prompt', '/api/chat-history'],
        createProxyMiddleware({
            target: 'http://localhost:1337', // Replace with the address of your backend server
            changeOrigin: true,
        })
    );
};
