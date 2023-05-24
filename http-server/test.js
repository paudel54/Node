const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const obj = JSON.parse(jsonString);
console.log('JSON parsed object', obj);


// testing out browser fetch method to make on POST request
// posting body must be converted into a String before sending from a body
fetch('http://localhost:3000/friends', {
    method: 'POST',
    body: JSON.stringify({ id: 3, name: 'Ryan Dahl' })
});

