// Initial
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Level 1
const readCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    for (const country of countries) {
      console.log(
        `Name: ${country.name}, Capital: ${country.capital}, Population: ${country.population}, Area: ${country.area}`
      );
    }
  } catch (errMsg) {
    console.error(errMsg);
  }
};

readCountries();
