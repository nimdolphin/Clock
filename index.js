const elem = document.querySelector(".clock");

function getClock() {
  const clock = new Date();
  const day = clock.getDay();
  const hour = clock.getHours();
  const amOrPm = hour >= 12 ? "PM" : "AM";
  const minute = clock.getMinutes();
  const rightMinute = minute < 10 ? "0" + minute : minute;

  const getWeekDay = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  };

  getWeekDay();

  const getHour12 = hour - (hour >= 12 ? 12 : 0);
  const rightHour = getHour12 < 10 ? "0" + getHour12 : getHour12;

  return (elem.textContent = `${getWeekDay()} ${rightHour} : ${rightMinute} ${amOrPm}`);
}

setInterval(getClock, 200);
