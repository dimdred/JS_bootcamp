function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

const moveCoin = () => {
    const width = Math.floor(Math.random() * window.innerWidth); 
    const height = Math.floor(Math.random() * window.innerHeight); 
    coin.style.top = `${height}px`;
    coin.style.left = `${width}px`;
}

moveCoin();

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowDown") {
    const currTop = extraxtPos(player.style.top);
    player.style.top = `${currTop + 50}px`;
  }
  else if (e.key === "ArrowUp") {
    const currTop = extraxtPos(player.style.top);
    player.style.top = currTop < 50 ? 0 : `${currTop - 50}px`;
  }
  else if (e.key === "ArrowLeft") {
    const currLeft = extraxtPos(player.style.left);
    player.style.left = currLeft < 50 ? 0 : `${currLeft - 50}px`;
    player.style.transform = 'scale(-1,1)';
  }
  else if (e.key === "ArrowRight") {
    const currLeft = extraxtPos(player.style.left);
    player.style.left = `${currLeft + 50}px`;
    player.style.transform = 'scale(1,1)';
  }
  if(isTouching(player,coin)) moveCoin();
});

const extraxtPos = (pos) => {
  if (!pos) return 0;
  return parseInt(pos.slice(0, -2));
};