"use strict";

const hamMenuBtn = document.querySelector(".ham-menu"); //Hamburger menu
const closeMenuBtn = document.querySelector(".close-btn"); //close button menu
const menu = document.querySelector(".navigation-bar"); // Menu

//Remove the 'hidden' class from the 'Menu' class
const openMenu = function () {
  menu.classList.remove("hidden");
};
hamMenuBtn.addEventListener("click", openMenu);

//Add back the "hidden" class to the "Menu class"
const closeMenu = function () {
  menu.classList.add("hidden");
};

closeMenuBtn.addEventListener("click", closeMenu);
