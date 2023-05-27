const model = require('../models/friends.model');

function postFriend(req, res) {
    // validate the request 
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }
    const newFriend = {
        name: req.body.name,
        id: module.length
    };
    model.push(newFriend);
    res.json(newFriend);

}

function getFriends(req, res) {
    res.json(model);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    // validate value we are not in control up like input
    const friend = model[friendId];
    // here Friend Id is grabbed form url and are in form of string but we need in integer to map onto . 
    if (friend) {
        res.status(200).json(friend)
    } else {
        // res.sendStatus(404);
        res.status(404).json({
            error: "Friend does not exist",
        });
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend

}