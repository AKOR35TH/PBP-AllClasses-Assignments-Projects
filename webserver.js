const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
    const route = req.url;
    if (route === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hi Khanny! Welcome to the Home Page!');
    } else if (route === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('<h1>lets learn how to crach a server.</h1>');
    }  else if (route === '/api/user') {     
        res.writeHead(200, { 'Content-Type': 'text/html'   });
        res.end(JSON.stringify({ name: 'Khanny', age: 23 }));
    }  else  {
        res.writeHead(404, { 'Content-Type': 'text/JSON' });
        res.write(JSON.stringify({ message: '404 not found' }));
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});