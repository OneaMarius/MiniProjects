const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav ul a, .m_nav ul a");
const open_btn = document.querySelector(".open-btn");
const mobileNav = document.querySelector(".m_nav");
const doorBtn = document.getElementById("doorBtn");
const mainContent = document.querySelector(".mainContent");
const kinetic = document.querySelector(".kinetic");
const specialLink = document.getElementById("specialLink");
// doorBtn.addEventListener("click", toggleDoors);

toggleDoors();

function reload() {
    location.reload();
}

function toggleDoors() {
  mainContent.classList.add("loading");
  const int1 = setTimeout(() => {
    kinetic.classList.add("loading");
    specialLink.setAttribute("href", `#${this.innerHTML.toLowerCase()}`);
    specialLink.click();
  }, 500);
  const int2 = setTimeout(() => {
    mainContent.classList.remove("loading");
    kinetic.classList.remove("loading");
  }, 2000);
  
}

navLinks.forEach((link) => {
  link.addEventListener("click", changeStatus);
  link.addEventListener("click", toggleDoors);
});

open_btn.addEventListener("click", () => {
  mobileNav.classList.toggle("visible");
  //   checkActiveLink();
});

function changeStatus() {
  navLinks.forEach(function (link) {
    link.classList.remove("selectedLink");
  });
  this.classList.add("selectedLink");
  checkActiveLink();
  mobileNav.classList.remove("visible");
}

function checkActiveLink() {
  let index;
  let i = 0;
  navLinks.forEach((link) => {
    if (link.classList.contains("selectedLink")) {
      index = i;
    }
    i++;
  });
  if (index < 4) {
    navLinks[index + 4].classList.add("selectedLink");
  } else {
    navLinks[index - 4].classList.add("selectedLink");
  }
}
