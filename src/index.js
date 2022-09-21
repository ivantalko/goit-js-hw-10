import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './api/fetchCountries';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 1000;
const searchInput = document.getElementById('search-box');
const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
searchInput.addEventListener('input', debounce(getCountryData, DEBOUNCE_DELAY));
function getCountryData(e) {
  const countryName = e.target.value.trim();
  if (!countryName) {
    return;
  }
  fetchCountries(countryName)
    .then(data => {
      if (data.length === 1) {
        markupCountry(data[0]);
      } else if (data.length >= 2 && data.length <= 10) {
        markupCountries(data);
      } else if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      console.log('first', data.length);
    })
    .catch(err => {
      alert(err);
    });
}
function markupCountry(countryData) {
  console.log(countryData);
  const { flags, capital, population, name, languages } = countryData;
  let lang = Object.values(languages).join(', ');

  return countryInfo.insertAdjacentHTML(
    'beforeend',
    `<div class=list><img src="${flags.svg}" width = "75" alt = "flag"/>   
    ${name.official}</div>
    <ul><li class=list>Capital: ${capital}</li>
    <li class=list>Population: ${population}</li>
    <li class=list>Languages: ${lang}</li></ul>`
  );
}

function markupCountries(countryData) {
  countryData.map(country => {
    const { flags, name } = country;
    return countryList.insertAdjacentHTML(
      'beforeend',
      `<li class=list><img src=${flags.svg} width = "30"/>
      <span>${name.official}</span></li>`
    );
  });
}
