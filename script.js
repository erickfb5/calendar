let nav = 0;
let clicked = null;
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const calendar = document.getElementById("calendar");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function loadCalendar() {
  const date = new Date();

  if (nav !== 0) {
    date.setMonth(new Date().getMonth() + nav);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

  displayMonthAndYear(date, year);

  calendar.innerHTML = "";

  for (let index = 1; index <= paddingDays + daysInMonth; index++) {
    const daysSquare = document.createElement("div");
    daysSquare.classList.add("day");

    if (index > paddingDays) {
      daysSquare.innerText = index - paddingDays;
      daysSquare.addEventListener("click", () => console.log("click"));
    } else {
      daysSquare.classList.add("padding");
    }

    calendar.appendChild(daysSquare);
  }
}

	
function displayMonthAndYear(date, year) {
  document.getElementById(
    "monthDisplay"
  ).innerText = `${date.toLocaleDateString("en-us", {
    month: "long",
  })} ${year}`;
}

function initButtons() {
  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    loadCalendar();
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    loadCalendar();
  });
}

initButtons();
loadCalendar();
