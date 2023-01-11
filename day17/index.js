// Important note!: Run this codes on web console

// Level 1
/* console.log(localStorage);

localStorage.setItem("firstName", "Alptekin");
localStorage.setItem("lastName", "Sarilar");
localStorage.setItem("age", "21");
localStorage.setItem("country", "Turkey");
localStorage.setItem("city", "Ankara");

console.log(localStorage); */

// Level 2
const student = {
  firstName: "Alptekin",
  lastName: "Sarilar",
  age: 21,
  skills: ["HTML", "JavaScript"],
  country: "Turkey",
};

localStorage.setItem("student", JSON.stringify(student, undefined, 4));
console.log(localStorage);
console.log(localStorage.getItem("student"));
