const BIRTH_MONTH = 11;
const BIRTH_DATE = 30;
let BIRTH_YEAR;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countdownActive;
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
    console.log(targetDate.toLocaleDateString());
    if (nowMonth === BIRTH_MONTH && nowDate === BIRTH_DATE) {
      clearInterval(countdownActive);
    }
  }, second);
}
updateDOM();
