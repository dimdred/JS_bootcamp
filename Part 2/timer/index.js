class Timer {
    constructor(durationInput, startBtn, pauseBtn) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        this.startBtn.addEventListener('click', this.start); //this.start.bind(this)
    }

    start = () => {
        this.important();
    }

    important() {
        console.log('IMPORTANT!');
    }
}

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

const timer = new Timer(durationInput, startBtn, pauseBtn);
// timer.start();

// using arrow function
// console.log(this);
// const printThis = () => console.log(this);
// printThis();

// const colors = {
//     printColor() {
//         console.log(this);
//         const printThis = () => console.log(this);
//         printThis();
//     }
// }
// colors.printColor();

// using call, apply methods
// const printThis = function() {
//     console.log(this)
// }
// printThis.call({color: 'red'}); // the same with apply - override this


// dot rule: this belongs to the left of the '.' in the method call
const colors = {
    printColor() {
        console.log(this);
    }
}

const randomObj = {
    a: 1
};
randomObj.printColor = colors.printColor;
randomObj.printColor(); // this is randomObj