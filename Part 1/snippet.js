const myImg = document.createElement('img');
myImg.src = 'https://images.unsplash.com/photo-1586196576988-85a5b369a979?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80';

myImg.style.width = '200px';
document.body.append(myImg);


const allEls = document.body.children; //document.getElementById('ntp-contents').children;

setInterval(() => {
    for(let elem of allEls) {
        const rotation = Math.floor(Math.random() * 360);
        const x = Math.floor(document.body.clientWidth * Math.random())
        const y = Math.floor(document.body.clientHeight * Math.random())
        elem.style.transition = 'all 2s';
        elem.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
    }
}, 2000)