// Level 1
/* let text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let pattern = /\d+/g;
let earnings = text.match(pattern);

let annualIncome =
  parseInt(earnings[0]) * 12 +
  parseInt(earnings[1]) +
  parseInt(earnings[2]) * 12;
console.log(annualIncome);

// The position of some particles => I actually don't understand how this relates to regex

const is_valid_variable = (variable) => {
  let pattern = /^[^\d][^\-]+$/g; // I'm not sure if this works properly for other possible variable names :/
  return pattern.test(variable);
};

console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));
 */

// Level 2
const tenMostFrequentWords = (text) => {
  let pattern = /\w+/g;
  let words = text.match(pattern);
  const map = new Map();
  words.forEach((word) => {
    if (map.get(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  });

  const result = [];

  for (const [key, value] of map) {
    result.push({ word: key, count: value });
  }

  result
    .sort((a, b) => {
      if (a.count > b.count) return 1;
      else if (a.count < b.count) return -1;
      return 0;
    })
    .reverse();

  return result.slice(0, 10);
};

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
