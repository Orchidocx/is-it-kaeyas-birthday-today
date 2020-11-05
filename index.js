const BIRTH_MONTH = 11;
const BIRTH_DATE = 30;
let BIRTH_YEAR;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const nowTimeElement = document.getElementById("now-time");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownContainer = document.getElementById("countdown-container");
const isBirthdayToday = document.getElementById("is-birthday-today");

let countdownActive;
let clock;
function updateDOM() {
  clock = setInterval(() => {
    const now = new Date();
    nowTimeElement.innerText = now.toLocaleTimeString();
  }, second);
  countdownActive = setInterval(() => {
    const now = new Date();
    const nowMonth = now.getMonth() + 1;
    const nowDate = now.getDate();
    const nowYear = now.getFullYear();

    if (nowMonth === BIRTH_MONTH) {
      if (nowDate > BIRTH_DATE) {
        BIRTH_YEAR = nowYear + 1;
      } else {
        BIRTH_YEAR = nowYear;
      }
    } else if (nowMonth > BIRTH_MONTH) {
      BIRTH_YEAR = nowYear + 1;
    } else {
      BIRTH_YEAR = nowYear;
    }
    const targetDate = new Date(BIRTH_YEAR, BIRTH_MONTH - 1, BIRTH_DATE);

    const distance = targetDate.getTime() - now.getTime();
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;

    if (nowMonth === BIRTH_MONTH && nowDate === BIRTH_DATE) {
      isBirthdayToday.innerHTML = "YES";
      clearInterval(countdownActive);
      daysElement.innerText = 0;
      hoursElement.innerText = 0;
      minutesElement.innerText = 0;
      secondsElement.innerText = 0;
    }
  }, second);
}
updateDOM();
