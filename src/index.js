import productCardsTmp from './templates/cards.hbs';
import products from './menu.json';


const menuBlock = document.querySelector('.menu');
const switchToggleTheme = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

menuBlock.insertAdjacentHTML('beforeend',productCardsTmp(products));

switchToggleTheme.addEventListener('change', switchTheme);

function switchTheme(evt)  {

    if (evt.target.checked) {
        
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark-theme');
        
    } else {
        
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light-theme');
    };   
};


if (localStorage.getItem('theme') === 'dark-theme' ){

   body.classList.add("dark-theme");
   body.classList.remove('light-theme')
   switchToggleTheme.setAttribute('checked', true);

} else {

    body.classList.add('light-theme');

};