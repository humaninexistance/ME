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


const canvas = document.querySelector(".canvas canvas");
const ctx = canvas.getContext("2d");

const container = document.querySelector(".canvas");

const params = {
    spring: 0.7,
    pointsNumber: 30,
    friction: 0.3,
    baseWidth: 0.5
};

const pointer = {
    x: 81,
    y: 50
};

const trail = Array.from(
    { length: params.pointsNumber },
    () => ({
        x: pointer.x,
        y: pointer.y
    })
);

// Keep the drawing surface matched to the small container.
function setupCanvas() {
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

setupCanvas();
window.addEventListener("resize", setupCanvas);

// Convert pointer coordinates into coordinates inside the canvas.
function updateMousePosition(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();

    pointer.x = clientX - rect.left;
    pointer.y = clientY - rect.top;

    // Keep the pointer within the canvas bounds.
    pointer.x = Math.max(0, Math.min(rect.width, pointer.x));
    pointer.y = Math.max(0, Math.min(rect.height, pointer.y));
}

canvas.addEventListener("mousemove", e => {
    updateMousePosition(e.clientX, e.clientY);
});

canvas.addEventListener("click", e => {
    updateMousePosition(e.clientX, e.clientY);
});

canvas.addEventListener("touchmove", e => {
    const touch = e.touches[0];
    if (touch) {
        updateMousePosition(touch.clientX, touch.clientY);
    }
}, { passive: true });

// Draw the trail.
function update() {
    const rect = canvas.getBoundingClientRect();

    ctx.clearRect(0, 0, rect.width, rect.height);

    trail.forEach((point, index) => {
        const previous = index === 0
            ? pointer
            : trail[index - 1];

        const spring = index === 0
            ? params.spring * 0.5
            : params.spring;

        point.x += (previous.x - point.x) * spring;
        point.y += (previous.y - point.y) * spring;
    });

    ctx.beginPath();

    trail.forEach((point, index) => {
        if (index === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            const previous = trail[index - 1];

            const midX = (previous.x + point.x) / 2;
            const midY = (previous.y + point.y) / 2;

            ctx.quadraticCurveTo(
                previous.x,
                previous.y,
                midX,
                midY
            );
        }
    });

    if (trail.length > 0) {
        const last = trail[trail.length - 1];
        ctx.lineTo(last.x, last.y);
    }

    ctx.strokeStyle = "#f17";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();

    window.requestAnimationFrame(update);
}

update();
