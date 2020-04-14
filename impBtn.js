const impBtn = document.querySelector('button');
impBtn.addEventListener('mouseover', () => {
    console.log('mouseover done!');
    const width = Math.floor(Math.random() * window.innerWidth);
    const hight = Math.floor(Math.random() * window.innerHeight);
    impBtn.style.left = `${width}px`
    impBtn.style.top = `${hight}px`
})

impBtn.addEventListener('click', () => {
    impBtn.innerText = 'You got me!'
    document.body.style.backgroundColor = 'green';
})

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];
// arrow function doesn't work (this doesn't work properly)
const h1 = document.querySelector('h1');
const changeColor = function(evt) {
    h1.style.color = this.style.backgroundColor;
    console.log(evt);
}
const boxes = document.querySelector('#boxes');
for(let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;   
    box.classList.add('box');
    boxes.appendChild(box);
    box.addEventListener('click', changeColor);
}
const keyPressed = document.body.addEventListener('keypress', function(e){
    console.log(e);
});