// Closures remember the outer function scope even after creation time.

// Level 1
function wait(ms) {
  return function (message) {
    setTimeout(() => {
      console.log(message);
    }, ms);
  };
}

const wait500 = wait(500);
const wait1000 = wait(1000);

wait500("Hi");
wait1000("Hello");
