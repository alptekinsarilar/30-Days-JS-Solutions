// Initial Data
const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

// Level 1
/* console.table(countries)

// Display the countries object as a table ??

console.group('Countries')
console.table(countries)
console.groupEnd() */

// Level 2
/* console.assert(10 > 2 * 10, "10 is not bigger than 2 * 10");

console.warn("Warning! This is a warning message and you are in danger zone!");

console.error("A ah! You should best check the MDN!");
 */

// Level 3

import { countries as data } from "../data/countries.js";

console.time("Regular for loop");
for (let i = 0; i < data.length; i++) {
  let j = data[i]; // for clear output I didn't print every country, instead I assign it to a variable
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const country of data) {
  let j = country;
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach((country) => {
  let j = country;
});
console.timeEnd("forEach loop");
