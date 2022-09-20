import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './api/fetchCountries';
const DEBOUNCE_DELAY = 300;

const searechInput = document.getElementByld('search-box');
searechInput.addEventListner('input', debounce(getCountryData, DEBOUNCE_DELAY));

function getCountryData(event) {
  const countryName = event.target.value;
}
const pugovka = {};
