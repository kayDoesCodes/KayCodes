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
  name: "Spider-man(I.T.S.V)"
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
},
{
    image: "images/movies/mov8.jpg",
    name: "Cargo"
  },
  {
    image: "images/movies/mov9.jpg",
    name: "Guardians of the galaxy"
  },
  {
    image: "images/movies/mov10.jpg",
    name: "Pulp Fiction"
  },
  {
    image: "images/movies/mov11.jpg",
    name: "Extraction"
  },
  {
    image: "images/movies/mov12.jpg",
    name: "Sicario"
  },
  {
    image: "images/movies/mov13.jpg",
    name: "Dora"
  },
  {
    image: "images/movies/mov14.jpg",
    name: "Fury"
  }];

let movieHTML = "";

movies.forEach((movieList) => {
  movieHTML += `
          <div class="movie">
            <img src="${movieList.image}" alt="">
            <p><strong>${movieList.name}</strong></p>
          </div>
  `;
});

document.querySelector('.js-movie-list').innerHTML = movieHTML;