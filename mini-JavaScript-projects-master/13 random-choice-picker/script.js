//get all the tags
const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

//this will automatically focus on the textarea upon opening the browser
textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  //clear all the inputs using Enter button.
  if (e.key === "Enter") {
    //once we hit the enter button, it will clear out the textarea and run the randonSelect function which declared below.
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

//we take whatever we type in, and then we put a comma. We want to split at that comma and create an array of them. We can do that by using the split method.
function createTags(input) {
  // from here, all the input text turns into the array after the comma.
  const tags = input
    .split(",")

    //to get rid of the unnecessary space from the split method we will use .filter to remove them.

    //filter is a high order array method that allows us to return certain things base on conditionals.

    //The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters space, tab etc.

    //this filter will run if the user leaves a space after the comma, which is unnecessary in our app.
    .filter((tag) => tag.trim() !== "")

    //and then we trim out the white space of each tag that entered.
    .map((tag) => tag.trim());

  //after finish typing the input, we will clear out the tags below textarea. Otherwise it will pile up.
  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    //create a span tag.
    const tagEl = document.createElement("span");
    //inside a span tag will have a class 'tag'
    tagEl.classList.add("tag");

    //and set the innertext as the tag array that we are looping through by the forEach.
    tagEl.innerText = tag;

    //finally we take all of the spans and append them the div that we created in HTML.
    tagsEl.appendChild(tagEl);
  });
}
//there are functions inside another function here.
function randomSelect() {
  //we set that the random takes 3 seconds to run.
  const times = 30;

  //this interval is about hightlight and unhighlight the span.
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    //this is to make sure that user will put in someething rather than leave it blank.
    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  //this will stop the interval
  setTimeout(() => {
    clearInterval(interval);

    //this will pick a random tag to stop on.
    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  //querySelectorAll will grab all the tag that the user enter from the textarea.
  const tags = document.querySelectorAll(".tag");

  //querySelectorAll will return a nodelist which is similar to an array. And we can use the array method with it.

  //and this will randomly pick anything inside of these array with tag's length as their limit.
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
