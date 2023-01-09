// Level 1
/* const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

const newSet = new Set();
console.log(newSet);

for (let i = 0; i <= 10; i++) {
  newSet.add(i);
}
console.log(newSet);

newSet.delete(5);
console.log(newSet);

newSet.clear();
console.log(newSet);

const newArray = ["Hi", "Hello", "How", "are", "you?"];
const secondSet = new Set(newArray);
console.log(secondSet);

const countriesSet = new Map(
  countries.map((country) => [country, country.length])
);
console.log(countriesSet); */

// Level 2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

let c = [...a, ...b];
const unionSet = new Set(c);
console.log(unionSet);

const B = new Set(b);
let intersection = a.filter((num) => B.has(num));
const intersectionSet = new Set(intersection);
console.log(intersectionSet);

// Find a with b => I actually don't understand what that means
