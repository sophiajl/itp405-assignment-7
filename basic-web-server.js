var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.end('<h1>Hello!</h1>');
});

server.listen(8000, function() {
  console.log('Server running at localhost:8000');
});
