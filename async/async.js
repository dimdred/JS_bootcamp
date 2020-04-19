// function greet() {
//   return 'HELLO!'
// }

async function greet() {
  return "HELLO!";
}

greet()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

async function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
      throw 'Incorrect data type!';
    }
    return x + y;
  }

 // the same logic without async 
function add2(a,b) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number') {
      reject('Incorrect data type!');
    }
    resolve(a + b);
  })
}

  add(5,'r')
  .then((response) => console.log(response))
  .catch((err) => console.log(err));