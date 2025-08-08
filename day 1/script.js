const data = [{
  movies: [{
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
    name: "Spider-man (I.T.S.V)"
  },
  {
    image: "images/movies/mov5.jpg",
    name: "Venom"
  },
  {
    image: "images/movies/mov6.jpg",
    name: "Aladdin"
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
  }]
},
{
  series: [{
    image:"images/series/series1.jpg",
    name: "SnowFall"
  },
  {
    image:"images/series/series2.jpg",
    name: "The boys"
  },
  {
    image:"images/series/series3.jpg",
    name: "Peaky blinders"
  },
  {
    image:"images/series/series4.jpg",
    name: "Squid Game"
  },
  {
    image:"images/series/series5.jpg",
    name: "Vampire Diaries"
  },
  {
    image:"images/series/series6.jpg",
    name: "The Last Of Us"
  },
  {
    image:"images/series/series7.jpg",
    name: "Euphoria"
  },
  {
    image:"images/series/series8.jpg",
    name: "The walking dead"
  },
  {
    image:"images/series/series9.jpg",
    name: "Arcane"
  },
  {
    image:"images/series/series10.jpg",
    name: "Daredevil"
  },
  {
    image:"images/series/series11.jpg",
    name: "Gotham"
  },
  {
    image:"images/series/series12.jpg",
    name: "Fallout"
  },
  {
    image:"images/series/series13.jpg",
    name: "The 100"
  },
  {
    image:"images/series/series14.jpg",
    name: "Riverdale"
  }]
},
{
  animes: [{
    image: "images/anime/ani1.jpg",
    name: "Demon Slayer"
  },
  {
    image: "images/anime/ani2.jpg",
    name: "Solo Leveling"
  },
  {
    image: "images/anime/ani3.jpg",
    name: "Jujutsu Kaisen"
  },
  {
    image: "images/anime/ani4.jpg",
    name: "Blue Lock"
  },
  {
    image: "images/anime/ani5.jpg",
    name: "Black Clover"
  },
  {
    image: "images/anime/ani6.jpg",
    name: "My Hero Academia"
  },
  {
    image: "images/anime/ani7.jpg",
    name: "Tokyo Revenge"
  },
  {
    image: "images/anime/ani8.jpg",
    name: "Monster"
  },
  {
    image: "images/anime/ani9.jpg",
    name: "Death Note"
  },
  {
    image: "images/anime/ani10.jpg",
    name: "One Piece"
  },
  {
    image: "images/anime/ani11.jpg",
    name: "Fire Force"
  },
  {
    image: "images/anime/ani12.jpg",
    name: "Spy X Family"
  },
  {
    image: "images/anime/ani13.jpg",
    name: "Slam Dunk"
  },
  {
    image: "images/anime/ani14.jpg",
    name: "Bleach"
  }]
}];

let movieHTML = "";
let seriesHTML = "";
let animeHTML = "";

data.forEach((category) => {
  if(category.movies) {
    category.movies.forEach(movie => {
      movieHTML += `
      <div class="movie">
        <a href="information-page.html?movie=${movie.image}">
          <img src="${movie.image}" alt="">
          <p><strong>${movie.name}</strong></p>
        </a>
      </div>
      `;
    });
  };
});

document.querySelector(".js-movies-data").innerHTML = movieHTML;

data.forEach(category => {
  if(category.series){
    category.series.forEach(serie => {
      seriesHTML += `
        <div class="serie">
          <img src="${serie.image}" alt="">
          <p><strong>${serie.name}</strong></p>
        </div>
      `;
    });
  };
});

document.querySelector(".js-series-data").innerHTML = seriesHTML;

data.forEach(category => {
  if(category.animes){
    category.animes.forEach(anime => {
      animeHTML += `
        <div class="animes">
          <img src="${anime.image}" alt="">
          <p><strong>${anime.name}</strong></p>
        </div>
      `;
    });
  };
});

document.querySelector(".js-anime-data").innerHTML = animeHTML;

const hero = document.querySelector(".hero");
const backgrounds = [
  "linear-gradient(90deg, rgba(75, 32, 104, 0.6), rgba(120, 122, 255, 0.7)), url('images/movies/mov5.jpg')",
  "linear-gradient(90deg, rgba(75, 32, 104, 0.6), rgba(120, 122, 255, 0.7)), url('images/movies/mov3.jpg')",
  "linear-gradient(90deg, rgba(75, 32, 104, 0.6), rgba(120, 122, 255, 0.7)), url('images/movies/mov4.jpg')",
  "linear-gradient(90deg, rgba(75, 32, 104, 0.6), rgba(120, 122, 255, 0.7)), url('images/movies/mov1.jpg')"
];

let current = 0;

setInterval(() => {
  hero.style.backgroundImage = backgrounds[current];
  current = (current + 1) % backgrounds.length;
}, 3000);

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