const API_URL = 'http://localhost:3000'

// async fn to fetch 
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

// async function httpGetLaunches() {

//   // TODO: Once API is ready.
//   // Load launches, sort by flight number, and return as JSON.
// }

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  // Creating Sort on client Side with + or -ve value 
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}




async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};



