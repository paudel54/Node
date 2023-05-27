// handling all paths from express. 
const path = require('path');
// handling files. 

// extra debugging benifits use named function instead of arrow if any error compiler can point to it .
// fileName should work onto absolute path. 
function getMessages(req, res) {
    // res.send('<ul> <li> Hello albert</li></ul>')
    // _dirname points to controller folder. its node default prop
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'student.jpg'));
}
function postMessages(req, res) {
    res.send('Updating Messages....');
}


// Exporting Controller functions, it has same name and can be written one time  
module.exports = {
    getMessages,
    postMessages,
};