const buttonsHide = document.querySelectorAll(".button-hide");
const buttonsShow = document.querySelectorAll(".button-show");
const buttonsSvg = document.querySelectorAll(".button-svg");
const contentHide = document.querySelectorAll(".content-services__hide");

buttonsHide.forEach((button, index) => {
  button.addEventListener("click", () => {
    contentHide[index].classList.remove("open");
    buttonsSvg[index].classList.remove("open");
    button.style.display = "none";
    buttonsShow[index].style.display = "block";
  });
});

buttonsShow.forEach((button, index) => {
  button.addEventListener("click", () => {
    contentHide[index].classList.add("open");
    buttonsSvg[index].classList.add("open");
    button.style.display = "none";
    buttonsHide[index].style.display = "block";
  });
});

const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
const cross = document.getElementById("cross");

burger.addEventListener("click", function () {
  menu.classList.add("open");
  burger.style.display = "none";
  cross.style.display = "block";
});

cross.addEventListener("click", function () {
  menu.classList.remove("open");
  cross.style.display = "none";
  burger.style.display = "block";
});
