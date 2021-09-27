const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

let intervalId = null;

start.addEventListener('click', changeColor);
stop.addEventListener('click', stopChangeColor);

function changeColor(e) {
  e.currentTarget.disabled = true;

  intervalId = setInterval(() => {
    const randomColorIndex = randomIntegerFromInterval(0, colors.length);
    body.style.background = colors[randomColorIndex];
  }, 1000);
}

function stopChangeColor() {
  start.disabled = false;
  clearInterval(intervalId);
}
