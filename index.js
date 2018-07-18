

/*******************************************/

var x, y, z, a;

a = 10;


z = (param1, param2) => {
  a = a + 1;
  return param1 * param2;
};

x = 5;
y = 10;

console.log('x', x)
console.log('y', y)
console.log('z', z)
console.log('a', a)
console.log('wywołany z:', z(4,4))
console.log('a', a)

x = z(y, x);

console.log('a', a)

console.log('x', x)


function pokazWKonsoli(x) {
  console.log(x)
}
