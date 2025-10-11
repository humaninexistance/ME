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

const rows = document.querySelectorAll(".starrows"); // use a . for class!

rows.forEach(row => {
  const randomStarGap = Math.random() * 100 + 50;
  const randomRowGap = Math.random() * 100 + 50;

  row.style.setProperty("--star-gap", `${randomStarGap}px`);
  row.style.setProperty("--row-gap", `${randomRowGap}px`);
});

function changeImageHover1(){
  document.getElementById("star1").src="odo.png";
}
function changeImageLeave1(){
  document.getElementById("star1").src="star.png";
}