//we'll bring in the toggle button, then we'll loop through the nodelist using forEach method. after that we'll add a click event to toggle on/off the active class.

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    //because the 'active' class is on the parent div of the button tag so we reach there through parentNode properties.
    toggle.parentNode.classList.toggle("active");
  });
});
