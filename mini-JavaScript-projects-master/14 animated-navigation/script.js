const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

//we add the listener on the icon to listen for the click.
//and then we take the nav and add the toggle method of 'active class' onto it. If it's not applied then we add it, if it's already applied, then we'll remove it.
toggle.addEventListener("click", () => nav.classList.toggle("active"));
