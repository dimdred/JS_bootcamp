// const getDog = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//     rand < 0.5 ? resolve() : reject();
//   }, 5000);
// });

// getDog.then(() => {
//   console.log("YAY WE GOT A DOG!");
// });
// getDog.catch(() => {
//   console.log(":( NO DOG!");
// });

// function return promise
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      rand < 0.5 ? resolve() : reject();
    }, 5000);
  });
};

makeDogPromise()
  .then(() => {
    console.log("YAY WE GOT A DOG!");
  })
  .catch(() => {
    console.log(":( NO DOG!");
  });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      const pages = {
        "/users": [
          { id: 1, username: "DD" },
          { id: 2, username: "JJ" },
        ],
        "/about": "This is about page!",
      };
      const data = pages[url];

      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 3000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("Status code: ", res.status);
    console.log("Data: ", res.data);
    console.log("REQUEST WORKED!");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("REQUEST FAILED!");
  });