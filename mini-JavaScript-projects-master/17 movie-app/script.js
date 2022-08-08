//we are going to pull in the data from the API using fetch and then insert all the movie div with the dynamic data.

//It's from the moviedb.org, had to sign-up for the API key(V3 Auth) to make a request.

//here is the Doc that I found. https://developers.themoviedb.org/3/getting-started/authentication

//I chose to sort the movie by the population.
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

//notice that there is no URL for the poster path in here except for the jpeg file.

//from the document, we need the certain url in order to get the image working 'w1280' is the width. And also remove the slash at the end of the url because the poster path already has the slash in front of it. what?
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

//In here I leave a double quote at the end of the URL. We'll use this to concatenate the search terms in the search box. what?
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  //this will return a promise.
  const res = await fetch(url);
  //and this is where we get the actual data in JSON format.
  const data = await res.json();

  //response from the browser has the 'results' array. which is what we need.
  showMovies(data.results);
}

function showMovies(movies) {
  //this is to clear out the page left over from the previous results.
  main.innerHTML = "";

  movies.forEach((movie) => {
    //we use destructuring method to get all the data we need and store them into variable.
    const { title, poster_path, vote_average, overview } = movie;

    //this will add the div in the HTML. Which is only have a header and the main tag.
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    //inside the expression syntax. We concatenate our IMG_PATH with the poster_path that we fetched from the API to serve as the source for our img tag.
    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `;
    //and then we append all this into main tag in our HTML.
    main.appendChild(movieEl);
  });
}
//with this function, it will separate the vote using the color and add it to the class above.
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //Search terms will comes from the user.
  const searchTerm = search.value;
  //once there's a text submitted. it will get concatenated with the search API and finally sent to theMovieDB.
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    //after hit enter, we'll clear out the text.
    search.value = "";
  } else {
    window.location.reload();
  }
});
