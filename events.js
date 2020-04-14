const btn = document.querySelector('#clicker');
btn.onclick = () => (console.log('Clicker clicked!'))
btn.ondblclick = () => (console.log('Clicker double clicked!'))

const newBtn = document.querySelector('#newBtn');

newBtn.addEventListener('click', function() {
    console.log('Listener!')
})

newBtn.addEventListener('click', () => alert('Second Listener!'));

newBtn.addEventListener('mouseover', () => newBtn.innerText = 'Mouseover Button!')

newBtn.addEventListener('mouseout', () => newBtn.innerText = 'New Button!')

window.addEventListener('scroll', () => console.log('Stop scrolling!'))

const cCardInput = document.querySelector('#cc');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const form = document.querySelector('#signup-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Submitted the form!');
    console.log(cCardInput.value);
    console.log(terms.checked);
    console.log(veggieSelect.value);
    // send form data to db
})