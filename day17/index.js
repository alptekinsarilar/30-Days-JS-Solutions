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
/* const student = {
  firstName: "Alptekin",
  lastName: "Sarilar",
  age: 21,
  skills: ["HTML", "JavaScript"],
  country: "Turkey",
};

localStorage.setItem("student", JSON.stringify(student, undefined, 4));
console.log(localStorage);
console.log(localStorage.getItem("student")); */

// Level 3
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

const account_1 = new PersonAccount(
  "Alptekin",
  "Sarilar",
  [1250, 1750],
  [500, 300, 200]
);

localStorage.setItem("account_1", JSON.stringify(account_1, undefined, 4));
console.log(localStorage.getItem("account_1"));
