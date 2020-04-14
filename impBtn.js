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