//we're working with Jason API. It serve Jason data, which is essentially like a JavaScript object

// we bringing in all we need from the DOM
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

//this is to hook an eventlistener up to this button so that it will call the generateJoke function.
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
//here is were we using the fetch request. this is a nativeAPI, meaning we don't have to include any kind of the CDN.

// USING .then()
// function generateJoke() {

//in order to have a fetch request to getting the JSON as a response. We need to enter the certain "request header" value to make a right HTTP request for this API and make them only send back the JSON response. Also note that different APIs will have their own different headers and we have to follow them accordingly in order to get the response we want.

//in here, when we add a header. we can make them little bit cleaner by wrap everything into a variables.

//   const config = {
//     headers: {
//       Accept: 'application/json'
//     }
//   }

//   fetch('https://icanhazdadjoke.com', config)
//and the fetch method will give back the Promises, So we will use .then. And we can call the argument anything we want but in terms practice we use 'res', we'll use this as a function to get the JSON data object. Which is another .then as below.

//     .then((res) => res.json())
//     .then((data) => {

//this JSON data object, we are going to put it inside our HTML
//       jokeEl.innerHTML = data.joke
//     })
// }

// USING ASYNC/AWAIT

//we have to wrap the function with async
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  //For any promises that we want to put into a variable, we need to put the await before it.

  const res = await fetch("https://icanhazdadjoke.com", config);
  console.log(res);
  //after the response, we need to access its JSONdata. So we will do it again using await since it will return a promise.
  const data = await res.json();
  console.log(data);
  //finally we append the joke from the JSON object into our HTML.
  jokeEl.innerHTML = data.joke;
}
