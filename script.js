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