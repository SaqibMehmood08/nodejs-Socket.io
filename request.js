const http = require('http');

const server = http.createServer((req, res) => {
  // The request handler function that will be called whenever a request is made to the server.

  // Set the content type in the response header to 'text/plain'
  res.setHeader('Content-Type', 'text/plain');

  // Send a response back to the client
  res.end('Hello, this is your HTTP server!');
});

// Event: 'request'
server.on('request', (req, res) => {
  console.log('Request received.');

  // You can further handle or log information about the incoming request if needed.
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Request headers:', req.headers);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is started and listening on port ${port}`);
});
