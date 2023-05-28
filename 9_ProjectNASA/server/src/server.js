// entry point
// Creating server with node builtIN HTTP module. insted of express package. 
const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./model/planets.model');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
    // first resolves loading then only init port 
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}...`);
    });
};

startServer();