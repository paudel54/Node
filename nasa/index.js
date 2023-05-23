const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.16

}

// insolation flux amount of light to planet
// planatery radius is also limit to habitable palent

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
        if (isHabitablePlanet(data)) {
            results.push(data);
        }

    })
    .on('error', (err) => {
        console.log(err);
    })

    // Parse

    .on('end', () => {
        console.log(results.map((planet) => {
            return planet['kepler_name'];
        }));
        console.log(`${results.length} habitable planets found!`);
    });