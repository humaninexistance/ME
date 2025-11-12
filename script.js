function lightmode(){
    const body = document.body;
    const button = document.getElementById("lightmodebutton");

    body.classList.toggle("light");

    if (body.classList.contains("light")) {
    button.innerText = "An mode!";
  } else {
    button.innerText = "Tsukasa mode!";
  }
}

const rows = document.querySelectorAll(".starrows"); // use a . for class!

rows.forEach(row => {
  const randomStarGap = Math.random() * 100 + 50;
  const randomRowGap = Math.random() * 100 + 50;

  row.style.setProperty("--star-gap", `${randomStarGap}px`);
  row.style.setProperty("--row-gap", `${randomRowGap}px`);
});

var countDownDate = new Date("Mar 24, 2026 13:54:00");

var x = setInterval(function() {
  var now = new Date();

  // Calculate total months difference
  var yearsDiff = countDownDate.getFullYear() - now.getFullYear();
  var monthsDiff = countDownDate.getMonth() - now.getMonth() + yearsDiff * 12;

  // Adjust days
  var daysDiff = countDownDate.getDate() - now.getDate();
  if (daysDiff < 0) {
    monthsDiff -= 1;
    var prevMonth = new Date(countDownDate.getFullYear(), countDownDate.getMonth(), 0);
    daysDiff += prevMonth.getDate();
  }

  // Calculate weeks and leftover days
  var weeks = Math.floor(daysDiff / 7);
  var days = daysDiff % 7;

  // Calculate hours, minutes, seconds
  var hours = countDownDate.getHours() - now.getHours();
  if (hours < 0) {
    hours += 24;
    if (days > 0) {
      days -= 1;
    } else if (weeks > 0) {
      weeks -= 1;
      days = 6;
    } else {
      monthsDiff -= 1;
      var prevMonth = new Date(countDownDate.getFullYear(), countDownDate.getMonth(), 0);
      days = prevMonth.getDate() - 1;
    }
  }

  var minutes = countDownDate.getMinutes() - now.getMinutes();
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  var seconds = countDownDate.getSeconds() - now.getSeconds();
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }

  document.getElementById("demo").innerHTML =
    " " + monthsDiff + " months " + weeks + " weeks " + days + " days " + hours + " hours " +
    minutes + " minutes and " + seconds + " seconds ";

}, 1000);
