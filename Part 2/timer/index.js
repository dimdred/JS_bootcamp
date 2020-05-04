const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector('circle');
const perimetr = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimetr);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', 
        perimetr * timeRemaining / duration - perimetr
    );
  },
  onComplete() {
    console.log("Timer is completed!");
  },
});