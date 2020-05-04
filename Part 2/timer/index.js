const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector('circle');
const perimetr = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimetr);

let currentOffset = 0;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart() {
    console.log("Timer started!");
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset = currentOffset - 1;
  },
  onComplete() {
    console.log("Timer is completed!");
  },
});