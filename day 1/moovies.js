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
        <a href="information-page.html?movie=${movieList.image}">
          <img src="${movieList.image}" alt="">
          <p><strong>${movieList.name}</strong></p>
        </a>
      </div>
  `;
});

document.querySelector('.js-movie-list').innerHTML = movieHTML;

const openMenu = document.getElementById("js-menu-open");
const closeMenu = document.getElementById("js-menu-close");
const menu = document.querySelector(".navbar");

openMenu.addEventListener("click",(event) => {
  menu.style.display = 'block';
  event.stopPropagation();
});

closeMenu.addEventListener("click", (event) => {
  menu.style.display = 'none';
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if(menu.style.display === 'block' && !menu.contains(event.target) && event.target !== openMenu) {
    menu.style.display = 'none';
  }
});