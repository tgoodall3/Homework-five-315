var Games = [
  {
     "title":"The Legend of Zelda",
     "gameThumbImg":"zelda.png",
     "gameFullImg":"zelda-150.png",
     "releaseDate":"March 3, 2017",
     "genre":"Action-adventure",
     "rating":9.5
  },
  {
     "title":"The Last of Us Part II",
     "gameThumbImg":"last.png",
     "gameFullImg":"last-150.png",
     "releaseDate":"June 19, 2020",
     "genre":"Action-adventure",
     "rating":9.3
  },
  {
     "title":"Half-Life: Alyx",
     "gameThumbImg":"half.png",
     "gameFullImg":"half-150.png",
     "releaseDate":"March 23, 2020",
     "genre":"First-person shooter",
     "rating":9.4
  },
  {
     "title":"Red Dead Redemption 2",
     "gameThumbImg":"red.png",
     "gameFullImg":"red-150.png",
     "releaseDate":"October 26, 2018",
     "genre":"Action-adventure",
     "rating":9.8
  },
  {
     "title":"Persona 5",
     "gameThumbImg":"p5.png",
     "gameFullImg":"p5-150.png",
     "releaseDate":"September 15, 2016",
     "genre":"Role-playing",
     "rating":9.3
  },
  {
     "title":"Super Mario Odyssey",
     "gameThumbImg":"mario.png",
     "gameFullImg":"mario-150.png",
     "releaseDate":"October 27, 2017",
     "genre":"Platformer",
     "rating":9.5
  },
  {
     "title":"Bloodborne",
     "gameThumbImg":"bloodbourne.png",
     "gameFullImg":"blood-150.png",
     "releaseDate":"March 24, 2015",
     "genre":"Action role-playing",
     "rating":9.6
  },
  {
     "title":"God of War",
     "gameThumbImg":"gow.png",
     "gameFullImg":"gow-150.png",
     "releaseDate":"April 20, 2018",
     "genre":"Action-adventure",
     "rating":9.8
  },
  {
     "title":"Hades",
     "gameThumbImg":"hades.png",
     "gameFullImg":"hades-150.png",
     "releaseDate":"September 17, 2020",
     "genre":"Action role-playing",
     "rating":9.9
  },
  {
     "title":"Horizon Zero Dawn",
     "gameThumbImg":"horizon.png",
     "gameFullImg":"horizon-150.png",
     "releaseDate":"February 28, 2017",
     "genre":"Action role-playing",
     "rating":9.2
  }
];

function loadData (){
  $.each(Games, function(index, game){
    console.log(game.title);

  $("#app").append(` 
  <div id="${index}" class= "game-holder">
  <h4>${game.title}</h4>
  <div class="game-img">
    <img src="images/game-thumb/${game.gameThumbImg}" alt="" />
  </div>
  <div class="release"><span>Release Date: </span>${game.releaseDate}</div>
  <div class="genre"><span>Genre: </span>${game.genre}</div>
  <div class="rating"><span>Rating: </span>${game.rating}</div>
  </div>
  `);
  })
}

function initlisteners(){
    
}




$(document).ready(function(){
    loadData();
    // initlisteners();
});
