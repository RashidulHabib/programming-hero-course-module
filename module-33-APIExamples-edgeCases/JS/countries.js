const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("grid-container");

  /* for (const country of countries) {
    console.log(country);
    const p = document.createElement("p");
    p.innerText = `Name: ${country.name}
    capital: ${country.capital}
    flag: ${country.flag}`;
    countryes.appendChild(p);
  } */

  countries.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryByName('${country.name}')">Show Details</button>`;
    countriesDiv.appendChild(div);
  });
};

const loadCountryByName = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};
const displayCountryDetail = (country) => {
  const countryDiv = document.getElementById("country-detail");
  countryDiv.innerHTML = `
    <h4>${country.name}</h4>
    <p>${country.population}</p> 
    <img width='200px' src='${country.flag}'>`;
};
