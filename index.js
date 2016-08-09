var http = require('http');
var ip = '127.0.0.1';
var port = 4545;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Run Travis\n');
}).listen(port, ip);
console.log('Server running at http://'+ip+':'+port+'/');
