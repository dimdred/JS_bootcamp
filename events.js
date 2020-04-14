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