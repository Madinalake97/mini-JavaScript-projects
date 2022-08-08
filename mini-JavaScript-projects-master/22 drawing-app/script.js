//refer on the document CanvasAPI MDN
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEL = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

//this is the global variable that is set to be default upon opening the browser.
let size = 10;
let isPressed = false;
colorEl.value = "black";
let color = colorEl.value;
let x;
let y;

//when we press the mouse button to draw.
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  //get the coordinate inside of the canvas relative to the viewport.
  x = e.offsetX;
  y = e.offsetY;
});

//this is where we stop drawing.
document.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

//this is where we start to draw/drag.
canvas.addEventListener("mousemove", (e) => {
  //we want this event to only happen when the mouse being pressed.
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  //we need to call baginPath everytime you want to draw a new line.
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  //after we created a line we can 'fill' it with the color we declared in the fillStyle.
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  //this is the starting point.
  ctx.moveTo(x1, y1);
  //and here is the end point.
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2.1;
  ctx.stroke();
}

//here is for setting brush size.
function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

//this is for changing the color.
colorEl.addEventListener("change", (e) => (color = e.target.value));

//this is where we clean the canvas.
clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
