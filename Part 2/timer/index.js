class Timer {
    constructor(durationInput, startBtn, pauseBtn) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        this.startBtn.addEventListener('click', this.start); //this.start.bind(this)
        this.pauseBtn.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick(); // run immediately by click;
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        if(this.timeRemaining <= 0) {
            this.pause();
        }
        else {
            this.timeRemaining = this.timeRemaining - 1;
        }
    }

    // getTime = () => {
    //     return parseFloat(this.durationInput.value);
    // }
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    // setTime = (time) => {
    //     this.durationInput.value = time;
    // }
    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

const timer = new Timer(durationInput, startBtn, pauseBtn);