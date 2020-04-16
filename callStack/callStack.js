const repeat = (str, times) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

const scream = (str) => {
  return str.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement("h1");
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};
// console.log('Hello!');

// makeRant('I hate mayonnaise!', document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);

// console.log('Hi everyone!');
// // alert('Hi there!');
// setTimeout(function() {
//     console.log('MOOO!')
// }, 7000);
// setTimeout(function() {
//     console.log('OINK!')
// }, 3000);
// console.log('Bye everyone!');
// console.log('Bye for real everyone!');
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ0hpIGV2ZXJ5b25lIScpOw0Kc2V0VGltZW91dChmdW5jdGlvbigpIHsNCiAgICBjb25zb2xlLmxvZygnTU9PTyEnKQ0KfSwgNzAwMCk7DQpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgew0KICAgIGNvbnNvbGUubG9nKCdPSU5LIScpDQp9LCAzMDAwKTsNCmNvbnNvbGUubG9nKCdCeWUgZXZlcnlvbmUhJyk7DQpjb25zb2xlLmxvZygnQnllIGZvciByZWFsIGV2ZXJ5b25lIScpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

const btn = document.querySelector("#bt");
// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;

    if (elRight + amount > bodyBoundary) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

// v1
// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 500, 1000);
//             });
//         });
//     });
// });

moveX(
  btn,
  100,
  1000,
  () => {
    //succeess1
    moveX(
      btn,
      400,
      1000,
      () => {
        //succeess2
        moveX(
          btn,
          700,
          1000,
          () => {
            //succeess3
            console.log("Really?!");
          },
          () => {
            //fail3
            alert("CAN NOT MOVE FURTHER!");
          }
        );
      },
      () => {
        //fail2
        alert("CAN NOT MOVE FURTHER!");
      }
    );
  },
  () => {
    //fail1
    alert("CAN NOT MOVE FURTHER!");
  }
);
