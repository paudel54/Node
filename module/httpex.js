// const { request } = require('https');

// const req = request('https://google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data');
//     });
// });

// req.end();

//request is bidirectional we can use get to use data only for data fetching. 
const { get } = require('https');
get('https://google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data');
    });
});
