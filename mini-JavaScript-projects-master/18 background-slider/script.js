const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

//add the event listener so that we can increment the activeSlide variable.
rightBtn.addEventListener("click", () => {
  activeSlide++;

  //this will make the slide go back to the first one if we keep clicking it to the end.
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    //if the increments is zero, then we'll know that we're on the first one and after that it'll go onto the last slide if we clicking it again.
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  //when we deal with the CSS using the JavaScript. We have to use the camelcase and NO HYPHEN.

  //slides come in as node.
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
