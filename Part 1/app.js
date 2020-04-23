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

// const animalsPairs = [
//     ['doe', ['buck', 'stag']],
//     ['ewe', 'ram'],
//     ['dog', 'cat']
// ];

// console.log(animalsPairs);
// console.log(animalsPairs[2][0]);
// console.log(animalsPairs[1][1]);

// const board = [
//     ['O', null, 'X'],
//     [null, 'X', 'O'],
//     ['X', 'O', null]
// ]
// console.log(board);

// console.log(animalsPairs[0][1][1]);

// const fitBitData = {
//     totatlSteps: 36891,
//     totalMiles: 217.81,
//     avgCaloriesBurn: 881,
//     workOutThisWeek: '5 of 7',
//     avgGoodSleep: '2:51',
//     45: 'forty five',
//     '16': 'sixteen'
// };

// console.log(fitBitData);
// console.log(fitBitData.totalMiles);
// // console.log(fitBitData.45); // wouldn't work, 45 was converted to string
// console.log(fitBitData['45']);
// console.log(fitBitData[45]);
// console.log(fitBitData[16]);

// const palette = {
//     red: '#eb14d1',
//     yellow: '#fd9ca',
//     blue: '#303d1e'
// }

// let randColor = 'blue';
// console.log(palette[randColor]); // return value for blue, [] - for dinamic values
// // console.log(palette.randColor); // undefined

// const userReviews = {};
// userReviews['queenBee49'] = 4.5;
// userReviews.mrSmth21 = 4;
// userReviews['DD'] = '5';
// console.log(userReviews);
// userReviews['DD'] = 5; // update value;
// userReviews.queenBee49 += 2;
// userReviews.mrSmth21 --;
// console.log(userReviews);

// const student = {
//     firstName: 'Nick',
//     lastName: 'jones',
//     skills: ['Music', 'Arts'],
//     exams: {
//         'midterm': 92,
//         'final': 88
//     }
// };

// student['avgScore'] = ( student['exams']['midterm'] + student['exams']['final']) / 2;
// console.log(student);
// console.log(student.skills[1]);

// const shoppingCart = [
//     {
//         'product': 'milk',
//         'price': 1.5,
//         'quantity': 3
//     },
//     {
//         'product': 'water',
//         'price': 0.2,
//         'quantity': 10
//     },
//     {
//         'product': 'juice',
//         'price': 3,
//         'quantity': 2
//     }
// ];

// console.log(shoppingCart[0].product);

// const palette = {
//     red: '#eb14d1',
//     yellow: '#fd9ca',
//     blue: '#303d1e'
// }

// const palette2 = palette
// palette2.green = '#1re3da'

// console.log(palette2);
// console.log(palette); // both are changed, because use the same reference

// let nums = [1, 2, 3];
// let myNums = [1, 2 ,3];
// console.log(nums === myNums, nums == myNums);
// let newNums = nums;
// console.log(nums === newNums);

// const user = {
//     name: 'Alex',
//     age: 23,
//     notification: []
// };
// console.log(user.notification == []);

// if(!user.notification.length) {
//     console.log('No notifications!');
// };

