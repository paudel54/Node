// Establishing Server with Express::=>  
const express = require('express');
const path = require('path');
const app = express();
// added tepmlating engines handlebar. 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = 3000;
// const friendsController = require('./controllers/friends.controller');
// const messagesController = require('./controllers/messages.controller');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');


// App.use accomplished first the API hit endpointes and get response from it 
app.use((req, res, next) => {
    const start = Date.now();
    // we always need next() method to use middleware. 
    next();
    //actions go here... 
    const delta = Date.now() - start;
    // can add base URL to make paths 
    console.log(`${req.method}${req.baseUrl} /${req.url} ${delta}ms`);
})

// next middleware to parse JSON
// express.json() is a middleware if no element it puts it as empty obj
// serving website with node. 
// possible url would be locahost:3000/site/index.html
// always onto static file path routes. 
// express.static is used to serve the static files. 
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// working with express router. Organized onto folder. 
// const friendsRouter = express.Router();

//server doesn't understands json so needed to be parsed. 
app.get('/', (req, res) => {
    // returning template with dynamic html handlers. 
    res.render('index', {
        title: 'Personal Express Project.',
        caption: 'Let\'s Get this done!'
    })
})
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);
// simplifying routes path with express router. 

// handling dynamic routing with colon :  expess provides a method
// Everything after the colon will be extracted. as dynamic routing features. 
// paramaterized routes: /friends/22   
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});

