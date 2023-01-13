const countriesAPI = "https://restcountries.com/v2/all";

const printCountries = async () => {
    try {
        const response = await fetch(countriesAPI);
        const countries = await response.json();

        const wrapper = document.getElementsByClassName("wrapper")[0];
        countries.forEach(country => {
            const countryDiv = document.createElement("div");
            countryDiv.className = "country"
            countryDiv.style.fontSize = "16px"
            countryDiv.textContent = `${country.name}`
            wrapper.appendChild(countryDiv)
        });

        const totalNumElement = document.getElementById("total-num");
        totalNumElement.textContent = `Total Number of countries: ${countries.length}`
    } catch (errorMessage) {
        console.log(errorMessage)
    }
}

printCountries()