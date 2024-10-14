const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello, from node.js server!\n');
});

server.listen(port, hostname, async () => {
    const { default: prettyMilliseconds } = await import('pretty-ms');

    util.log(v8.getHeapStatistics());
    console.log(path.basename(__filename));
    util.log(path.join(__dirname, 'uploads', 'images'));
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(prettyMilliseconds(45300440004));
    console.log("Użyłem modułu 'pretty-ms', który służy do formatowania czasu, zamienia milisekundy na czytelny czas")
});
