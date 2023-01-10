// Level 1
let text =
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
