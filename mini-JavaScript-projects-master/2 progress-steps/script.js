//bring in all the buttons.

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//there's more than one so we use queryselectorall to bring them all in as a node list
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

//make an event listener on the NEXT button
next.addEventListener("click", () => {
  currentActive++;

  //set this to make sure that the active number doesn't go above the fourth circle.

  //think of this circle nodelist that we brought in as an array and we can use its length to set the limit.
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  //same things apply to next button but in opposites.
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

//the index of the circle nodelist is like an array 0123. We can use it to determine where to put an active class onto it.
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // our goal here is to manipulate the css properties using the DOM element.
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    //at the start point the Prev btn will be disabled
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    //and if it equals the total length of the circles, then we know it's at the end of it. So we disable the next btn.
    next.disabled = true;
  } else {
    //while we're on the middle of the progress, we don't want either of them to be disabled. So we set them all to false.
    prev.disabled = false;
    next.disabled = false;
  }
}
