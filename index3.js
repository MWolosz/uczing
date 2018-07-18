const func = (x, y, cb) => {
  console.log(x, y, cb)
  console.log(x * y)
  return cb(x * y)
}

const kwadrat = (x) => x * x;


/*******************************************/

// const rezultat = func(2, 5, kwadrat)

// console.log(rezultat)


const callback = (rezultat) => {
  console.log('To jest rezultat', rezultat)
}

const superDlugaAsynchronicznaFunkcja = (x, y, cb) => {
  // Długa kalkulacja
  const result = x + y;
  cb(result)
}

superDlugaAsynchronicznaFunkcja(100, 200, (result) => {
  console.log('result', result)
})

const cb = () => {
  console.log('Uplunelo')
}

setTimeout(cb, 3000);
