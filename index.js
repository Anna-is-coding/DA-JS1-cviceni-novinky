const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

const newsEl = document.querySelector('.news');
newsEl.style.backgroundColor = 'white';
newsEl.style.maxWidth = '60rem';

const headingEl = document.querySelector('h1');
headingEl.classList.add('news__title');
headingEl.textContent = 'Aktuální novinky';

const firstNewsEl = document.getElementById('zprava1');
firstNewsEl.classList.add('post--main');

const thirdNewsEl = document.querySelector('#zprava3 img');
thirdNewsEl.src = 'images/zprava3-novy.jpg';
