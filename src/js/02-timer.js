import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  daysField: document.querySelector('span[data-days]'),
  hoursField: document.querySelector('span[data-hours]'),
  minutesField: document.querySelector('span[data-minutes]'),
  secondsFields: document.querySelector('span[data-seconds]'),
};

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate) {
      refs.startBtn.setAttribute('disabled', true);
      alert('Please choose a date in the future');
      return;
    }
    selectedDate = selectedDates[0].getTime() - options.defaultDate;
    refs.startBtn.removeAttribute('disabled', false);
  },
};
flatpickr('input#datetime-picker', options);

const onCountDownStart = () => {
  setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(selectedDate);
    refs.daysField.textContent = days;
    refs.hoursField.textContent = hours;
    refs.minutesField.textContent = minutes;
    refs.secondsFields.textContent = seconds;
    selectedDate -= 1000;
  }, 1000);
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

refs.startBtn.addEventListener('click', onCountDownStart);
