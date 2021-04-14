var http = require('http');
var ip = require('ip');

var addr = ip.address();
var port = 3000;

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello!');
  res.end();
});

server.listen(port, () => {
  console.log(`Server is running on ${addr}:${port}`);
});