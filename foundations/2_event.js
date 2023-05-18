const EventEmitter = require('events');
const celebrity = new EventEmitter();

//Suscribe to Celebrity for Observer 1
//first argument followed up with callBack fn
celebrity.on('race win', () => {
    console.log('Congratulations You are best!!!');
});

//Suscribe to celebrity for Observer 2
celebrity.on('race lost', () => {
    console.log('I will work harder!!');
});

celebrity.emit('race win');
celebrity.emit('race lost');
