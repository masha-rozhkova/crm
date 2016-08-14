const config = require('../config');
const http = require('http');
const server = http.createServer();
server.listen(config.port);
server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end('<h1>Hello, world</h1>');
});
server.on('listening', () => {
  console.log(`Server starting on port ${config.port}`);
});
