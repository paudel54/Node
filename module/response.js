// Creating Response for the Request::>
function decrypt(data) {
    return 'decrypted data';
}

function read() {
    return decrypt('data');
}

// The most versatile way to export modules
module.exports = {
    read,
};