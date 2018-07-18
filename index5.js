const users = require('./users.json')

for(let user of users) {
  if (user.age >= 60) {
    console.log(`${user.name} szykuj się do smierci`.toUpperCase())
  } else {
    console.log(`${user.name} do roboty kurwa!`.toLowerCase())
  }
}
