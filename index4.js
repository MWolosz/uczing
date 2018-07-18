const fs = require('fs')

const zbior = [1,2,3,4,5]

const fn = elementZbioru => elementZbioru + 10;

const rezultat = zbior.map(fn)

// console.log(rezultat);


/*******************************************/


const users = require('./users.json')

const AVERAGE_AGE = 77;

const usersWithTimeToDeath = users.map((user) => {
  return {
    ...user,
    timeToDeath: AVERAGE_AGE - user.age
  }
})

// console.log('rezultat', JSON.stringify(usersWithTimeToDeath, null, 2));

const zbiorNazwisk = users.map(user => 'Imię:' + ' ' + user.name + ', Nazwisko: ' + user.surname + '.')
const zbiorNazwisk2 = users.map(user => `Imię: ${user.name} xzz Nazwisko: ${ user.surname }.`)

// console.log( zbiorNazwisk, zbiorNazwisk.length )
// console.log( zbiorNazwisk2, zbiorNazwisk2.length )

const html = usersWithTimeToDeath.map(user => `
  <div>
    <h1 style='color: red;'>${user.name} ${user.surname}</h1>
    <p>Czas do śmierci: ${user.timeToDeath}</p>
  </div>
`).join('')

const wrappedInDiv = `<div>${ html }</div>`

fs.writeFileSync('./index.html', wrappedInDiv);


console.log('abcd'.toUpperCase())

// const json = JSON.stringify(usersWithTimeToDeath)
// console.log(json)
// console.log(typeof json)
// const parsed = JSON.parse(json)
// console.log(parsed)
// console.log(typeof parsed)
