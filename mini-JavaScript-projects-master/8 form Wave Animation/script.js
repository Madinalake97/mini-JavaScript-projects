const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    //this will split the letters into an array and from that we can manipulate it using map function to turn them into an array of something else.

    //We looping through the label innertext, e m a i l << we split all these into an array. then we are mapping it to create an array of the letter with a span around it. Then we're turning it back into a string.

    //Add the inline style to the span of letter which its indexes gets multiplied by a number of millisecond. When we're clicking on it, the letter move up in a pattern of wave because of the timming we set at the inline style.
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
