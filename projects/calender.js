const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const timeEl = document.getElementById("time");

const date = new Date();

const month = date.getMonth();

monthName.innerHTML = date.toLocaleString("en", {month:"long"})

dayName.innerHTML = date.toLocaleString("en", {weekday:"long"});

dayNumber.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();

timeEl.innerHTML = date.toLocaleString("en", {hour:"2-digit", minute:"2-digit", hour12:true});