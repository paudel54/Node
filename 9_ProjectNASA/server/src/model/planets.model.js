const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.16

}

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler.csv'))
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
                    habitablePlanets.push(data);
                }

            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })

            // Parse

            .on('end', () => {
                console.log(`${habitablePlanets.length} habitable planets found!`);
                resolve();
            });
    });
}

function getAllPlanets() {
    return habitablePlanets;
}


// data, error, end are events of createReadStream: see Docs



module.exports = {
    // renaming the exports
    loadPlanetsData,
    getAllPlanets,
};