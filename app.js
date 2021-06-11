"use strict"; 

let closeBtn = document.getElementsByClassName("close-nav")[0];

let openBtn = document.getElementsByClassName("open-nav")[0];

let navigation = document.getElementsByClassName("nav")[0];

const closeNav = (e) => {
  navigation.classList.remove("navigation-open");
  document.body.classList.remove("modal-open");
};

closeBtn.addEventListener("click", closeNav);

const openNav = (e) => {
  navigation.classList.add("navigation-open");
  document.body.classList.add("modal-open");
};

openBtn.addEventListener("click", openNav);

// Resizing

// window.onresize = () => {
//   let footer = document.getElementsByClassName("footer")[0];

//   let main = document.getElementsByTagName("main")[0];
  
//   if (document.body.offsetWidth >= 700) {
//     let footerHeight = 10 + footer.offsetHeight + "px";
//     console.log(footerHeight);
//     main.style.paddingBottom = footerHeight;
//   }
// };