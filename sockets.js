const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, res) => {
  
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is your HTTP server!');
  });
// Event: 'request'
server.on('request', (req, res) => {
    console.log('Request received.');
  });

  // Event: 'connection'
server.on('connection', (socket) => {
    console.log(`New connection from ${socket.remoteAddress}:${socket.remotePort} :${socket.remoteFamily} :${socket.pending}  :${socket.localPort}`);
  });

  
// Event: 'close'
server.on('close', () => {
    console.log('Server is closing.');
  });


  // Event: 'listening'
server.on('listening', () => {
    const address = server.address();
    console.log(`Server is listeing non ${address.address}:${address.port} `);
  });
  
  const port = 3000;
  server.listen(port, () => {
    console.log(`Server is started and listening on port ${port}`);
  });