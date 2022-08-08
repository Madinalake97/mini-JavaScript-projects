const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

//the function will help not only fill out the one that we click on, but also the ones that before it too, if the cup that we click on isn't actually the first on the row.
function highlightCups(idx) {
  if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
  else if (
    //if the cup we're clicking on is full and the next one is not, then we want to decrease the index by one.
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  //the cup before the one we click will also take the 'full' class from this code.
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      //with this, it will remove the existing full cup that has their index higher than the one we click.
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  //this will determine the percentage of the full small cups relative to the goal.

  //initially, the big cup will have zero percentage so the % sign is hidden by the CSS settings.
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    //once clicked, the percentage sign and visibility of the color will added to the cup in formula below.
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;

    //this is the text itself. Which will get added accordingly.
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  //this is for the text 'Remained' in HTML, we want this to be hidden once the cup is filled.
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    //this is for the span tag that we put in HTML. also note that 1L = 1000ml.
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
