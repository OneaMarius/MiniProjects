const img1 =
  'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80")';
const img2 =
  'url("https://images.unsplash.com/photo-1542785853-cf202360bca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';
const img3 =
  'url("https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';
const img4 =
  'url("https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';
const img5 =
  'url("https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80")';

const bg = document.querySelector(".container");
const loading = document.querySelector(".loading");
const panelName = document.getElementById("panelName");
console.log(panelName);

let load = 0;
const blurMax = 25;
let loadInterval;

bg.addEventListener("click", unblurFn);
loading.addEventListener("click", unblurFn);

function unblurFn() {
  loadInterval = setInterval(loadingPage, 25);
}

function loadingPage() {
  if (load < 100) {
    load++;
  } else {
    clearInterval(loadInterval);
  }
  loading.textContent = load + "%";
  loading.style.opacity = 100 - load + "%";
  if (load === 100) {
    loading.style.display = "none";
  }
  bg.style.filter = `blur(${blurMax - (blurMax * load) / 100}px)`;
}

const container = document.getElementById("container");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

openMenu.addEventListener("click", () => {
  container.classList.add("move");
});

closeMenu.addEventListener("click", () => {
  container.classList.remove("move");
});

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", changeClass);
});

function changeClass(event) {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
  event.target.classList.add("active");
  console.log(event.target.id);
  panelName.textContent = event.target.querySelector("h3").innerText;
  switch (event.target.id) {
    case "img1":
      panelName.style.backgroundImage = img1;
      break;
    case "img2":
      panelName.style.backgroundImage = img2;
      break;
    case "img3":
      panelName.style.backgroundImage = img3;
      break;
    case "img4":
      panelName.style.backgroundImage = img4;
      break;
    case "img5":
      panelName.style.backgroundImage = img5;
      break;

    default:
      break;
  }
  panelName.style.backgroundImage = "event.target.id";
}
