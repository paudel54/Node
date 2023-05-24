// Establishing Server with Express::=>  
const express = require('express');

const app = express();
const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Suresh Rai',
    },
    {
        id: 1,
        name: 'Sansrit Paudel',
    },

];

// Establishing a route: 
app.get('/', (req, res) => {
    res.send('Hellloooo guys');
})

app.get('/messages', (req, res) => {
    res.send('<ul> <li> Hello Albert!!</li></ul>');
})

app.post('/messages', (req, res) => {
    console.log('Updating Messages.....')
})

// ***************************************************************
app.get('/friends', (req, res) => {
    res.json(friends);
});

// handling dynamic routing with colon :  expess provides a method
// Everything after the colon will be extracted. as dynamic routing features. 
// paramaterized routes: /friends/22   
app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    // validate value we are not in control up like input
    const friend = friends[friendId];
    // here Friend Id is grabbed form url and are in form of string but we need in integer to map onto . 
    if (friend) {
        res.status(200).json(friend)
    } else {
        // res.sendStatus(404);
        res.status(404).json({
            error: "Friend does not exist",
        });
    }
})



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
}); 