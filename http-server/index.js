const http = require('http');
const PORT = 3000;
// callback takes request listener
// request handles header and data, true for response
// req is readable stream can read incoming data, res is writeable. 
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(
        JSON.stringify(
            {
                id: 5,
                name: 'Balen',
                description: 'Hello form the web development Agency, You are hired for our Job'
            }
        )
    )
    // passing data to browser with res.end()

});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}....`)
}); //127.0.0.1 => localhost