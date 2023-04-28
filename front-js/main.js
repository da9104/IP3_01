import Search from "./modules/search";
import Chat from "./modules/chat";
import RegistrationForm from "./modules/registrationForm";

if (document.querySelector("#registration-form")) {
  new RegistrationForm();
}

if (document.querySelector(".header-search-icon")) {
  new Search();
}

if (document.querySelector("#chat-wrapper")) {
  new Chat();
}

/**
 * This code is for the nav link menu which will show on screen with width 800px or less
 */
//calls to change menu icon from burger to X when clicked on
function menuChange(x) {
  x.classList.toggle("change");
}

//code for the mobile/smaller screen nav links in menu
const menuSlide = () => {
  const menu = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav_links ");
  const navLinks = document.querySelectorAll(".nav_links li");

  //toogles the menu
  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //animates the links to appear on menu
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
      console.log(index);
    });
  });
};

//calls the menuSlide() function
menuSlide();
