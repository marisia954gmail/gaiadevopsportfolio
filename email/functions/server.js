const http = require('http');
const contact = require('./functions/contact');

http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/contact') {
    return contact(req, res);
  }

  res.writeHead(404);
  res.end();
}).listen(3000, '127.0.0.1');