const pageviews = document.querySelector('.pageviews__content');
let counter = 0;
pageviews.innerText = counter;

window.addEventListener("load",() => pageviews.innerText=pageviews.innerText+1);

