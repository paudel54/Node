// Creating new Mapped object. 
const launches = new Map();
let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    lunchDate: new Date('December 27, 2030'),
    destination: 'kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
}
// launches is snippit of map for updating key val in Map, it takes on two arguments . 
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}
// updating  new increment 
function addNewLaunch(launch) {
    latestFlightNumber++
    launches.set(latestFlightNumber,
        // updating and adding prop in launch object. 
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customers: ['ZTM 23', 'NASA'],
            upcoming: true,
            success: true
        }));
}

// accessing the lunch

module.exports = {
    getAllLaunches,
    addNewLaunch,
    launches,
};