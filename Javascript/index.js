"use strict";

// Get the current URL of the page
const currentURL = window.location.pathname;

const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((item) => {
  const menuItemURL = item.getAttribute("href");
  console.log(menuItemURL);
  if (menuItemURL === currentURL) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
});
