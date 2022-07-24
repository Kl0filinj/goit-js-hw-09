import Notiflix from 'notiflix';

const refs = {
  mianDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  count: document.querySelector('input[name="amount"]'),
  startBtn: document.querySelector('button'),
};
let promises = [];

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

function onSubmited(event) {
  event.preventDefault();
  const countOfIterations = Number(refs.count.value);
  const mainDelay = Number(refs.mianDelay.value);
  const step = Number(refs.delayStep.value);
  let delay = mainDelay;
  for (let index = 1; index < countOfIterations + 1; index += 1) {
    const newPromise = createPromise(index, delay);
    delay += step;
    promises.push(newPromise);
  }
  setTimeout(() => {
    promises.map(p => {
      setTimeout(() => {
        p.then(({ position, delay }) =>
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          )
        )
          .catch(({ position, delay }) =>
            Notiflix.Notify.failure(
              `❌ Rejected promise ${position} in ${delay}ms`
            )
          )
          .finally(x => (promises = []));
      }, step);
    });
  }, mainDelay);
}

refs.startBtn.addEventListener('click', onSubmited);
