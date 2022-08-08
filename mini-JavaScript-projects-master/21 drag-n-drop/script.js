const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//this time we'll use for loop instead of forEach to add the event listener to all of them.
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  //this will append the class 'hold' onto the div. When we hole the image.
  this.className += " hold";

  //with out this, the moment we grab hold of the image. The image will disappear. We need to set the timeout.
  setTimeout(() => (this.className = "invisible"), 1);
}

function dragEnd() {
  //when we're hovering onto somewhere outside the div, As soon as we let go of the mouse, the div will return to its previous index and still have a class of 'fill'.
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  //we need to set this so that when leave the divs after hovering them, it will reset the dash outlined.
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  //while we're holding the image and hovering onto the other div.Once we let go of the mouse. the div will have a class of 'fill'
  this.append(fill);
}
