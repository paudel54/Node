const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

// data, error, end are events of createReadStream: see Docs
fs.createReadStream('kepler_data.csv')
    // use of pipe to connect : pipe fn connect readeable stream src to writable stream destination parse()
    // kepler_data is src and parse() is destination for pipe
    .pipe(parse(
        {
            comment: '#',
            columns: true,
        }
    ))
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', (data) => {
        console.log(results);
        console.log('done');
    });

// Parse
