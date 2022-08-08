const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));
// this is to add 'show-nav' class to the container class so that it will trigger the CSS settings and bring out the nav bar

close.addEventListener("click", () => container.classList.remove("show-nav"));
