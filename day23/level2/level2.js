const numberDiv = document.querySelector(".number-container");
const text = document.querySelector("#text");
let span;
document.addEventListener("keyup", (e) => {
  text.innerHTML = `You pressed <span>${e.key}</span>`;
  numberDiv.style.display = "block"
  numberDiv.textContent = `${e.keyCode}`;

  span = document.getElementsByTagName("span")[0];
  span.style.color = "limegreen";
});
