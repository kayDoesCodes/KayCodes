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
    image: "images/movies/mov6.jpg",
    name: "Aladin",
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
    image: "images/movies/mov7.jpg",
    name: "Baby Driver",
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
    image: "images/movies/mov8.jpg",
    name: "Cargo",
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
    image: "images/movies/mov9.jpg",
    name: "Guardians of the galaxy",
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
    image: "images/movies/mov10.jpg",
    name: "Pulp Fiction",
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
    image: "images/movies/mov11.jpg",
    name: "Extraction",
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
    image: "images/movies/mov12.jpg",
    name: "Sicario",
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
    image: "images/movies/mov13.jpg",
    name: "Dora",
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
    image: "images/movies/mov14.jpg",
    name: "Fury",
    description: "After being ensnared in a death trap, this dysfunctional group is forced on a dangerous mission, forcing them to confront their pasts and decide if they will tear themselves apart or find redemption.",
    genre: "Action | Crime | Drama",
    rating: "100%",
    director: "Jake Schreier",
    starring: "Florence Pugh, Sebastian Stan, Julia Louis-Dreyfus...",
    runtime: "02:06:50",
    audio: "English",
    trailer: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/-sAOWhvheK8?si=LOutdqMOjqL_XsX_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
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

              <div class="rec-movies">
                <div class="rec-movie-list">
                  <img src="images/movies/mov1.jpg" alt="">
                  <p>The Batman</p>
                </div>

                <div class="rec-movie-list">
                  <img src="images/movies/mov1.jpg" alt="">
                  <p>The Batman</p>
                </div>

                <div class="rec-movie-list">
                  <img src="images/movies/mov1.jpg" alt="">
                  <p>The Batman</p>
                </div>

                <div class="rec-movie-list">
                  <img src="images/movies/mov1.jpg" alt="">
                  <p>The Batman</p>
                </div>
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