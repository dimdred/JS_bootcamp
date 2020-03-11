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

// let fruits = ['apple', 'banana'];
// let veggies = ['potatoes', 'asparagus'];
// let meat = ['pork', 'chicken'];

// let vegMix1 = fruits.concat(veggies);
// let vegMix2 = veggies.concat(fruits);
// let allFood = fruits.concat(veggies, meat)
// console.log(vegMix1);
// console.log(vegMix2);
// console.log(allFood);

// let ingredients = [
//     'water',
//     'flour',
//     'cheese',
//     'sugar',
//     'eggs',
//     'butter'
// ];

// console.log(ingredients.includes('eggs'));
// console.log(ingredients.includes('water', 3)); //would work with 0

// console.log(ingredients.indexOf('sugar'));
// console.log(ingredients.indexOf('milk'));
// console.log(ingredients.indexOf('cheese', 5));

// console.log(ingredients);
// console.log(ingredients.reverse());

// let hello = ['h', 'e', 'l', 'l', 'o'];
// console.log(hello.join());
// console.log(hello.join(''));

// let newIngredients = ingredients.slice(3);
// console.log(newIngredients);

// let cheeseCake = ingredients.slice(1,5);
// console.log(cheeseCake);

// let panCake = ingredients.slice(-3);
// console.log(panCake);

// let copy = ingredients.slice();
// console.log(copy);

// copy.splice(1,0, 'Milk'); // add 'Milk' to array (return empty Array)
// console.log(copy);
// copy.splice(1,2); // delete 2 elements (return Array with deleted elements)
// console.log(copy);
// copy.splice(3, 1, 'salt', 'paper'); // replace eggs to salt and papper 
// console.log(copy);

// let people = ['Anna', 'Nancy', 'Susan', 'Nick', 'Mick', 'Alex'];
// console.log(people.sort());
// console.log(people);
// let nums = [10, 33, 100, 7, 61, 24, 86];
// console.log(nums.sort());
// console.log(nums);

// let fruit = 'orange';
// let collor = fruit;
// console.log(fruit);
// console.log(collor);
// fruit = 'lemon';
// console.log(fruit);
// console.log(collor);

// let nums = [5,6,7,8]
// let otherNums = nums
// console.log(nums);
// console.log(otherNums);
// nums.push(9);
// console.log(nums);
// console.log(otherNums);
// otherNums.pop();
// otherNums.pop();
// console.log(nums);
// console.log(otherNums);

// const myEggs = ['brown','brown'];
// myEggs.push('purple');
// console.log(myEggs);
// myEggs[0] = 'green'; // the same reference on object, change the content
// console.log(myEggs);

// // myEggs = ['blue', 'pink']; // reasigne the reference

// const foods = ['milk'];
// foods.unshift('bread');
// foods.push('butter');
// console.log(foods);
// foods.pop();
// foods.pop();
// foods.pop();
// console.log(foods);
// // foods = [] // wouldnt work, new array

const animalsPairs = [
    ['doe', ['buck', 'stag']],
    ['ewe', 'ram'],
    ['dog', 'cat']
];

console.log(animalsPairs);
console.log(animalsPairs[2][0]);
console.log(animalsPairs[1][1]);

const board = [
    ['O', null, 'X'],
    [null, 'X', 'O'],
    ['X', 'O', null]
]
console.log(board);

console.log(animalsPairs[0][1][1]);