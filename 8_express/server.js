// Establishing Server with Express::=>  
const express = require('express');
const app = express();
const PORT = 3000;
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');



// App.use accomplished first the API hit endpointes and get response from it 
app.use((req, res, next) => {
    const start = Date.now();
    // we always need next() method to use middleware. 
    next();
    //actions go here... 
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

// next middleware to parse JSON
// express.json() is a middleware if no element it puts it as empty obj
app.use(express.json());

//server doesn't understands json so needed to be parsed. 
// Establishing a route: 
app.post('/friends', friendsController.postFriend);
app.get('/', (req, res) => {
    res.send('Hellloooo guys');
})
app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessages);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriends);
// handling dynamic routing with colon :  expess provides a method
// Everything after the colon will be extracted. as dynamic routing features. 
// paramaterized routes: /friends/22   

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
}); 
