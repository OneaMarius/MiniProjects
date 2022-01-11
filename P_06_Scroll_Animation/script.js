const boxes = document.querySelectorAll('.box');


function checkBox() {
    const trigger = window.innerHeight * 0.8;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if ( boxTop < trigger) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
    
    })
}

checkBox();

window.addEventListener('scroll', checkBox);