import menu from './menu.json';
import foodTemplate from './menu-template.hbs';

//Add theme switcher
const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-toggle');
const switcher = addEventListener('input', switchDarkTheme);

body.classList.toggle('light-theme');

function switchDarkTheme() {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
}

//Work in progress...
// localStorage.setItem('theme', switchDarkTheme);

//Add food marup in html
const menuMarkup = document.querySelector('.js-menu');

const markup = foodTemplate(menu);

menuMarkup.insertAdjacentHTML('beforeend', markup);
