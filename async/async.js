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
  if (typeof x !== "number" || typeof y !== "number") {
    throw "Incorrect data type!";
  }
  return x + y;
}

// the same logic without async
function add2(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Incorrect data type!");
    }
    resolve(a + b);
  });
}

add(5, 9)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// function getCharacter() {
//   return axios.get("https://anapioficeandfire.com/api/characters/");
// }

// getCharacter().then((res) => console.log(res.data));


// the same logic with async and await
async function getCharacter() {
  const result = await axios.get("https://anapioficeandfire.com/api/characterss/");
  console.log(result.data);
}

getCharacter().catch(err => console.log('IN CATCH!', err));

async function getCharacterNew() {
  try {
    const result = await axios.get("https://anapioficeandfire.com/api/characterss/");
    console.log(result.data);
  } catch (err) {
    console.log('IN CATCH NEW!', err);
  }
}

getCharacterNew();