const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

const handleError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please close the existing server or try another port.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error('An error occurred:', err);
    process.exit(1);
  }
};

startServer().catch(handleError);
