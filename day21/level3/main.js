// Level 3 Mini Project
// Credit: https://github.com/3KINGZ/30-Days-of-JavaScript-Solutions/blob/master/Day-21/level-3/script.js
// I took some of the codes from him/her

const body = document.querySelector("body");
//body styling
body.style.textAlign = "center";
body.style.fontFamily = "sans-serif";

const h1 = document.querySelector("h1");
// h1 extract 2020
h1.innerHTML = "Asabenah Yetayeh challenges in <span id='year'>2020<span>";
const year = document.getElementById("year");
year.style.fontSize = "70px";

const h2 = document.querySelector("h2");
//h2 styling
h2.style.textDecoration = "underline";

const p = document.createElement("p");
h2.parentNode.insertBefore(p, h2.nextSibling);

let date = new Date();
setInterval(() => {
  date = new Date();
  p.textContent = date.toUTCString();
  p.style.backgroundColor = getRandomColor();
  year.style.color = getRandomColor();
}, 1000);

const getRandomColor = () => {
  let random1 = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  return (color = `rgb(${random1},${random2},${random3})`);
};

p.textContent = date.toUTCString();
p.style.border = "solid 1px";
p.style.width = "250px";
p.style.padding = "5px";
p.style.margin = "0 auto";

const lis = document.querySelectorAll("li");
lis.forEach((li) => {
  li.style.paddingTop = "12px";
  li.style.fontSize = "24px";
  li.style.listStyle = "none";
  li.style.border = "solid 0.5px";
  li.style.margin = "0 auto";
  li.style.width = "650px";
  li.style.height = "40px";

  let pattern = /(\w+)$/g;
  let lastWord = li.textContent.match(pattern)[0];
  //console.log(lastWord)
  switch (lastWord) {
    case "Done":
      li.style.backgroundColor = "limegreen";
      break;
    case "Ongoing":
      li.style.backgroundColor = "gold";
      break;
    case "Coming":
      li.style.backgroundColor = "salmon";
      break;
    default:
      break;
  }
});
