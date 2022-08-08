const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

//loop through all the sounds and make a tag. Then put in a class and style it with the css.
sounds.forEach((sound) => {
  //create a button tag in HTML
  const btn = document.createElement("button");

  //classList is a DOM property of JavaScript that allows for styling the CSS  classes of an element.
  btn.classList.add("btn");

  btn.innerText = sound;
  document.getElementById("buttons").appendChild(btn);
  //below will add the event listener on each button. with HTML5 we have a JavaScriptAPI for audio elements and it has a method of   .play that we can use on the audio element.

  //we have the button listening for the clicks.
  btn.addEventListener("click", () => {
    // we need this function so that the other will not playing over each other. JavaScript execute the function in order. So this function will stop the ones that's playing at the moment we click.
    stopSongs();

    // we are still inside the forEach method so this 'sound' argument is basically the arrays of the sound that we brought in.
    document.getElementById(sound).play();
  });
});

//we declare the function outside of the forEach so it can call it from inside forEach.
function stopSongs() {
  // loop through all the array we brought in
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    //instead of .play, we use .pause to stop the sound.
    song.pause();

    //audio tags have the property called current. We need to reset the duration of the sound so that it will not resume the current time of the sound we paused.
    song.currentTime = 0;
  });
}
