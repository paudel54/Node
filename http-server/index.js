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
    // splites anything that comes up with / slash and updates an array
    //        /friends/2 => ['', 'friends', '2']
    const items = req.url.split('/');
    console.log(items);
    if (req.method === 'POST' && items[1] === 'friends') {
        // can listen to request stream for data and would be buffered state need to convert it into String before into use 
        req.on('data', (data) => {
            // JSON received as buffer converted into String and must be again need to send it as obj to store on obj list
            // JSON.Parse() helps in acheiveing this
            const friend = data.toString();
            console.log('Request:', data)
            // adding information from post request to the object List
            friends.push(JSON.parse(friend));
        });

    }
    else if (req.method === 'GET' && items[1] === 'friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        // equivalent code
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        // res.end(JSON.stringify(
        //     {
        //         id: 1,
        //         name: 'Newton'
        //     }
        // ))
        // for URL split upto 3 route with index
        if (items.length === 3) {
            const friendIndex = +items[2];
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === 'GET' && items[1] === 'message') {
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

//  Same Origin Policy origin
// Google.com Can search into or navigate to fb.com: same Origin policy didn't restrict us
// Security Feature
// portocol "http"
//Host" www.google.com
//Port: :3000

// Origin => Protocal + Host + Prot 