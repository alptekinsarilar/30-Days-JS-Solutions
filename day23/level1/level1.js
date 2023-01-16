const warning = document.querySelector(".warning");
const input = document.getElementById("number-input");
const button = document.getElementsByTagName("button")[0];
const numbersWrapper = document.getElementsByClassName("numbers-wrapper")[0];

button.addEventListener("click", (e) => {
  if (input.value === "") {
    warning.textContent =
      "Enter number value on the input field to generate numbers";
  } else if (isNumeric(input.value)) {
    warning.style.display = "none";
    generateNumbers(input.value);
  } else {
    console.log("yoo");
    warning.textContent = "Input value must be a number";
    numbersWrapper.innerHTML = "";
  }
});

const generateNumbers = (number) => {
  for (let i = 0; i < number; i++) {
    const numberDiv = document.createElement("div");
    numberDiv.className = "number";
    numberDiv.style.fontSize = "16px";
    numberDiv.textContent = `${i}`;
    if (isPrime(i)) {
      numberDiv.style.backgroundColor = "crimson";
    } else if (i % 2 != 0) {
      numberDiv.style.backgroundColor = "gold";
    } else {
      numberDiv.style.backgroundColor = "lightgreen";
    }
    numbersWrapper.appendChild(numberDiv);
  }
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const isNumeric = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};
