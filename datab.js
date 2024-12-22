
const db = require('db');
let users = db.getUsers();
console.log(users);
fs.writeFile('data.json', JSON.stringify(users), (err) => {
    if (err) throw err;
})
