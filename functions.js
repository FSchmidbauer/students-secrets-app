const pageviews = document.querySelector('.pageviews');
let counter = 0;
pageviews.innerText = counter;

window.addEventListener("load",() => pageviews.innerText=pageviews.innerText+1);

