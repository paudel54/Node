// data beings stored.
// const { planets, loadPlanetsData } = require('../../model/planets.model');
const { getAllPlanets } = require('../../model/planets.model');

function httpgetAllPlanets(req, res) {
    // explicit on 
    res.status(200).json(getAllPlanets());
}
// obj to  return for multiple fn
module.exports = {
    httpgetAllPlanets,
};