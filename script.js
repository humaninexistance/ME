function darkmode(){
    const body = document.body;
    const button = document.getElementById("darkmodebutton");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
    button.innerText = "Tsukasa mode!";
  } else {
    button.innerText = "An mode!";
  }
}

starRow.style.setProperty("--star-gap", `${randomStarGap}px`);
starRow.style.setProperty("--row-gap", `${randomRowGap}px`);
const starRow = document.querySelector("starrows");
const randomStarGap = Math.random() * 140 + 5;
const randomRowGap = Math.random() * 50 + 10;