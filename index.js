const elem = document.querySelector(".clock");

function getClock() {
  const clock = new Date();
  const day = clock.getDay();
  const hours = clock.getHours();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const minutes = clock.getMinutes();
  const rightMinutes = minutes < 10 ? "0" + minutes : minutes;

  const getWeekDay = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  };

  getWeekDay();

  const addZero = () => {
    const twelveHours = hours - (hours >= 12 ? 12 : 0);
    const hoursWithZero = twelveHours < 10 ? "0" + twelveHours : twelveHours;

    return hoursWithZero;
  };

  return (elem.textContent = `${getWeekDay()} ${addZero()} : ${rightMinutes} ${amOrPm}`);
}

setInterval(getClock, 2000);
