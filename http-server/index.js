const http = require('http');
const PORT = 3000;
// callback takes request listener
// request handles header and data, true for response
// req is readable stream can read incoming data, res is writeable. 
const server = http.createServer(); //127.0.0.1 => localhost

const friends = [
    {
        id: 0,
        name: 'Nikola Tesla',
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
        id: 2,
        name: 'Albert Einstein',
    }
];

server.on('request', (req, res) => {
    if (req.url === '/friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        // equivalent code
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(
            {
                id: 1,
                name: 'Newton'
            }
        ))
    } else if (req.url === '/message') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Isaac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //127.0.0.1 => localhost