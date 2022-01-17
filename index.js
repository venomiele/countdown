const giveaway = document.querySelector(".deadline");
const countdownContainer = document.querySelector(".contdown-format");
const items = document.querySelectorAll(".box h5");

// Months Array
const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",
];
  
let futureDate = new Date(2022, 11, 31 ,11, 59, 59);
let year = futureDate.getFullYear();
let hour = futureDate.getHours();
let minutes = futureDate.getMinutes();
let seconds = futureDate.getSeconds();
let month = months[futureDate.getMonth()];
let date = futureDate.getDate();
let weekDay = weekDays[futureDate.getDay()];


giveaway.textContent = `${weekDay} ${date} ${month} ${year} ${hour}:${minutes}:${seconds} PM`;

//Countdown
const futureTime = futureDate.getTime();

window.addEventListener("DOMContentLoaded", () => {
function getRemainingTime() {
  const today = new Date().getTime();
  let t = futureTime - today;
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60* 60 * 1000;
  let oneMinute = 60*1000; 
  let days = t/oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t%oneDay)/ oneHour);
  let minutes = Math.floor((t%oneHour)/oneMinute);
  let seconds = Math.floor((t%oneMinute) / 1000);

  // Interval
  let countdown = setInterval(getRemainingTime, 1000);
  
  function format(item) {
    if(item < 10) {
      return (item = `0${item}`)
    } else {
      return item;
    }
  }
  
  const values = [days,hours,minutes,seconds];
  items.forEach(function(item,index) {
    item.innerHTML = format(values[index]);
  });
}

getRemainingTime();
  
});