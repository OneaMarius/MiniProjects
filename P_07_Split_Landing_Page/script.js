const container = document.querySelector('.container');
const left = document.querySelector('.leftBg');
const right = document.querySelector('.rightBg');
const backdrop1 = document.querySelector('.leftBg .backdrop');
const backdrop2 = document.querySelector('.rightBg .backdrop');

console.log(backdrop1, backdrop2);
left.addEventListener('mouseover',()=>{
    container.classList.add('goLeft');
    backdrop1.style.backgroundColor = 'transparent';
})
left.addEventListener('mouseout',()=>{
    container.classList.remove('goLeft');
    backdrop1.style.backgroundColor = 'var(--bg-color-1)';
})

right.addEventListener('mouseover',()=>{
    container.classList.add('goRight');
    backdrop2.style.backgroundColor = 'transparent';
})
right.addEventListener('mouseout',()=>{
    container.classList.remove('goRight');
    backdrop2.style.backgroundColor = 'var(--bg-color-1)';
})