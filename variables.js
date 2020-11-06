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

const clock = setInterval(() => {
  const now = new Date();
  nowTimeElement.innerText = now.toLocaleTimeString();
}, second);
let countdownActive;
