// alert("It's Working!");
// console.log(3 + 4, true);
// console.error('Oh!!!!');

// if (1 !== 1) {
//     console.log('True!')
// }

// let rating = 3;

// if (rating === 3) {
//     console.log("You are a superstar!");
// }

// let num = 37;

// if (num % 2 !== 0) {
//     console.log("ODD number!");
// }

// let rating = 2;

// if (rating === 3) {
//     console.log("Superstart!");
// } else if (rating === 2) {
//     console.log("Meets expectations");
// } else if (rating === 1) {
//     console.log("Needs improvement")
// } else {
//     console.log("Invalid rating!");
// }

// let highScore = 1430;
// let userScore = 1700;

// if(userScore >= highScore) {
//     console.log(`You have a new high score of ${highScore}`);
//     highScore = userScore;
//     console.log(`New high score is ${highScore}`);
// } else {
//     console.log(`Good game! You score of ${userScore}`);
// }

// let pass = "kitty";

// if (pass.length >= 6) {
//     if (pass.indexOf(' ') === -1) {
//         console.log("Valid password!");
//     } else {
//         console.log("Password cannot contain spaces!");
//     }
// } else {
//     console.log("Password must be longer!");
// }

// let loggedInUser = null;

// if (loggedInUser) {
//     console.log("You are logged in!");
// } else {
//     console.log("Please log in!");
// }

// let pass = "kitty mity";

// if (pass.length >= 6 && pass.indexOf(' ') === -1) {
//     console.log("Valid password!");
// } else {
//     console.log("Invalid password!");
// }

// let num = 3;

// if (num >= 1 && num <= 10) { 
//     console.log("Valid guess!");
// } else {
//     console.log("Invalid guess!");
// }


// let age = 30;

// if (age <= 6 || age >= 65) {
//     console.log("It's free!");
// } else {
//     console.log("You have to pay!");
// }

// let loggedInUser = "dsd";

// if (!loggedInUser) {
//     console.log("Please log in!");
// } else {
//     console.log("You are logged in!");
// }

// let x = 7;

// console.log(x == 7 || x === 3 && x > 10);
// console.log((x == 7 || x === 3) && x > 10);

// let shoppingList = ['2% milk', 'water', 'ice'];
// let lotto = [25,22,62,7, 8]
// let myCollection = [12, 'dog', true, null];

// shoppingList[0] = 'whole milk';
// shoppingList[shoppingList.length] = 'ice cream';

// shoppingList.push('meat'); // add to the end
// shoppingList.pop(); // delete from the end

// shoppingList.unshift('beer', 'tomatoes'); // add to start
// shoppingList.shift(); // remove from the stard

// console.log(shoppingList);

let fruits = ['apple', 'banana'];
let veggies = ['potatoes', 'asparagus'];
let meat = ['pork', 'chicken'];

let vegMix1 = fruits.concat(veggies);
let vegMix2 = veggies.concat(fruits);
let allFood = fruits.concat(veggies, meat)
console.log(vegMix1);
console.log(vegMix2);
console.log(allFood);