class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks) {
      this.durationInput = durationInput;
      this.startBtn = startBtn;
      this.pauseBtn = pauseBtn;
      if (callbacks) {
        this.onStart = callbacks.onStart;
        this.onTick = callbacks.onTick;
        this.onComplete = callbacks.onComplete;
      }
  
      this.startBtn.addEventListener("click", this.start); //this.start.bind(this)
      this.pauseBtn.addEventListener("click", this.pause);
    }
  
    start = () => {
      if (this.onStart) {
        this.onStart(this.timeRemaining);
      }
      this.tick(); // run immediately by click;
      this.interval = setInterval(this.tick, 10);
    };
  
    pause = () => {
      clearInterval(this.interval);
    };
  
    tick = () => {
      if (this.timeRemaining <= 0) {
        this.pause();
        if (this.onComplete) {
          this.onComplete();
        }
      } else {
        this.timeRemaining = this.timeRemaining - 0.01;
        if (this.onTick) {
          this.onTick(this.timeRemaining);
        }
      }
    };
  
    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
  
    set timeRemaining(time) {
      this.durationInput.value = time.toFixed(2);
    }
  }