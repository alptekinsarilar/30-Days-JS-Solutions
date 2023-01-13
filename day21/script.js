// Level 1
const firstP = document.querySelector("p");
console.log("With using querySelector:", firstP);

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");

const allP = document.querySelectorAll("p");
console.log(allP);
allP.forEach((p) => console.log(p.textContent));

allP[3].textContent = "Fourth Paragraph";
p4.style.fontStyle = "italic";

p1.id = "para1";
p2.setAttribute("id", "para2");
p3.id = "para3";
p4.setAttribute("id", "para4");

console.log(p1);

// Level 2
p1.style.fontSize = "20px";
p2.style.margin = "10px";
p3.style.fontSize = "30px";

allP.forEach((p, i) => {
  if (i % 2 === 0) {
    p.style.color = "lightgreen";
  } else {
    p.style.color = "crimson";
  }
});

p3.textContent = "Günaydın";
p4.textContent = "'Günaydın' means 'Good Morning' in Turkish";
