// Closures remember the outer function scope even after creation time.

// Level 1
/* function wait(ms) {
  return function (message) {
    setTimeout(() => {
      console.log(message);
    }, ms);
  };
}

const wait500 = wait(500);
const wait1000 = wait(1000);

wait500("Hi");
wait1000("Hello"); */

// Level 2
/* function guessTheRandom() {
  let random = Math.floor(Math.random() * 100);
  function isLessThan(num) {
    return random < num;
  }
  function isEqual(num) {
    return random === num;
  }
  function printRandom() {
    console.log(random);
  }

  return {
    isLessThan,
    isEqual,
    printRandom,
  };
}

const innerFunctions = guessTheRandom();
console.log(innerFunctions.isLessThan(15));
console.log(innerFunctions.isLessThan(30));
console.log(innerFunctions.isEqual(64));
innerFunctions.printRandom(); */

// Level 3
function personAcoount(firstName, lastName, incomes, expenses) {
  function totalIncome() {
    let totalIncome = incomes.reduce((totalIncome, income) => {
      return (totalIncome += income);
    });
    console.log(`Current total income is: ${totalIncome}`);
  }
  function totalExpenses() {
    let totalExpense = expenses.reduce((totalExpense, expense) => {
      return (totalExpense += expense);
    });
    console.log(`Current total expense is: ${totalExpense}`);
  }
  function addIncome(income) {
    incomes.push(income);
  }
  function addExpense(expense) {
    expenses.push(expense);
  }

  return {
    totalIncome,
    totalExpenses,
    addIncome,
    addExpense,
  };
}

const person1 = personAcoount(
  "Alptekin",
  "Sarilar",
  [100, 200, 300, 400],
  [10, 20, 30]
);

person1.totalIncome();
person1.totalExpenses();

person1.addIncome(500);
person1.addExpense(40);

person1.totalIncome();
person1.totalExpenses();
