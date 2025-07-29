const movies = [{
  image: "images/movies/mov1.jpg",
  name: "The Batman"
},
{
  image: "images/movies/mov2.jpg",
  name: "Superman"
},
{
  image: "images/movies/mov3.jpg",
  name: "Thunderbolts*"
},
{
  image: "images/movies/mov4.jpg",
  name: "Spider-man(into the spiderverse)"
},
{
  image: "images/movies/mov5.jpg",
  name: "Venom"
},
{
  image: "images/movies/mov6.jpg",
  name: "Aladin"
},
{
  image: "images/movies/mov7.jpg",
  name: "Baby Driver"
}];

let movieHTML = "";

movies.forEach((movieList) => {
  movieHTML += `
          <div class="movie">
            <img src="${movieList.image}" alt="">
            <p><strong>${movieList.name}</strong></p>
          </div>
  `
});

document.querySelector('.js-movie-list').innerHTML = movieHTML;