const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyRef: document.body,
};

let isStarted = false;
let timerId = null;

const startChangeBgColor = () => {
  if (isStarted) {
    return;
  }
  isStarted = true;
  refs.startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
    const newBgColor = getRandomHexColor();
    console.log(newBgColor);
    refs.bodyRef.style.backgroundColor = `${newBgColor}`;
  }, 1000);
};

const stopChangeBg = () => {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled', true);

  isStarted = false;
};

refs.startBtn.addEventListener('click', startChangeBgColor);
refs.stopBtn.addEventListener('click', stopChangeBg);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(timerId);
