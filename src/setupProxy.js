// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// module.exports = function (app) {
//     app.use(
//         ['/api/session', '/api/lesson', '/api/prompt', '/api/chat-history'],
//         createProxyMiddleware({
//             target: 'http://localhost:1337', // Replace with the address of your backend server
//             changeOrigin: true,
//         })
//     );
// };
