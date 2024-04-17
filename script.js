const buttonsHide = document.querySelectorAll(".button-hide");
const buttonsShow = document.querySelectorAll(".button-show");
const buttonsSvg = document.querySelectorAll(".button-svg");
const contentHide = document.querySelectorAll(".content-services__hide");
const menuLink = Array.from(document.getElementsByClassName("menu__link"));
let headerPadding = Array.from(document.getElementsByClassName('header-padding'))
let listMainLink = Array.from(document.getElementsByClassName('list-main__link'))
let contentSButton  = Array.from(document.getElementsByClassName('content-services__button'))
let titleMarginBottom = document.getElementById('fir')
const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
const cross = document.getElementById("cross");


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

// if(){

// }

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

menuLink.forEach((link)=>{
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    // cross.style.display = "none";
    // burger.style.display = "block";
  });
})

menuLink.forEach((link,index)=>{
    link.addEventListener("click", function () {
      headerPadding.forEach((padTop)=>{
        padTop.style.paddingTop = "0px"
      })
      if(window.innerWidth >= 1280){
        if(index === 1){
          headerPadding[index].style.paddingTop = "50px"
        }
      }else if( window.innerWidth <= 1280 && window.innerWidth >= 800){
          headerPadding[index].style.paddingTop = "50px"
      }else if(window.innerWidth <= 800 && window.innerWidth >= 424){
        headerPadding[index].style.paddingTop = "90px"
      }else if(window.innerWidth <= 424 && window.innerWidth >= 385){
        headerPadding[index].style.paddingTop = "60px"
      }else if(window.innerWidth <= 386 ){
        if(index !== 1 && index !== 0){
          headerPadding[index].style.paddingTop = "100px"
        }else{
          headerPadding[index].style.paddingTop = "130px"
        }
      }
     });
  })


listMainLink.forEach((link,index)=>{
  link.addEventListener("click", function () {
    contentSButton.forEach((padTop)=>{
      padTop.style.paddingBottom = "0px"
    })

    if(window.innerWidth <= 578 && window.innerWidth >= 385){
      titleMarginBottom.style.marginBottom='30px'

      if(index===0){
        titleMarginBottom.style.marginBottom='50px'
      }
  
    }else if(window.innerWidth <= 385){
      titleMarginBottom.style.marginBottom='30px'

      if(index===0){
        titleMarginBottom.style.marginBottom='100px'
      }
    }

   

  if(index>0){
    if(window.innerWidth >= 960){
      contentSButton[index-1].style.paddingBottom = "20px"
    }else if(window.innerWidth <= 960  && window.innerWidth >= 385){
      contentSButton[index-1].style.paddingBottom = "60px"
    }else if(window.innerWidth <= 385){
      contentSButton[index-1].style.paddingBottom = "100px"
    }
  }
  if(index === 1){
    headerPadding[index].style.paddingTop = "50px"
  }
 

    if(index !==3){
      contentHide[index].classList.add("open");
      buttonsSvg[index].classList.add("open");
      buttonsHide[index].style.display = "block";
      buttonsShow[index].style.display = "none";
    }

  })})



  let options={
    root: null,
    rootMargin:'5px',
    threshold:0.5
  }
  let callback=function(entries,observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
           
            entry.target.classList.add('_active')
        }else{
         
        }
    })
  }
  
  let observer = new IntersectionObserver(callback,options)
  let targets = document.querySelectorAll('._element-animation')
  targets.forEach(target=>{
    observer.observe(target)
  })