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

var countDownDate = new Date("Mar 24, 2027 13:54:00");

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

var x = setInterval( function() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  
  const time = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
  const localDateTime = `${day}/${month}/${year} ${time}`;
  
  document.getElementById("time").innerHTML = localDateTime;
}, 1000);


document.querySelectorAll(".year").forEach(section => {
  const tabs = section.querySelectorAll(".tab");
  const panels = section.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const selected = tab.dataset.tab;

      tabs.forEach(button => {
        const isActive = button === tab;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach(panel => {
        panel.hidden = panel.dataset.content !== selected;
      });
    });
  });
});

const confettiColors = [
    "#884499",
    "#bb6688",
    "#8888cc",
    "#ccaa88",
    "#ddaacc",
    "#ff7722"
];

const confettiBtn = document.getElementById("enaok");


confettiBtn.addEventListener("click", (event) => {
    const rect = confettiBtn.getBoundingClientRect();

    const originX = event.clientX || rect.left + rect.width / 2;
    const originY = event.clientY || rect.top + rect.height / 2;

    for (let i = 0; i < 45; i++) {
        const particle = document.createElement("div");
        particle.classList.add("confetti-particle");

        particle.style.backgroundColor =
            confettiColors[Math.floor(Math.random() * confettiColors.length)];

        particle.style.left = `${originX}px`;
        particle.style.top = `${originY}px`;

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = 15 + Math.random() * 100;
        const rotation = Math.random() * 360;

        anime({
            targets: particle,
            translateX: Math.cos(angle) * distance,
            translateY: Math.sin(angle) * distance,
            rotate: rotation,
            opacity: [1, 0],
            duration: 450 + Math.random() * 450,
            easing: "easeOutQuad",
            complete: () => particle.remove()
        });
    }
});
