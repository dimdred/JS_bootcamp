const btn = document.querySelector("#bt");

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve(`${currLeft + amount}`);
      }
    }, delay);
  });
};

async function animateRight(el, amt) {
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
}
animateRight(btn, 300).catch((err) => {
  console.log('Change direction!');
  animateRight(btn, -300)
});

// moveX(btn, 300, 3000)
//   .then(() => moveX(btn, 300, 3000))
//   .then(() => moveX(btn, 300, 3000))
//   .then(() => {
//       console.log('Done moving!');
//       return moveX(btn, 300, 3000);
//   })
//   .then(() => {
//       console.log('Done moving 4!');
//   })
//   .catch(({bodyBoundary, elRight, amount}) => {
//       console.log(`Body is ${bodyBoundary}px wide`);
//       console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
//   })

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout(() => {
//       const bodyBoundary = document.body.clientWidth;
//       const elRight = element.getBoundingClientRect().right;
//       const currLeft = element.getBoundingClientRect().left;

//       if (elRight + amount > bodyBoundary) {
//         onFailure();
//       } else {
//         element.style.transform = `translateX(${currLeft + amount}px)`;
//         onSuccess();
//       }
//     }, delay);
//   };

//   moveX(
//     btn,
//     100,
//     1000,
//     () => {
//       //succeess1
//       moveX(
//         btn,
//         400,
//         1000,
//         () => {
//           //succeess2
//           moveX(
//             btn,
//             700,
//             1000,
//             () => {
//               //succeess3
//               console.log("Really?!");
//             },
//             () => {
//               //fail3
//               alert("CAN NOT MOVE FURTHER!");
//             }
//           );
//         },
//         () => {
//           //fail2
//           alert("CAN NOT MOVE FURTHER!");
//         }
//       );
//     },
//     () => {
//       //fail1
//       alert("CAN NOT MOVE FURTHER!");
//     }
//   );
