// Axios returns promise
const axios = require('axios');

// instead of callback we use promise i.e .then

axios.get('https://www.google.com')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
// extra error handling mechanism with . catch 

// Arrow func can be rearranged with regular function
// axios.get('https://www.google.com')
//     .then(function (response) {
//         console.log(response);
//     })