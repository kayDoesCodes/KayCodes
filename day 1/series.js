const series = [{
  image: "images/series/series1.jpg",
  name: "SnowFall"
},
{
  image: "images/series/series2.jpg",
  name: "The boys"
},
{
  image: "images/series/series3.jpg",
  name: "Peaky blinders"
},
{
  image: "images/series/series4.jpg",
  name: "Squid Game"
},
{
  image: "images/series/series5.jpg",
  name: "Vampire Diaries"
},
{
  image: "images/series/series6.jpg",
  name: "The Last Of Us"
},
{
  image: "images/series/series7.jpg",
  name: "Euphoria"
},
{
  image: "images/series/series8.jpg",
  name: "Walking Dead"
},
{
  image: "images/series/series9.jpg",
  name: "Arcane"
},
{
  image: "images/series/series10.jpg",
  name: "DareDevil"
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
  }];

let seriesHTML = '';

series.forEach((seriesList) => {
  seriesHTML += `
    <div class="serie">
      <img src="${seriesList.image}" alt="">
      <p><strong>${seriesList.name}</strong></p>
    </div>
  `;
});

document.querySelector('.js-series-list').innerHTML = seriesHTML;