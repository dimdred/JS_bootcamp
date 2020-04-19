// SEQUENTIAL REQUESTS
// async function get3Pokemon() {
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// PARALLEL REQUESTS
// async function get3Pokemon() {
//   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//   console.log(prom1);
//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   const poke3 = await prom3;

//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// get3Pokemon();

function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = color;
      resolve();
    }, delay);
  });
}

// changeBodyColor("teal", 1000);

// requests run one by one (around 4s in total)
// async function lightShow() {
//   await changeBodyColor("teal", 1000);
//   await changeBodyColor("indigo", 1000);
//   await changeBodyColor("pink", 1000);
//   await changeBodyColor("yellow", 1000);
// }

// all requests run in the same time (around 1s in total)
async function lightShow() {
  const p1 = changeBodyColor("teal", 1000);
  const p2 = changeBodyColor("indigo", 1000);
  const p3 = changeBodyColor("pink", 1000);
  const p4 = changeBodyColor("yellow", 1000);
  await p1;
  await p2;
  await p3;
  await p4;
}

lightShow();