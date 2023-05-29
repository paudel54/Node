const { getAllLaunches } = require('../../model/lunches.model');
// console.log('data from launches model', (launches.values()).json);
// console.log('Updated data values with Array.from ', Array.from(launches.values()))
// Keeping the functionlity of models onto model 
// So, that controller can only held its logic. 
function httpgetAllLunches(req, res) {
    // Array.from can help to make values into JSON . 
    return res.status(200).json(Array.from(getAllLaunches()));
}

module.exports = {
    httpgetAllLunches,
}


