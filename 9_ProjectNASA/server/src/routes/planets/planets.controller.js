// data beings stored.
const { planets, loadPlanetsData } = require('../../model/planets.model');

function getAllPlanets(req, res) {
    // explicit on 
    res.status(200).json(planets);
}
// obj to  return for multiple fn
module.exports = {
    getAllPlanets,
};