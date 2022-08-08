//use querySelectorAll because we want to be able to do this with every single button created that has a class of ripple.
const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    //this will make us know where exactly we click the button on the viewport.
    const x = e.clientX;
    const y = e.clientY;
    //this will create the constant we need in order to calculate for the value to style the CSS. (in px)
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    //this will append the span into the ripple class above. Note that 'this' cannot be used with an arrow function.
    this.appendChild(circle);

    //with vanilla JavaScript, all the event clicked will pile up in the HTML. We'll have to handle everything when we working with the DOM eg. when we put something to the DOM we have to take it out.

    //we need to wait a little for the ripple effect to completely execute.
    setTimeout(() => circle.remove(), 500);
  });
});
