const progressBar = document.getElementById("progressBar");
const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let curentLocation = 0;
let progressBarWidth = (96 / (circles.length - 1)).toFixed(2);
console.log(progressBar, progressBarWidth);

next.addEventListener("click", () => {
  if (curentLocation < circles.length) {
    curentLocation++;
    progressBar.style.width = `${progressBarWidth * curentLocation}%`;
    for (let index = 0; index < curentLocation + 1; index++) {
      circles[index].classList.add("active");
    }
  }
  if (curentLocation === circles.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
  }

  console.log(curentLocation);
});

prev.addEventListener("click", () => {
  if (curentLocation > 0) {
    curentLocation--;
    progressBar.style.width = `${progressBarWidth * curentLocation}%`;
    for (let index = circles.length - 1; index > curentLocation; index--) {
      circles[index].classList.remove("active");
    }
  }
  if (curentLocation === 0) {
    prev.disabled = true;
  } else {
    next.disabled = false;
  }
  console.log(curentLocation);
});
