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
/* const a = [4, 5, 8, 9];
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
 */

// Level 3
import { countries_data } from "../data/countries_data.js";

let languageSet = new Set();
countries_data.forEach((country) =>
  country.languages.forEach((language) => languageSet.add(language))
);
console.log(languageSet.size);

function mostSpokenLanguages(countries, n) {
  let allLanguages = []; // all languages in the data file
  let languageSet = new Set(); // set of languages, every language exists exactly 1 time 
  languageSet = countries.reduce((set, currentCountry) => {
    allLanguages.push(...currentCountry.languages);
    currentCountry.languages.forEach((l) => set.add(l));
    return set;
  }, languageSet);

  const counts = [];

  for (const l of languageSet) {
    const filteredLang = allLanguages.filter((lng) => lng === l);
    counts.push({ lang: l, count: filteredLang.length });
  }

  counts
    .sort((a, b) => {
      if (a.count > b.count) return 1;
      else if (a.count < b.count) return -1;
      return 0;
    })
    .reverse();

  return counts.slice(0, n);
}

console.log(mostSpokenLanguages(countries_data, 10));
