const { launches } = require('../../model/lunches.model');
// console.log('data from launches model', (launches.values()).json);
// console.log('Updated data values with Array.from ', Array.from(launches.values()))
function getAllLunches(req, res) {
    // Array.from can help to make values into JSON . 
    return res.status(200).json(Array.from(launches.values()));
}

module.exports = {
    getAllLunches,
}