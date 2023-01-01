import { countries } from "../data/countries.js";

const loadCountries = () => {
	let options = "";

	for (let country of countries) {
		options += `<option value="${country.ccn3}">${country.name.common}</option>`;
	}

	document.querySelector("#countries").innerHTML = options;
};

const getCountry = (id) => {
	const arr = countries.filter((country) => country.ccn3 === id);
	if (arr.length > 0) {
		return arr[0];
	} else {
		return null;
	}
};


document.querySelector("#countries").addEventListener("change", (e) => {
	const country = getCountry(e.target.value);
	document.querySelector("#details tr:nth-child(1) td").innerHTML = country.capital.join("-");
	document.querySelector("#details tr:nth-child(2) td").innerHTML = Object.values(country.currencies).map(item => item.name).join("-");
	document.querySelector("#details tr:nth-child(3) td").innerHTML = Object.values(country.languages).join("-");

});

loadCountries();


console.log(getCountry("784"));

