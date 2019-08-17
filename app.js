const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("close");

navBtn.addEventListener("click", () => {
 navBar.classList.add("showNav");
});
navClose.addEventListener("click", () => {
 navBar.classList.remove("showNav");
});