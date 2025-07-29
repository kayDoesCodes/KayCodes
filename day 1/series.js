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