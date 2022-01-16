const go = document.querySelector('button');
const container = document.querySelector('.text_container');
const text = document.querySelector('.text_band');

text_size = text.innerText.length;
text.style.transitionDuration = text_size*100 + 'ms';

go.addEventListener('click',playText);
function playText() {
    container.classList.toggle('active');
}