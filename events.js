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

const creditCardInput = document.querySelector('#cc');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veg');

const form = document.querySelector('#signup-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Submitted the form!');
    console.log(creditCardInput.value);
    console.log(termsCheckBox.checked);
    console.log(veggieSelect.value);
    // send form data to db
})

const formData = {};
for (let input of [creditCardInput, termsCheckBox, veggieSelect]) {
    // 'change' event works different only for input field, triger event when focus is moved
    input.addEventListener('input', ({target}) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    });
}

// cCardInput.addEventListener('input', e => {
//     console.log('CC changed!', e);
//     formData['cc'] = e.target.value;
// })

// veggieSelect.addEventListener('input', e => {
//     console.log('Veggie changed!', e);
//     formData['veggie'] = e.target.value;
// })

// termsCheckBox.addEventListener('input', e => {
//     console.log('CheckBox changed!');
//     formData['agreeTerms'] = e.target.checked;
// })