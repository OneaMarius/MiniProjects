const container = document.getElementById('container');
const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');

openMenu.addEventListener('click',()=> {
    container.classList.add('move');
})

closeMenu.addEventListener('click',()=> {
    container.classList.remove('move');
})