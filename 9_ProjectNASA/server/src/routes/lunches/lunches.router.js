// Idea of creating a routes is to creaie a navigating point on web  
// extracting a data model form lunch. 
const { getAllLunches } = require('./lunches.controller');

const launchesRouter = express.Router();

// creating a endpoint and passing it out to a getAllLunches COntroller. 
launchesRouter.get('/launches', getAllLunches);
// Exporting to make avaialbe onto use . 
module.exports = launchesRouter;
