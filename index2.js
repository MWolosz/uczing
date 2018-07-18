
const func1 = () => {
  return {
    x: 'x',
    y: [ 1, 2, 3],
  }
}

const func2 = () => ({
  x: 'x',
  y: [1, 2, 3],
})

// console.log(func1(), func2())

const obj = func1();
const obj2 = {
  x: 'x1',
  y: 'y1',
}

const array = [1, 2, 'String', obj, obj2, func1, func2()]


for(let x of array) {
  console.log(x)
}

/*******************************************/

let _integer = 1
let _string = 'String text'
let _func = () => {}
let _array = [1,2,3,4]
let _obj = { key: 'value' }

const uppercased = _string.toUpperCase()

console.log( uppercased )
