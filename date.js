function loadTime() {
  document.getElementById("updated-date").innerHTML = fullDate;
}
const currentDate = new Date();
console.log(currentDate);

const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const fullDate = day + "/" + month + "/" + year;
console.log(fullDate);
