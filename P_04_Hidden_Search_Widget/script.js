const search = document.getElementById('btn');
const searchBar = document.querySelector('.search')
search.addEventListener('click', ()=>{
    searchBar.classList.toggle('activated');
})