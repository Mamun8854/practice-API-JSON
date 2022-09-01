const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  const countryContainer = document.getElementById("countries-continer");
  countries.forEach((country) => {
    // console.log(country);
    const newDiv = document.createElement("div");
    newDiv.classList.add("country");
    newDiv.innerHTML = `
    <h2>Name : ${country.name.common}</h2>
    <p>Capital : ${country.capital ? country.capital[0] : "No capital"}</p>
    <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    `;

    countryContainer.appendChild(newDiv);
  });
};

const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}
  `;
  // console.log("country details", code);
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
  console.log(country);
  const countryDetails = document.getElementById("country-details");
  countryDetails.innerHTML = `
    <h3>${country.name.common}</h3>
    <img src="${country.flags.png}"></img>

  `;
};
loadCountries();
