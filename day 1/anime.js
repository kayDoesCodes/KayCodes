const anime = [{
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
}];

let animeHTML = '';

anime.forEach((animeList) => {
  animeHTML += `
    <div class="animes">
      <img src="${animeList.image}" alt="">
      <p><strong>${animeList.name}</strong></p>
    </div>
  `;
});

document.querySelector('.js-anime-list').innerHTML = animeHTML;

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