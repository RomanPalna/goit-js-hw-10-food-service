import menu from './menu.json';
import foodTemplate from './menu-template.hbs';

//Add theme switcher
const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-toggle');
const switcher = addEventListener('input', switchTheme);

body.classList.toggle('light-theme');

function defaultTheme() {
  if (localStorage.Theme !== 'dark-theme') {
    setLightTheme();
    setLocalStorageLight();
    checkbox.checked = false;
  } else {
    setDarkTheme();
    setLocalStorageDark();
    checkbox.checked = true;
  }
}

defaultTheme();

function switchTheme() {
  if (localStorage.Theme === 'light-theme') {
    setDarkTheme();
    setLocalStorageDark();
  } else if (localStorage.Theme === 'dark-theme') {
    setLightTheme();
    setLocalStorageLight();
  }
}

function setDarkTheme() {
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
}

function setLightTheme() {
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
}

function setLocalStorageLight() {
  localStorage.removeItem('Theme');
  localStorage.setItem('Theme', 'light-theme');
}

function setLocalStorageDark() {
  localStorage.removeItem('Theme');
  localStorage.setItem('Theme', 'dark-theme');
}

//Add food marup in html
const menuMarkup = document.querySelector('.js-menu');

const markup = foodTemplate(menu);

menuMarkup.insertAdjacentHTML('beforeend', markup);
