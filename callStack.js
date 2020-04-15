const repeat = (str, times) => {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += str;        
    }
    return result;
};

const scream = (str) => {
    return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 8);
    return rant;
};

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
};
console.log('Hello!');

// makeRant('I hate mayonnaise!', document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);

console.log('Hi everyone!');
// alert('Hi there!');
setTimeout(function() {
    console.log('MOOO!')
}, 7000);
setTimeout(function() {
    console.log('OINK!')
}, 3000);
console.log('Bye everyone!');
console.log('Bye for real everyone!');
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ0hpIGV2ZXJ5b25lIScpOw0Kc2V0VGltZW91dChmdW5jdGlvbigpIHsNCiAgICBjb25zb2xlLmxvZygnTU9PTyEnKQ0KfSwgNzAwMCk7DQpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgew0KICAgIGNvbnNvbGUubG9nKCdPSU5LIScpDQp9LCAzMDAwKTsNCmNvbnNvbGUubG9nKCdCeWUgZXZlcnlvbmUhJyk7DQpjb25zb2xlLmxvZygnQnllIGZvciByZWFsIGV2ZXJ5b25lIScpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D