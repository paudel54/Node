// const getMessages = (req, res) => {
//     res.send('<ul> <li> Hello Albert!!</li></ul>');
// }
// extra debugging benifits use named function instead of arrow if any error compiler can point to it .
function getMessages(req, res) {
    res.send('<ul> <li> Hello albert</li></ul>')
}
function postMessages(req, res) {
    res.send('Updating Messages....');
}


// Exporting Controller functions, it has same name and can be written one time  
module.exports = {
    getMessages,
    postMessages,
};