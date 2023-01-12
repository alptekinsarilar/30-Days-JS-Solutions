// Initial
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Level 1
/* const readCountries = async () => {
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

readCountries(); */

// Level 2
/* const printCats = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    let catNames = [];
    for (const cat of cats) {
      catNames.push(cat.name);
      console.log(cat.name);
    }
    return catNames;
  } catch (errorMessage) {
    console.error(errorMessage);
  }
};

const catNames = printCats();
 */

// Level 3
const averageWeightOfCats = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    let catWeights = [];
    const pattern = /([0-9]+) - ([0-9]+)/;
    for (const cat of cats) {
      let weight = cat.weight.metric;

      const match = weight.match(pattern);
      let averageWeight = (parseInt(match[1]) + parseInt(match[2])) / 2.0;

      catWeights.push(averageWeight);
    }
    return catWeights;
  } catch (errorMessage) {
    console.error(errorMessage);
  }
};

//const averageCatWeights = await averageWeightOfCats();
//console.log(averageCatWeights);

const findLargestCountries = async (num) => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    let populations = [];
    for (const country of countries) {
      populations.push(country.population);
    }
    const largestPopulations = populations
      .map((p) => p) // I didn't want to sort the original population array
      .sort((a, b) => {
        // sorting populations in ascending order
        return a - b;
      })
      .slice(-num) // getting largest {num} population
      .reverse();

    let largestCountryNames = [];
    largestPopulations.forEach((population) => {
      for (const country of countries) {
        if (country.population === population) {
          largestCountryNames.push(country.name);
        }
      }
    });

    return largestCountryNames;
  } catch (errorMessage) {
    console.error(errorMessage);
  }
};

//const largestCountryNames = await findLargestCountries(10);
//console.log(largestCountryNames);

const findOfficialLanguagesUsed = async () => {
  const response = await fetch(countriesAPI);
  const countries = await response.json();

  let languages = new Set();

  for (const country of countries) {
    country.languages.forEach((lang) => {
      languages.add(lang.name);
    });
  }
  return languages;
};

console.log(await findOfficialLanguagesUsed());
