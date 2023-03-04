function setTimer() {
  // Show time now
  document.getElementById("digital").classList.remove("delete");
  document.getElementById("digital").classList.add("clock");
}
function hideTimer() {
  // hide timer now
  document.getElementById("digital").classList.remove("clock");
  document.getElementById("digital").classList.add("delete");
  document.querySelector(".btn").textContent = "Show digital time";
}

function getAngle() {
  const hourHand = document.querySelector(".hour");
  const minuteHand = document.querySelector(".minute");
  const secondHand = document.querySelector(".second");
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  // hours, minutes, seconds is current time

  // Finding rotation required to display this time (simple math)
  let hrRotation = 30 * hours + minutes / 2 + seconds / 120;
  let minRotation = 6 * minutes + seconds / 10;
  let secRotation = 6 * seconds;

  // rotating hourHand, minuteHand and secondHand
  hourHand.style.transform = `translateX(-50%) rotate(${hrRotation}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minRotation}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secRotation}deg)`;
  let session = "AM";
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  // Displayed or set time in digital clock part
  var time = hours + ":" + minutes + ":" + seconds + " " + session;
  document.getElementById("digital").textContent = time;
}

function handleChange() {
  const btn = document.querySelector(".btn");
  if (btn.textContent === "Show digital time") {
    setTimer(); // shows time
    btn.textContent = "Hide digital time";
  } else {
    hideTimer(); // hides time
    btn.textContent = "Show digital time";
  }
}

getAngle();
setInterval(getAngle, 1000); // Time gets updated every 1 second
