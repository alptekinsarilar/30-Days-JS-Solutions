/* // Level 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  walk() {
    console.log(`My name is ${this.name} and I'm walking!`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof woof!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meooow!");
  }
  walk() {
    console.log("Nobody force me to walk if I don't want to!!!");
  }
}

let animal = new Animal("Barny", 5, "black", 4);
animal.walk();

let dog = new Dog("Kangal", 3, "white", 4);
dog.bark();

// Level 2
let cat = new Cat("Mirmir", 7, "orange", 4);
cat.walk();
 */

/* class Statistics {
  constructor(sample) {
    this.sample = sample;
  }

  count() {
    return this.sample.length;
  }

  sum() {
    return this.sample.reduce((acc, num) => (acc += num), 0);
  }

  min() {
    return Math.min(...this.sample);
  }

  max() {
    return Math.max(...this.sample);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.round(this.sum() / this.sample.length);
  }

  median() {
    let copy = [...this.sample];
    copy.sort((a, b) => a - b);

    let middle = Math.floor(copy.length / 2);

    if (copy.length % 2 === 0) {
      return (copy[middle - 1] + copy[middle]) / 2;
    } else {
      return copy[middle];
    }
  }

  mode() {
    const map = new Map();
    let maxCount = 0;
    let mode;

    for (let value of this.sample) {
      map.set(value, (map.get(value) || 0) + 1);
      if (map.get(value) > maxCount) {
        maxCount = map.get(value);
        mode = value;
      }
    }

    return { mode, maxCount };
  }

  var() {
    //let mean = this.sample.reduce((a, b) => a + b, 0) / this.sample.length; // gives output as 17.5424
    let mean = this.mean();
    let squaredDifferences = this.sample.map((num) => (num - mean) ** 2);
    let variance =
      squaredDifferences.reduce((a, b) => a + b, 0) / this.sample.length;
    return variance;
  }

  freqDist() {
    const frequency = new Map();
    const percetile = 100 / this.sample.length;
    for (let i = 0; i < this.sample.length; i++) {
      if (frequency.get(this.sample[i]) === undefined) {
        frequency.set(this.sample[i], percetile);
      } else {
        frequency.set(
          this.sample[i],
          frequency.get(this.sample[i]) + percetile
        );
      }
    }
    return frequency;
  }

  std() {
    return parseFloat(Math.sqrt(this.var()).toFixed(1));
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const statistics = new Statistics(ages);

console.log("Count:", statistics.count());
console.log("Sum:", statistics.sum());
console.log("Min:", statistics.min());
console.log("Max:", statistics.max());
console.log("Range:", statistics.range());
console.log("Mean:", statistics.mean());
console.log("Median:", statistics.median());
console.log("Mode:", statistics.mode());
console.log("Variance:", statistics.var());
console.log("Standard Deviation: ", statistics.std());
console.log("Frequency Distribution:", statistics.freqDist());
 */

class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }

  accountInfo() {
    let fullName = this.firstName + " " + this.lastName;
    let incomes =
      this.incomes.length > 0 &&
      this.incomes.slice(0, this.incomes.length - 1).join(", ") +
        ` and ${this.incomes[this.incomes.length - 1]}`;

    let formattedIncomes = incomes ? `He has incomes as ${incomes}` : "";
    let pronoun = this.gender == "Male" ? "His" : "Her";

    let info = `${pronoun} name is ${fullName}. ${formattedIncomes}`;
    return info;
  }

  totalIncome() {
    return this.incomes.reduce(
      (totalIncome, income) => (totalIncome += income),
      0
    );
  }

  totalExpenses() {
    return this.expenses.reduce(
      (totalExpense, expense) => (totalExpense += expense),
      0
    );
  }

  set addIncome(income) {
    this.incomes.push(income);
  }

  set addExpense(expense) {
    this.expenses.push(expense);
  }

  accountBalance() {
    return;
  }
}

const p1 = new PersonAccount(
  "Alptekin",
  "Sarilar",
  [1250, 1750],
  [500, 300, 200]
);

//...