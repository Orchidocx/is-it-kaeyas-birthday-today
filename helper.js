function updateCountdown(distance, elements) {
  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}

function clearCountdown() {
  daysElement.innerText = 0;
  hoursElement.innerText = 0;
  minutesElement.innerText = 0;
  secondsElement.innerText = 0;
}

function updateDOM() {
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
    updateCountdown(distance);

    if (nowMonth === BIRTH_MONTH && nowDate === BIRTH_DATE) {
      isBirthdayToday.innerHTML = "YES";
      clearInterval(countdownActive);
      clearCountdown();
    }
  }, second);
}
