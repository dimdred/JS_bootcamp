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

// makeDogPromise()
//   .then(() => {
//     console.log("YAY WE GOT A DOG!");
//   })
//   .catch(() => {
//     console.log(":( NO DOG!");
//   });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      const pages = {
        "/users": [
          { id: 1, username: "DD" },
          { id: 2, username: "JJ" },
        ],
        "/users/1": {
          id: 1,
          username: "DD",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/2": {
          id: 2,
          username: "JJ",
          upvotes: 571,
          city: "Madrid",
        },
        "/posts/454321": {
          id: 454321,
          title: "COVID-19",
        },
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

// fakeRequest("/users")
//   .then((res) => {
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`).then((res) => {
//         const post = res.data.topPostId;
//         fakeRequest(`/posts/${post}`).then((res) => {
//             console.log(res);
//         })
//     })
//   })
//   .catch((err) => {
//     console.log("REQUEST FAILED!", err); // doesnt catch nested fakeRequest, only first one
//   });

fakeRequest("/users")
  .then((res) => {
    const id = res.data[0].id;
    console.log(res);
    return fakeRequest(`/users/${id}`);
  })
  .then((res) => {
    const post = res.data.topPostId;
    console.log(res);
    return fakeRequest(`/postss/${post}`);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("REQUEST FAILED!", err); // works if each fakeRequest failed
  });