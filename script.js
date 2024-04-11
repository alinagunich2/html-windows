const buttonsHide = document.querySelectorAll(".button-hide");
const buttonsShow = document.querySelectorAll(".button-show");
const contentHide = document.querySelectorAll(".content-services__hide");

buttonsHide.forEach((button, index) => {
  button.addEventListener("click", () => {
    contentHide[index].style.display = "none";
    button.style.display = "none";
    buttonsShow[index].style.display = "block";
  });
});

buttonsShow.forEach((button, index) => {
  button.addEventListener("click", () => {
    contentHide[index].style.display = "block";
    button.style.display = "none";
    buttonsHide[index].style.display = "block";
  });
});
