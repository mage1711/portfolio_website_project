//select dom items
const menubtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");
const menunav = document.querySelector(".menu_nav");
const menupic = document.querySelector(".menu_pic");
const navitem = document.querySelectorAll(".nav_item");
// set intial state of the menu
let showmenu = false;

menubtn.addEventListener("click", togglemenu);

function togglemenu() {
  if (!showmenu) {
    menubtn.classList.add("close");
    menu.classList.add("show");
    menunav.classList.add("show");
    menupic.classList.add("show");

    navitem.forEach(item => item.classList.add("show"));

    showmenu = true;
  } else {
    menubtn.classList.remove("close");
    menu.classList.remove("show");
    menunav.classList.remove("show");
    menupic.classList.remove("show");

    navitem.forEach(item => item.classList.remove("show"));

    showmenu = false;
  }
}
