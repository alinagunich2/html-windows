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

const text = document.getElementById("text");
const openBtn = document.getElementById("open");
const hideBtn = document.getElementById("hide");

openBtn.onclick = function () {
  text.classList.add("open");
};
hideBtn.onclick = function () {
  text.classList.remove("open");
};