// console.log({a:1} == {a:1});

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i*i}`);
// }

// for (let i = 200; i >= 0; i -= 25) {
//     console.log(i);
// }
// console.log('DONE!')

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// for (let i = 0; i < nums.length; i++) {
//     let element = nums[i];
//     console.log(element);
// }

// const students = [
//     {
//         name: 'Alex',
//         grade: 89
//     },
//     {
//         name: 'John',
//         grade: 97
//     },
//     {
//         name: 'Nick',
//         grade: 75
//     },
//     {
//         name: 'Mick',
//         grade: 83
//     }
// ];

// let sumGrade = 0;
// for (let i = 0; i < students.length; i++) {
//     let student = students[i];
//     console.log(`${student.name} scored ${student.grade}`);
//     sumGrade += student.grade
// }
// let avgGrade = sumGrade / students.length
// console.log(avgGrade);

// const word = 'stressed';
// let reverseWord = ''
// for (let i = word.length-1; i >= 0; i--) {
//     console.log(word[i]);
//     reverseWord += word[i];
// }
// console.log(reverseWord);

// for (let i = 1; i <= 10; i++) {
//     console.log('OUTER LOOP', i);
//     for (let j = 10; j >= 0; j -= 3) {
//         console.log('   INNER LOOP', j);
//     };
// };

// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ]

// let totalSum = 0;
// let diagSum = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//     let rowGame = gameBoard[i];
//     let rowSum = 0;
//     for (let j = 0; j < rowGame.length; j++) {
//         rowSum += rowGame[j];
//         diagSum += rowGame[i] / rowGame.length;
//     }
//     console.log(rowSum);
//     totalSum += rowSum;
// };
// console.log(totalSum);
// console.log(diagSum);

// let j = 0;
// while (j <= 5) {
//     console.log(j);
//     j++;
// };

// const target = Math.floor(Math.random() * 10);
// let guess;
// while (target !== guess) {
//     guess = Math.floor(Math.random() * 10);
//     console.log(`${target} is not equal to ${guess}`);
// }
// console.log(`${target} is equal to ${guess}`);

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     if(i === 5) break;
// }

// const target = Math.floor(Math.random() * 10);
// let guess;
// while (true) {
//     guess = Math.floor(Math.random() * 10);
//     if (target === guess) break;
// }
// console.log(`${target} is equal to ${guess}`);

// let subreddits = ['soccer', 'book', 'guitar', 'PS'];
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(subreddits[i]);
// }

// for (let sub of subreddits) {
//     console.log(sub);
// }

// for (let char of 'string') {
//     console.log(char.toUpperCase());
// }

// const magicSquare = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8]
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//     let sum = 0;
//     let row = magicSquare[i];
//     for (let j = 0; j < row.length; j++) {
//         sum += row[j];
//     }
//     console.log(`Sum of ${i+1} row: ${sum}`)
// }

// for (let row of magicSquare) {
//     let sum = 0;
//     for (let item of row) {
//         sum += item;
//     }
//     console.log(`Sum of ${row} = ${sum}`)
// };

// const words1 = ['mail', 'milk', 'bull', 'black'];
// const words2 = ['box', 'shake', 'dog', 'berry'];

// let j = 0;
// for (let i = 0; i < words1.length; i++) {
//     for (j; j < words2.length; j++) {
//         console.log(words1[i] + words2[j]);
//         break;
//     }
//     j++;
// }

// for (let i = 0; i < words1.length; i++) {
//     console.log(`${words1[i]}${words2[i]}`);
// }

// const movieReviews = {
//     Arrival: 8.5,
//     Alien: 9.0,
//     Amadeus: 10,
//     'In Bruges': 9.0,
//     'Kill Bill': 8,
//     Coraline: 7.5
// };

// // for (let x of movieReviews) {
// //     console.log(x);
// // }

// for (let rating of Object.values(movieReviews)) {
//     console.log(rating);
// };

// for (let movie of Object.keys(movieReviews)) {
//     console.log(movie, movieReviews[movie]);
// };

// const ratings = Object.values(movieReviews);
// let avgRating = 0;
// for (let rating of ratings) {
//     avgRating += rating;
// }
// console.log(avgRating / ratings.length);

// for (const property in movieReviews) {
//     console.log(property, movieReviews[property]);
// }

// function grumpus() {
//     console.log('LEAVE ME ALONE!!!');
// }

// grumpus();

// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// rollDie();

// function throwDice(numRolls) {
//     for (let i = 0; i < numRolls; i++) {
//         rollDie();
//     }
// }

// function greet(person = 'Stranger') {
//     console.log(`Hi, ${person}!`);
// }
// greet('Anna');

// throwDice(3);

// function sum(x, y) {
//     // console.log(x + y);
//     return x + y;
//     console.log('All DONE!'); // never run!
// }
// // sum(9,4);
// console.log(sum(9,8));

// function devide(a, b) {
//     console.log(a / b);
// }

// devide(1,4);
// devide(4,1);
// devide(b = 4, a = 1);

// // function isPurple(color) {
// //     if (color.toLowerCase() === 'purple') {
// //         return true;
// //     }
// //     return false;
// // };

// function isPurple(color) {
//     return color.toLowerCase() === 'purple';
// };

// console.log(isPurple('blue'));
// console.log(isPurple('purple'));

// function containsPurple(arr) {
//     for (let collor of arr) {
//         if (collor === 'purple') {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(containsPurple(['black', 'green', 'purple']));

// function isValidPassword(password, username) {
//     if (password.length >= 8 && !password.includes(username) && !password.includes(' ')) {
//         return true;
//     }
//     return false;
// }

// console.log(isValidPassword('testtest', 'dd'));

// function isValidPassword2(password, username) {
//     const longEnough = password.length >= 8;
//     const tooSimilar =  password.includes(username);
//     const hasSpace =  password.includes(' ');
//     return (longEnough && !tooSimilar && !hasSpace);
// }

// console.log(isValidPassword2('testtes', 'dd'));

// function avgOfArray(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum += item
//     }
//     return sum / arr.length;
// }

// console.log(avgOfArray([1,2,3,8]));

// let numbers = [1,2,3,8];
// let avg = 0;

// numbers.forEach(function sum(item) {
//     avg += (item / numbers.length);
// });
// console.log(avg);

// function isPangram(str) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     for (const char of alphabet) {
//         if(str.toLowerCase().indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPangram('The five boxing wizards jump quickly'));

// function getCard() {
//     const valueList = [6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
//     const suitList = ['clubs', 'spades', 'hearts', 'diamonds'];
//     return {value: randomItem(valueList), suit: randomItem(suitList)};
// }

// function randomItem(arr) {
//     let idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// function reverseStr(str) {
//     let arr = str.split('').reverse();
//     return arr.join('');
// }

// function add(x,y) {
//     return x + y;
// }

// const sum = function (x,y) {
//     return x + y;
// }

// const product = function multiply(x,y) {
//     return x * y;
// }

// console.log(add(2,3));
// console.log(sum(3,4));
// console.log(product(4,5));
// console.log(multiply(4,5)); // fail, multiply is not defined as function

// function add(x,y) {
//     return x + y;
// }

// const subtract = function (x,y) {
//     return x - y;
// }

// function multiply(x,y) {
//     return x * y;
// }

// const devide = function (x,y) {
//     return x / y;
// }

// const operations = [add, subtract, multiply, devide];
// console.log(operations[1](7,2));
// console.log(operations[2](7,2));

// for (const func of operations) {
//     let result = func(30,5)
//     console.log(result);
// }

// const thing = {
//     doSomething: multiply
// }

// console.log(thing.doSomething(3,5));

// function callThreeTimes(f) {
//     f();
//     f();
//     f();
// }

// function hi() {
//     console.log('Hello!');
// }

// function bye() {
//     console.log('Bye!');
// }

// function repeatNTimes(action, n) {
//     for (let i = 0; i < n; i++) {
//         action();
//     }
// }
// repeatNTimes(hi, 2);

// function pickOne(fun1, fun2) {
//     const rand = Math.random();
//     if (rand < 0.5) {
//         fun1();
//     }
//     else {
//         fun2();
//     }
// }

// pickOne(hi, bye);

// function multiplyBy(num) {
//     return function(x) {
//         return x * num;
//     }
// }

// const triple = multiplyBy(3);
// const double = multiplyBy(2);
// console.log(triple(8));
// console.log(double(8));

// const isChild = makeBetweenFunc(0,18);

// function makeBetweenFunc(d1, d2) {
//     return function(x) {
//         return x >= d1 && x <= d2;
//     }
// }

// console.log(isChild(5));
// console.log(isChild(20));

// const isNiceWeather = makeBetweenFunc(60,80);
// console.log(isNiceWeather(75));

// function grumpus() {
//     alert('Go Away!')
// }

// setTimeout(grumpus, 5000);

// setTimeout(function() {
//     alert('Welcome!');
// }, 5000);

// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     alert('Why did you click me!?')
// });

// console.log(animal);
// var animal = 'Tapir'; //hoisted

// console.log(shrimp);
// let shrimp = 'Tiger Shrimp'; // error
// console.log(bird);
// const bird = 'Eagle'; // error

// howl(); //hoisted

// function howl() {
//     console.log('AWOOOO!')
// }

// hoo(); //error, hoo is undefined.
// var hoo = function() {
//     console.log('hooooo!');
// }

// const nums = [9, 8, 7, 6, 5]

// nums.forEach(function (n) {
//     console.log(n ** 2);
// })

// function printTriple(n) {
//     console.log(n * 3);
// }

// nums.forEach(printTriple);

// nums.forEach(function(num, idx) {
//     console.log(idx, num*2);
// })

const books = [
  {
    title: "Good Omens",
    authors: ["Terry", "Neil"],
    rating: 3.25,
    genre: ["fiction", "fantasy"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genre: ["novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genre: ["fiction", "fantasy"],
  },
  {
    title: "A Gentelman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genre: ["fiction", "historical fiction"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genre: ["nonfiction", "essays"],
  },
];

// books.forEach(function(book) {
//     console.log(book.title.toUpperCase());
// })

// const numbers = [20, 21, 22, 23, 24, 25];
// const words = ['ahaha', 'azaza', 'rsvp', 'ololo'];

// const doubles = numbers.map(function(num) {
//     return num * 2;
// })
// console.log(doubles);

// const numObj = numbers.map(function(num) {
//     let isEven;
//     if(num % 2 == 0) {
//         isEven = true;
//     }
//     else {
//         isEven = false;
//     }
//     return {number: num, isEven: isEven}
// })
// console.log(numObj);

// const numDetails = numbers.map(function(n){
//     return {
//         Number: n,
//         isEven: n % 2 === 0
//     }
// })
// console.log(numDetails);

// const revAbbrevs = words.map(function(word) {
//     return word.toUpperCase().split('').reverse().join('.');
// })
// console.log(revAbbrevs);

// const myBooks = books.map(function(book) {
//     if(book.rating > 4.3) {
//         return {title: book.title, author: book.authors};
//     }
// })
// console.log(myBooks);

// const titles = books.map(function(b) {
//     return b.title
// })
// console.log(titles);

// const square = function (x) {
//     return x * x;
// }

// //the same
// const square2 = (x) => { return x * x; }
// console.log(square(3), square2(3));

// const isEven = num => { return num % 2 === 0; }
// console.log(isEven(8));

// const multiply = (x, y) => { return x * y; }
// console.log(multiply(4, 5));

// const greet = () => { return console.log('HI!'); }
// greet();

// const square1 = x => { return x * x };

// // the same
// const square2 = x => (x * x);

// // the same
// const square3 = x => x * x;

// console.log(square1(4), square2(5), square3(6));

// const nums = [1, 2, 3, 4, 5, 6]

// const doubleNums = nums.map(num => { return num * 2 });
// const doubleNums2 = nums.map(num => (num * 2));
// console.log(doubleNums, doubleNums2);

// const parityList = nums.map(num => {
//     if (num % 2 === 0) return 'even'
//     return 'odd';
// })

// const parityList2 = nums.map(num => (
//     num % 2 === 0 ? 'even' : 'odd' // if = ? else = :
// ))
// console.log(parityList, parityList2);

// const movies = [
//     'The Mr. Fox',
//     'Mr. and Mrs. Smith',
//     'Mrs. Doubtfire',
//     'Mr. Deeds'
// ]

// const movie = movies.find(movie => { return movie.includes('Mrs') });
// console.log(movie); // stop after first find

// const movie2 = movies.find(m => (
//     m.indexOf('Mrs') === 0
// ));
// console.log(movie2);

// const firstHighRatedBook = books.find(b => b.rating > 4.3);
// console.log(firstHighRatedBook);

// const neilBook = books.find(b => b.authors.includes('Neil Gaiman'));
// console.log(neilBook);

// const nums = [22, 51, 87, 19, 5, 38, 13, 46, 11, 60];

// const evenNums = nums.filter(n => (n % 2 === 0));
// console.log(evenNums);

// const bigNums = nums.filter(n => (n >= 50));
// console.log(bigNums);

// const goodBooks = books.filter(book => (book.rating >= 4.3));
// console.log(goodBooks);

// const fantasyBooks = books.filter(book => (book.genre.includes('fantasy')));
// console.log(fantasyBooks);

// let query = 'the';
// const results = books.filter(b => (
//     b.title.toLowerCase().includes(query.toLowerCase()))
// )
// console.log(results);

// const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// const threeSymbols = words.every(word => (word.length === 3))  // return true, all elements has lenght 3;
// console.log(threeSymbols);

// const gLetter = words.every(word => word.includes('g'))
// console.log(gLetter);

// const dFirstLetter = words.some(word => {
//     const firstLetter = word[0];
//     return firstLetter === 'd';
// })
// console.log(dFirstLetter);

// const highRating = books.every(book => book.rating > 3.5);
// console.log(highRating);

// const twoAuthors = books.some(book => {
//     const numAuthors = book.authors.length;
//     return numAuthors === 2;
// })
// console.log(twoAuthors);

// const prices = [400.50, 3000, 99.99, 10, 12.00, 9500, 1000];
// console.log(prices.sort());

// const ascSort = prices.slice().sort((a,b) => a - b);
// console.log(ascSort);

// // const descSort = prices.sort((a,b) => b - a);
// const descSort = prices.slice().sort((a,b) => b - a); // slice() - copy data from array.
// console.log(descSort);
// console.log(prices); // the original array was mutated

// const sortedAscBooks = books.slice().sort((a,b) => (a.rating - b.rating));
// console.log(sortedAscBooks);

// const sortedDscBooks = books.slice().sort((a,b) => (b.rating - a.rating));
// console.log(sortedDscBooks);

// const nums = [3, 4, 5, 6, 7]
// const total = nums.reduce((acc, cur) => {
//     return acc + cur;
// })
// console.log(total);
// const multiply = nums.reduce((prev, cur) => (prev * cur));
// console.log(multiply);

// const grades = [87, 64, 91, 76, 98, 84, 69, 91]
// const maxGrade = grades.reduce((prevVal, currVal) => {
//     if(prevVal > currVal) return prevVal;
//     return currVal;
// })
// console.log(maxGrade);

// const minGrade = grades.reduce((prevVal, currVal) => (prevVal < currVal ? prevVal : currVal))
// console.log(minGrade);

// const minGrade2 = grades.reduce((prevVal, currVal) => (Math.min(prevVal, currVal)))
// console.log(minGrade2);

// const newSum = [10, 20, 30, 40, 50].reduce((sum, curr) => (sum + curr), 100); // 100 - initial number
// console.log(newSum);

// const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'y', 'y', 'n', 'y', 'n', 'n', 'y']
// const voteObj = votes.reduce((tally, val) => {
//     if(tally[val]) {
//         tally[val]++;
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
// }, {}) // {} - initial object
// console.log(voteObj);

// const groupedByRatingBooks = books.reduce((groupedBooks, curBook) => {
//     const key = Math.floor(curBook.rating);
//     if(!groupedBooks[key]) groupedBooks[key] = [];
//     groupedBooks[key].push(curBook);
//     return groupedBooks;
// }, {})
// console.log(groupedByRatingBooks);

// function multiply(x, y=1) {
//     return x * y;
// }

// function multiply(x = 1, y) {
//     return x * y;
// }
// console.log(multiply(2)); // Nan (x=2, y=undifined) default parameter should be in the end

// const greet = (person, greeting='Hi', punctuation) => (console.log(`${greeting}, ${person} ${punctuation}`));
// greet('?', 'Oleh'); // the order is important!

// console.log(Math.max(2, 25, 9, 13, 7, 34));
// console.log(Math.min(2, 25, 9, 13, 7, 34));
// const nums = [2, 25, 9, 13, 7, 34]
// console.log(Math.max(nums)); // return Nan, doesnt work with array
// console.log(Math.max(...nums));

// function four(a, b, c, d) {
//     console.log('a', a);
//     console.log('b', b);
//     console.log('c', c);
//     console.log('d', d);
// }

// const colors = ['green', 'orange', 'black', 'white']
// four(colors);
// four(...colors);
// const str = 'GOAT'
// four(str);
// four(...str);

// const fruits = ['orange', 'apple', 'banana', 'mango', 'kiwi']
// const vegies = ['potatoe', 'tomeatoe', 'onion', 'garlic', 'cucumber']
// const drinks = ['water', 'milk', 'beer', 'coca', 'sprite']

// const food = [...vegies, ...fruits, 'salad'] // the order does matter
// const fruits2 = [...fruits]
// console.log(food);
// console.log(fruits2); // new array
// const shoppingList = [...fruits, ...vegies, ...drinks]
// console.log(shoppingList.sort());

// console.log('abcdef'.split(''));
// console.log([...'abcdef']);

// const feline = {
//     legs: 4,
//     family: 'Felidae'
// };

// const canine = {
//     family: 'Caninae',
//     furry: true
// };

// const dog = {
//     ...canine,
//     isPet: true,
//     adorable: true
// }
// console.log(dog);

// const cat = {
//     ...feline,
//     isGrumpy: true,
//     peronality: 'unpredictable'
// }
// console.log(cat);

// const catDog = {
//     ...canine,
//     ...feline
// }
// console.log(catDog);

// const tripod = {
//     ...canine,
//     legs: 3 //rewrite legs property, the oreder does metter
// }
// console.log(tripod);

// const catDogClone = {
//     ...catDog
// }
// console.log(catDog === catDogClone);
// // [...catDog]; // non iterable, only with object
// console.log({...[4,5,6]});
// console.log({...'abcde'});

// const random = [...'hello', {...catDog}];
// console.log(random);

// function sum() {
//     const argsArr = [...arguments];
//     return argsArr.reduce((a, b) => a + b);
// }
// console.log(sum(2,3,5,7,8));

// function fullName(first, last) {
//     console.log(arguments);
//     console.log(first);
// }
// fullName('Tom', 'Smith', 'Jr.', 'III');

// const multiply = () => (console.log(arguments)) // arguments doesn't work with arrow function
// multiply(2,4);

// function sum(...nums) {
//     return nums.reduce((total, curVal) => total + curVal);
// }
// console.log(sum(2,4,6));

// function fullName(first, last, ...titles) { // rest must be the last!
//     console.log('first', first);
//     console.log('last', last);
//     console.log('titles', titles);
// }
// fullName('Tom', 'Smith', 'Jr.', 'III');

// const multiply = (...nums) => (
//     nums.reduce((total, cur) => total * cur)
// );
// console.log(multiply(4,5,6));

// const animals = ["dog", "cat", "deer", "mouse", "rabbit", "bear"];
// // const dog = animals[0];
// // const cat = animals[1];
// // const deer = animals[2];
// const [dog, cat, deer] = animals; // order does matter!
// console.log(cat);
// const [dog1, , , , , bear1] = animals;
// console.log(dog1, bear1);
// const [dog2, ...others] = animals;
// console.log(dog2, others);

// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Mr.",
// };

// const { last, first, time } = runner; // {} - for distructuring objects, order doesn't matter.
// console.log(first, last, time); // time underfined

// const { country: nation, title: title1 } = runner; // variable nation with value from country
// console.log(nation, title1);
// console.log(country); // error
// const { country, ...other } = runner;
// console.log(other);

// const results = [
//   {
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "Kenya",
//   },
//   {
//     first: "Feyisa",
//     last: "Lilesa",
//     country: "Ethiopia",
//   },
//   {
//     first: "Galen",
//     last: "Rupp",
//     country: "USA",
//   },
// ];

// const [, , bronze] = results;
// console.log(bronze);
// const [{ first: goldWinner }, , { country }] = results;
// console.log(country);
// console.log(goldWinner);

// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Mr.",
// };

// function print(person) {
//     const {first, last, title} = person;
//     console.log(`${first}, ${last}, ${title}`);
// }
// print(runner);

// function print2({first, last, country}) {
//     console.log(first, last, country);
// }
// print2(runner);

// const response = ['HTTP', '200 OK', 'application/json']
// function parseResponse([protocol, statusCode, contentType]) {
//     console.log(protocol, statusCode)
// }
// parseResponse(response);

// const sum = 10;
// const avg = 8;

// const obj1 = {
//     sum: sum,
//     avg: avg
// };
// const obj2 = {
//     sum,
//     avg
// };
// console.log(obj1);
// console.log(obj2);

// const role = 'host';
// const person = 'Jools Holland';
// const role2 = 'Director';
// const person2 = 'James Cameron';

// const team = {
//     role: person
// }
// console.log(team);

// const team2 = {};
// team2[role] = person;
// team2[role2] = person2;
// console.log(team2);

// const team3 = {
//     [role]: person,
//     [role2]: person2,
//     [1+2+3]: 'six'
// }
// console.log(team3);

// function addProperty(obj, k, v) {
//     const  newObj = {...obj};
//     newObj[k] = v;
//     return newObj;
// }
// console.log(addProperty(team3, 4, 'four'));

// const addProperty2 = (obj, k, v) => ({...obj, [k]:v });
// console.log(addProperty(team3, 'happy', true));

// const math = {
//     numbers: [1,2,3,4,5],
//     add: function(x,y) {
//         return x+y;
//     },
//     multiply: function(x,y) {
//         return x*y;
//     }
// }
// console.log(math);
// console.log(math.add(5,2));

// const auth = {
//     username: 'Tommy',
//     login() {
//         console.log('LOOGED IN!')
//     },
//     logout() {
//         console.log('GOODBYE!')
//     }
// }
// console.log(auth);

// function sayHi() {
//     console.log('Hi!');
//     console.log(this);
// }
// // sayHi();

// const greet = function() {
//     console.log(this);
// }
// // greet();

// const person = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         const {first, last, nickName} = this;
//         return `${first} ${last} AKA ${nickName}`;
//     },
//     printBio() {
//         console.log(this); // set to person object
//         const fullName = this.fullName();
//         console.log(`${fullName} is a nice person!`);
//     },
//     laugh: () => {
//         console.log(this); // // set to window object
//         console.log(`${this.nickName} says HAHAHA!`)
//     }
// }

// console.log(person.fullName());
// person.printBio();

// const printBio2 = person.printBio;
// person.printBio(); // works!
// // printBio2(); // error!
// person.laugh();

// const annoyer  = {
//     phrases: ['Yo!', 'literally', 'cray cray', 'YOLO', 'Totes'],
//     pickPhrases() {
//         const idx = Math.floor(Math.random() * this.phrases.length);
//         return this.phrases[idx];
//     },
//     start() {
//         this.timerId = setInterval(() => { // use arrow function to get this from start
//             // console.log(this); // set to global variable window with function()
//             console.log(this.pickPhrases());
//         }, 3000)
//     },
//     stop() {
//         clearInterval(this.timerId);
//     }
// }

// function makeDake() {
//   const deck = [];
//   const suitList = ["clubs", "spades", "hearts", "diamonds"];
//   const valueList = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//   for (const suit of suitList) {
//     for (const value of valueList) {
//       deck.push({
//         value,
//         suit,
//       });
//     }
//   }
//   return deck;
// }

// function drawCard(deck) {
//   return deck.pop();
// }

// // const myDeck = makeDake();
// // const card1 = drawCard(myDeck);

// const myDeck = {
//   deck: [],
//   drawnCards: [],
//   suitList: ["clubs", "spades", "hearts", "diamonds"],
//   valueList: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
//   initializeDeck() {
//     const { deck, suitList, valueList } = this;
//     for (const suit of suitList) {
//       for (const value of valueList) {
//         deck.push({
//           value,
//           suit,
//         });
//       }
//     }
//     return deck;
//   },
//   drawCard() {
//     const card = this.deck.pop();
//     this.drawnCards.push(card);
//     return card;
//   },
//   drawMultiple(num) {
//     const cards = [];
//     for (let i = 0; i < num; i++) {
//       const card = this.drawCard();
//       cards.push(card);
//     }
//     return cards;
//   },
//   shuffle() {
//     const {deck} = this;
//     // loop over array backwards
//     for (let i = deck.length - 1; i > 0; i--) {
//       // pick random element before current element
//       let j = Math.floor(Math.random() * i + 1);
//       // swap elements
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//   }
// };

// myDeck.initializeDeck();
// myDeck.shuffle();
// const h1 = myDeck.drawMultiple(2);
// const h2 = myDeck.drawMultiple(2);
// const h3 = myDeck.drawMultiple(5);
// console.log(myDeck.deck);
// console.log(myDeck.drawnCards);

//made the function that returns object
const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suitList: ["clubs", "spades", "hearts", "diamonds"],
        valueList: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
        initializeDeck() {
          const { deck, suitList, valueList } = this;
          for (const suit of suitList) {
            for (const value of valueList) {
              deck.push({
                value,
                suit,
              });
            }
          }
          return deck;
        },
        drawCard() {
          const card = this.deck.pop();
          this.drawnCards.push(card);
          return card;
        },
        drawMultiple(num) {
          const cards = [];
          for (let i = 0; i < num; i++) {
            const card = this.drawCard();
            cards.push(card);
          }
          return cards;
        },
        shuffle() {
          const {deck} = this;
          // loop over array backwards
          for (let i = deck.length - 1; i > 0; i--) {
            // pick random element before current element
            let j = Math.floor(Math.random() * i + 1);
            // swap elements
            [deck[i], deck[j]] = [deck[j], deck[i]];
          }
        }
      }
}

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

const myDeck2 = makeDeck();
myDeck2.initializeDeck();