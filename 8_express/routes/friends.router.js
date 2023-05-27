const express = require('express');
const friendsController = require('../controllers/friends.controller');
// initializing the Router with express. 
const friendsRouter = express.Router();

// creating middleware on routes: logging ip address of machine making request on mid . 
friendsRouter.use((req, res, next) => {
    console.log('ip address', req.ip);
    next();
}
);


friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);
// set relative tho this app.use simplifiying path based on router thats fixed or mounted on
// app.use('/friends', friendsRouter);

module.exports = friendsRouter;