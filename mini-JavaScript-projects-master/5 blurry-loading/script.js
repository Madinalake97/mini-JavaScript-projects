const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);
// every 30 millisecond the count will run.
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
    //at 100, this will stop the count
  }

  //we use template string to change the value on css. With this, it will override the existing 0% text that inside the class.
  loadText.innerText = `${load}%`;

  // we cannot use the running number to scale the opacity property because this property value starts from zero to one. ( more value, more blur effect.) so we need some method to map a range of numbers, that can run through these property from start to finish simultaneuosly.

  //to put it simple, we want to map zero to 100 of the load screen and one to zero for the opacity to run and finish at the same time.
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  //same goes for the blur effect on the background.
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
