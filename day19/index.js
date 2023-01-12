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
function guessTheRandom() {
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
innerFunctions.printRandom();
