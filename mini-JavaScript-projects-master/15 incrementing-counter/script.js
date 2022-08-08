//we have a multiple counter class. So we need to bring them all here use querySelectorAll
const counters = document.querySelectorAll(".counter");

//they come in as a nodelist. And we can loop through all that using forEach.

//at first, we make the number initially at zero
counters.forEach((counter) => {
  //0 is the string at this point.
  counter.innerText = "0";

  //the increment effect comes from these.
  const updateCounter = () => {
    //this will turn the string counter class into a number type.
    const target = +counter.getAttribute("data-target");
    //this is also turn the innertext 0 into a number.
    const c = +counter.innerText;

    // this will determine wheter how fast the increment runs. This way all different numbers will finish incrementing at the same amount of time since they were divided by the same number.
    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      //every 1 milli second,the increment will update. Until the condition is met.
      setTimeout(updateCounter, 1);
    } else {
      //we set this just to ensure that the counter will not go above the target.
      counter.innerText = target;
    }
  };

  updateCounter();
});
