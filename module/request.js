//https modules requries encrypted data so create fn for that
function encrypt(data) {
    return 'encrypted data'
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}

// module is global object
module.exports = {
    // send: send, since, both containing same Name
    send,
}