const data = [{
  movies: [{
    image: "images/movies/mov1.jpg",
    name: "The Batman",
    description: "a 2022 neo-noir detective thriller about a young, brutal Batman in his second year of fighting crime, who must track down the sadistic Riddler, a serial killer targeting Gotham's elite and exposing the city's corruption, including his own family's secrets.",
    genre: "Action | Crime | Drama",
    rating: "100%",
    director: "Matt Reeves",
    starring: "Robert Pattinson, Zoe Kravitz, Paul Dano...",
    runtime: "02:56:15",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/mqqft2x_Aa4?si=uk1cER9l-_JR5qhx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov2.jpg",
    name: "Superman",
    description: "Clark Kent's journey to reconcile his Kryptonian heritage with his human upbringing, as he tries to protect a world that views kindness as old-fashioned, clashing with tech billionaire Lex Luthor, who sees Superman as a threat to be eliminated.",
    genre: "Action | Crime | Drama",
    rating: "100%",
    director: "James Gunn",
    starring: "David Corenswet, Rachel Brosnahan, Nicholas Hoult ...",
    runtime: "02:56:15",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/OfpXgjP4AOs?si=vFOGt6APQ648MEW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov3.jpg",
    name: "Thunderbolts*",
    description: "After being ensnared in a death trap, this dysfunctional group is forced on a dangerous mission, forcing them to confront their pasts and decide if they will tear themselves apart or find redemption.",
    genre: "Action | Crime | Drama",
    rating: "100%",
    director: "Jake Schreier",
    starring: "Florence Pugh, Sebastian Stan, Julia Louis-Dreyfus...",
    runtime: "02:06:50",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/-sAOWhvheK8?si=LOutdqMOjqL_XsX_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov4.jpg",
    name: "Spider-man (I.T.S.V)",
    description: "an animated film that introduces Miles Morales, a Brooklyn teenager who gains spider-like powers and must team up with multiple versions of Spider-People from other dimensions to stop the villainous Kingpin and save their shared reality from a super collider.",
    genre: "Action | Crime | Drama",
    rating: "100%",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    starring: "Shameik Moore, Jake Johnson, Hailee Steinfeld...",
    runtime: "01:56:36",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/tg52up16eq0?si=YKN7ze2eVDJgUwTN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov5.jpg",
    name: "Venom",
    description: "a 2018 superhero film in which journalist Eddie Brock (Tom Hardy) becomes the host for an alien symbiote, Venom, after an experiment by the Life Foundation goes wrong.",
    genre: "Action | Horro | Comedy | Superhero",
    rating: "31%",
    director: "Ruben Fleischer",
    starring: "Tom Hardy, Michelle williams, JRiz Ahmed...",
    runtime: "01:48:48",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/u9Mv98Gr5pY?si=eYfN_sU-_A6Q8Rt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov6.jpg",
    name: "Aladdin",
    description: "a Disney story about a resourceful street urchin who finds a magic lamp, releasing a Genie who grants him three wishes.",
    genre: "Action | Comedy | Romance | Drama",
    rating: "57%",
    director: "Guy Ritchie",
    starring: "Will Smith, Mena Massoud, Naomi Scott...",
    runtime: "02:08:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/-G5XI61Y9ms?si=r5rhrspJzp6dfNd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov7.jpg",
    name: "Baby Driver",
    description: "a 2017 action film about a young, talented, and partially deaf getaway driver named Baby who uses music to synchronize his driving and pay off a debt to crime boss Doc.",
    genre: "Action | Crime | Comedy | Heist",
    rating: "92%",
    director: "Edgar Wright",
    starring: "Ansel Elgort, Kelvin Spacey, Jamie Fox...",
    runtime: "01:53:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/zTvJJnoWIPk?si=dBQwb8h-OI-wMcl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov8.jpg",
    name: "Cargo",
    description: "an Australian post-apocalyptic thriller about an infected father, Andy (Martin Freeman), who has 48 hours to find a guardian for his infant daughter, Rosie, before he turns into a zombie.",
    genre: "Horror | Thriller | Adventure",
    rating: "88%",
    director: "Ben Howling, Yolanda Ramke",
    starring: "Martin Freeman, Simon Landers, Nova Sjoberg...",
    runtime: "01:45:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/W5QJW0M5pik?si=UUxO8n_reBCxfKSO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov9.jpg",
    name: "Guardians of the galaxy",
    description: "follows Peter Quill, a space adventurer who steals a powerful orb, leading him to form an unlikely team with the assassin Gamora, the vengeful Drax, the genetically engineered raccoon Rocket, and the tree-like Groot to protect the universe from the fanatical villain Ronan the Accuser.",
    genre: "Action | Comedy | Sci-fi | Superhero",
    rating: "92%",
    director: "James Gunn",
    starring: "Chris pratt, Zoe Saldaña, Vin Diesel...",
    runtime: "02:02:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/d96cjJhvlMA?si=xFwZVgh6ExQDYPX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov10.jpg",
    name: "Pulp Fiction",
    description: "a non-chronological crime film by Quentin Tarantino about several interconnected stories in Los Angeles, including those of two hitmen, a boxer, a gangster, his wife, and a pair of robbers.",
    genre: "Action | Comedy | Thriller | Crime",
    rating: "92%",
    director: "Quentin Tarantino",
    starring: "John Travolta, Uma Thurman, Samuel L. Jackson...",
    runtime: "02:43:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/tGpTpVyI_OQ?si=_wqt9raaVK91k2cN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov11.jpg",
    name: "Extraction",
    description: "a 2020 Netflix action thriller starring Chris Hemsworth as Tyler Rake, a black-market mercenary tasked with rescuing the kidnapped son of an imprisoned Indian drug lord in Dhaka, Bangladesh.",
    genre: "Action | Crime | Thriller | Adventure",
    rating: "67%",
    director: "Sam Hargrave",
    starring: "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda...",
    runtime: "01:56:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/L6P3nI6VnlY?si=4Pzj-mss9OWkOx_-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov12.jpg",
    name: "Sicario",
    description: "a 2015 action-thriller about an idealistic FBI agent, Kate Macer (Emily Blunt), who joins a secret government task force to fight a brutal Mexican drug cartel.",
    genre: "Action | Crime | Horror | Thriller",
    rating: "92%",
    director: "Denis Villeneuve",
    starring: "Emily Blunt, Benicio Del Toro, Josh Brolin...",
    runtime: "02:01:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/Yfhu5JIxnZc?si=cIWh9bj981QWF4-l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov13.jpg",
    name: "Dora",
    description: "follows a teenage Dora who, having grown up in the jungle, is sent to high school and must adapt to a new environment before leading her friends—Boots, cousin Diego, and a group of teens—on an adventure to find her missing explorer parents and the legendary lost Inca city of Parapata.",
    genre: "Action | Animation | Adventure | Comedy",
    rating: "80%",
    director: "James Bobin",
    starring: "Isabela Merced, Eugenio Derbez, Michael Peña...",
    runtime: "01:42:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/gUTtJjV852c?si=zcsadBeAr1Vup7ZR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    image: "images/movies/mov14.jpg",
    name: "Fury",
    description: "a World War II film starring Brad Pitt about a battle-hardened American tank commander, 'Wardaddy' and his crew as they fight their way through Germany in the closing days of the war.",
    genre: "Action | War | Comedy | Adventure",
    rating: "76%",
    director: "David Ayer",
    starring: "Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña...",
    runtime: "02:14:00",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/q94n3eWOWXM?si=phmOJQDbNBOs1Khk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
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

// Get the movie image from the URL
const params = new URLSearchParams(window.location.search);
const movieImage = params.get("movie");

let selectedMovie = null;

// Find the movie in your data
data.forEach(category => {
  if(category.movies) {
    category.movies.forEach(movie => {
      if(movie.image === movieImage)
        {selectedMovie = movie;}
    });
  };
});


let infoHTML = "";


if(selectedMovie) {
      infoHTML = `
        <div class="folder">
          <div class="movie-info">
            <div class="movie-img">
              <img src="${selectedMovie.image}" alt="">
            </div>

            <div class="movie-descript">
              <h2>${selectedMovie.name}</h2>
              <p>
                ${selectedMovie.description}
              </p>
              <p><strong>Genre:</strong> ${selectedMovie.genre} </p>
              <p><strong>Rotten Rating:</strong> ${selectedMovie.rating}</p>
              <p><strong>Directed by:</strong> ${selectedMovie.director} </p>
              <p><strong>Starring:</strong> ${selectedMovie.starring} </p>
              <p><strong>Runtime:</strong> ${selectedMovie.runtime}</p>
              <p><strong>Audio:</strong> ${selectedMovie.audio} </p>
            </div>

            <div class="download-movie">
              <button type="button">Download MP4</button>
              <button type="button">Download Subtitle</button>
            </div>

            <div class="recomended-movies">
              <h2>Recomended Movies</h2>

              <div class="rec-movies js-rec-movies">
                
              </div>
            </div>
          </div>

          <div class="trailer-and-comment">
            <div class="movie-trailer">
              ${selectedMovie.trailer}
            </div>

            <div class="comment">
              <h3>Comments</h3>
              <p>Name</p>
              <input type="text" placeholder="Enter your name...">
              <textarea name="text" id="" placeholder="Drop your comments here..."></textarea>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      `;
    };

document.querySelector(".js-inform-page").innerHTML = infoHTML;

// ...existing code to find selectedMovie...

let recommendedMovies = [];

if (selectedMovie) {

  // Split the selected movie's genres into an array
  const selectedGenres = selectedMovie.genre.split('|').map(g => g.trim().toLowerCase());

  // Find movies with the same genre (excluding the selected movie)
  data.forEach(category => {
    if (category.movies) {
      category.movies.forEach(movie => {
        if (movie.image !== selectedMovie.image) {
          const movieGenres = movie.genre.split('|').map(g => g.trim().toLocaleLowerCase());
          const CommonGenre = movieGenres.filter(genre => selectedGenres.includes(genre));
          if(CommonGenre.length >= 2){
            recommendedMovies.push(movie);
          }
        }
      });
    }
  });
};

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  } 
};

shuffle(recommendedMovies);

recommendedMovies = recommendedMovies.slice(0, 4);

let recHTML = "";

recommendedMovies.forEach(movie => {
  recHTML += `
    <a href="information-page.html?movie=${movie.image}">
      <div class="rec-movie-list">
        <img src="${movie.image}" alt="">
        <p>${movie.name}</p>
      </div>
    </a>
  `;
});

document.querySelector(".js-rec-movies").innerHTML = recHTML;

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