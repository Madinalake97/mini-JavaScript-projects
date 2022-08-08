//use querySelectorAll bring in all the boxes. this will put them all into a nodelist or the array.

const boxes = document.querySelectorAll(".box");

//add the listeners on the window and set callback function.
window.addEventListener("scroll", checkBoxes);

checkBoxes();

//we need a trigger point. We need to figure out where do we want the boxes to start to come in.
function checkBoxes() {
  //we want a little less than innerheight for the event to fire off. so here is the formula.
  const triggerPoint = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    //this method will provide the information about the size of an element and its position relative to the viewport. there are bunches of the properties that we can choose from, I chose top.

    //and all that's left is to check to see that if the top of the box position is reaching to the triggerpoint. If it does, then fire the event.
    if (boxTop < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
