"use strict"; 

let closeBtn = document.getElementsByClassName("close-nav")[0];

let navigation = document.getElementsByClassName("nav")[0];

const closeNav = (e) => {
  console.log("works");
  navigation.classList.remove("navigation-open");
};

closeBtn.addEventListener("click", closeNav);