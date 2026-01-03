const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
    const route = req.url;
    if (route === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World From Node.js 2025</h1>');
    } else if (route === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About</h1>');
    } else if (route === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'text/JSON' });
        res.write(JSON.stringify({ users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }] }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/JSON' });
        res.write(JSON.stringify({ error: '404 Not Found' }));
    }
    res.end();
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});