// const checkStatusAndParse = (response) => {
//   if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
//   return response.json();
// };
// const printURL = (data) => {
//   if (Array.isArray(data)) {
//     for (const character of data) {
//       console.log(character.url);
//     }
//     return Promise.resolve(data[0].books); 
//   } else {
//     console.log(data.url);
//     return Promise.resolve(data.url); 
//   }
// };
// const fetchBook = (bookUrl) => {
//   return fetch(bookUrl);
// };

// const arrCultures = [];
// fetch("https://anapioficeandfire.com/api/characters/")
//   .then(checkStatusAndParse)
//   .then(printURL)
//   .then(fetchBook)
//   .then(checkStatusAndParse)
//   .then(printURL)
//   .catch((err) => {
//     console.log("FETCH ERROR", err);
//   });

// // simple axios example
// axios.get('https://anapioficeandfire.com/api/characterss/')
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

// fetch refactoring
const fetchURL = (url = 'https://anapioficeandfire.com/api/characters/') => {
  return axios.get(url);
}
const printURL = ({data}) => {
  console.log(data);
  for (const character of data) {
    console.log(character.url);
  }
  const bUrl = data[0].books[0];
  return Promise.resolve(bUrl);
}

fetchURL()
.then(printURL)
.then(fetchURL)
.then(({data}) => console.log(data.url))
.catch((err) => console.log(err))