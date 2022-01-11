const bg = document.querySelector('.backGroundImg');
const loading = document.querySelector('.loading');

let load = 0;
const blurMax = 25;
let loadInterval;

bg.addEventListener('click', unblurFn);

function unblurFn() {
    loadInterval = setInterval(loadingPage,25);
}


function loadingPage() {
    if (load<100) {
       load++; 
       console.log(load)
    } else {
        clearInterval(loadInterval);
    }
    loading.textContent = load + '%';
    loading.style.opacity = (100-load) + '%';
    bg.style.filter = `blur(${blurMax-(blurMax*load/100)}px)`
}