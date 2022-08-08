const panels = document.querySelectorAll(".panel"); //we need to first bring in all of these panels so that we can control every single one of them

//the method will put all of them into a node list with some properties which is similar to an arrays
console.log(panels);

//you can loop through a node list just like you can with an arrays using forEach method which is a high order array method that takes in a function as an argument

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses(); //whatever we click on, this will remove a class 'active' from every panel and put on the active class to the ones that listen to the click event.
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
