import { countries } from "../data/countries.js";

const loadCountries = () => {
    let options = "";

    for (let country of countries) {
        options += `<option>${country.name.common} (${country.capital}) </option>`;
        console.log(country);
    }

    document.querySelector("#countries").innerHTML = options;
};

loadCountries();



const totalArea = countries.reduce((tArea, country)=>{
    return tArea + country.area;
}, 0)
document.querySelector("#totalArea").innerHTML  = `Total area of all countries is ${totalArea}`