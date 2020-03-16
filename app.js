// const navslide = () => {
const menu = document.querySelector(".humburger");
const nav = document.querySelector(".nav-list");
var lik = document.querySelectorAll(".nav-list .nav-item");

menu.addEventListener("click", function() {
  menu.classList.toggle("open");
  nav.classList.toggle("nav-active");
  anim();
});

function removenav() {
  //   var element = document.getElementById("myDIV");
  menu.classList.toggle("open");
  nav.classList.toggle("nav-active");
  anim();
}
function anim() {
  lik.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navsanimation 1.5s ease forwards ${index / 3 +
        0.4}s`;
    }
  });
}

// };
// navslide();
// removenav();
