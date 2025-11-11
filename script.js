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

// for star 1
function changeImageHover1(){
  document.getElementById("star1").src="odo.png";
}
function changeImageLeave1(){
  document.getElementById("star1").src="assets/icons+chibis/star.png";
}
//star 2
function changeImageHover2(){
  document.getElementById("star2").src="odo.png";
}
function changeImageLeave2(){
  document.getElementById("star2").src="assets/icons+chibis/star.png";
}
//star 3
function changeImageHover3(){
  document.getElementById("star3").src="odo.png";
}
function changeImageLeave3(){
  document.getElementById("star3").src="assets/icons+chibis/star.png";
}
//star 4
function changeImageHover4(){
  document.getElementById("star4").src="odo.png";
}
function changeImageLeave4(){
  document.getElementById("star4").src="assets/icons+chibis/star.png";
}
//star 5
function changeImageHover5(){
  document.getElementById("star5").src="odo.png";
}
function changeImageLeave5(){
  document.getElementById("star5").src="assets/icons+chibis/star.png";
}
//star6
function changeImageHover6(){
  document.getElementById("star6").src="odo.png";
}
function changeImageLeave6(){
  document.getElementById("star6").src="assets/icons+chibis/star.png";
}
//star7
function changeImageHover7(){
  document.getElementById("star7").src="odo.png";
}
function changeImageLeave7(){
  document.getElementById("star7").src="assets/icons+chibis/star.png";
}
//star 8
function changeImageHover8(){
  document.getElementById("star8").src="odo.png";
}
function changeImageLeave8(){
  document.getElementById("star8").src="assets/icons+chibis/star.png";
}
//star9
function changeImageHover9(){
  document.getElementById("star9").src="odo.png";
}
function changeImageLeave9(){
  document.getElementById("star9").src="assets/icons+chibis/star.png";
}
//star10
function changeImageHover10(){
  document.getElementById("star10").src="odo.png";
}
function changeImageLeave10(){
  document.getElementById("star10").src="assets/icons+chibis/star.png";
}
//star11
function changeImageHover11(){
  document.getElementById("star11").src="odo.png";
}
function changeImageLeave11(){
  document.getElementById("star11").src="assets/icons+chibis/star.png";
}
//star12
function changeImageHover12(){
  document.getElementById("star12").src="odo.png";
}
function changeImageLeave12(){
  document.getElementById("star12").src="assets/icons+chibis/star.png";
}
//star13
function changeImageHover13(){
  document.getElementById("star13").src="odo.png";
}
function changeImageLeave13(){
  document.getElementById("star13").src="assets/icons+chibis/star.png";
}
//star14
function changeImageHover14(){
  document.getElementById("star14").src="odo.png";
}
function changeImageLeave14(){
  document.getElementById("star14").src="assets/icons+chibis/star.png";
}
//star15
function changeImageHover15(){
  document.getElementById("star15").src="odo.png";
}
function changeImageLeave15(){
  document.getElementById("star15").src="assets/icons+chibis/star.png";
}
//star16
function changeImageHover16(){
  document.getElementById("star16").src="odo.png";
}
function changeImageLeave16(){
  document.getElementById("star16").src="assets/icons+chibis/star.png";
}
//star17
function changeImageHover17(){
  document.getElementById("star17").src="odo.png";
}
function changeImageLeave17(){
  document.getElementById("star17").src="assets/icons+chibis/star.png";
}
//star 18
function changeImageHover18(){
  document.getElementById("star18").src="odo.png";
}
function changeImageLeave18(){
  document.getElementById("star18").src="assets/icons+chibis/star.png";
}
//star 19
function changeImageHover19(){
  document.getElementById("star19").src="odo.png";
}
function changeImageLeave19(){
  document.getElementById("star19").src="assets/icons+chibis/star.png";
}
//star 20
function changeImageHover20(){
  document.getElementById("star20").src="odo.png";
}
function changeImageLeave20(){
  document.getElementById("star20").src="assets/icons+chibis/star.png";
}
//star 21
function changeImageHover21(){
  document.getElementById("star21").src="odo.png";
}
function changeImageLeave21(){
  document.getElementById("star21").src="assets/icons+chibis/star.png";
}
//star 22
function changeImageHover22(){
  document.getElementById("star22").src="odo.png";
}
function changeImageLeave22(){
  document.getElementById("star22").src="assets/icons+chibis/star.png";
}
//star 23
function changeImageHover23(){
  document.getElementById("star23").src="odo.png";
}
function changeImageLeave23(){
  document.getElementById("star23").src="assets/icons+chibis/star.png";
}
//star 24
function changeImageHover24(){
  document.getElementById("star24").src="odo.png";
}
function changeImageLeave24(){
  document.getElementById("star24").src="assets/icons+chibis/star.png";
}
//star 25
function changeImageHover25(){
  document.getElementById("star25").src="odo.png";
}
function changeImageLeave25(){
  document.getElementById("star25").src="assets/icons+chibis/star.png";
}
//IM FREEEE
//FINALLY
//my back hurts.

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
