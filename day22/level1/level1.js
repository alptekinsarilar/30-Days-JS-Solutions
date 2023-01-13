const wrapper = document.getElementById("wrapper");

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

for(let i=0; i<=101;i++) {
    const number = document.createElement("div");
    number.className = "number"
    number.style.fontSize = "16px"
    number.textContent = `${i}`
    if(isPrime(i)) {
        number.style.backgroundColor = "crimson"
    } 
    else if(i % 2 != 0) {
        number.style.backgroundColor = "gold"
    } else {
        number.style.backgroundColor = "lightgreen"
    }
    wrapper.appendChild(number)
}