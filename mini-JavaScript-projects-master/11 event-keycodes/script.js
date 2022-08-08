const insert = document.getElementById("insert");

//at the top level of the object in the browser,we set this to listen for the keydown event.

//we can use consolelog to look at the event object after pressing any key and see all the properties that we can select from.

window.addEventListener("keydown", (event) => {
  //we can put the dynamic value in here using the backticks. We will check for the space key  using a ternary operator.
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
});
//in the key properties for the space keyCode. notice that it will shown as an empty string. So we will use the code above to fix the issue.
