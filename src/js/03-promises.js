import Notiflix from 'notiflix';

const refs = {
  mianDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  count: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
  startBtn: document.querySelector('button'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          )
        );
      } else {
        reject(
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          )
        );
      }
    }, delay);
  });
}

function onSubmited(event) {
  event.preventDefault();
  const countOfIterations = Number(refs.count.value);
  const mainDelay = Number(refs.mianDelay.value);
  const step = Number(refs.delayStep.value);
  refs.form.reset();

  let delay = mainDelay;
  for (let index = 1; index < countOfIterations + 1; index += 1) {
    createPromise(index, delay);
    delay += step;
  }
}

refs.startBtn.addEventListener('click', onSubmited);
