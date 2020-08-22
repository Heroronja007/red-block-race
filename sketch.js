var database
var gameState = 0
var playerCount
var form, player, game
var distance = 0
var allPlayers
var car1, car2, car3, car4, track, ground, cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth -20, displayHeight -30);

  game = new Game()
  game.getState()
  game.start()
  
}

/*function preload(){
  car1 = loadImage("car1.png");
  car2 = loadImage("car2.png");
  car3 = loadImage("car3.png");
  car4 = loadImage("car4.png");
  track = loadImage("track.jpg");
  ground = loadImage("ground.png");

}*/

function draw(){
  background("white");
    if(playerCount === 4){
      game.update(1)
    }
    if (gameState === 1){
      clear()
      game.play()
    }
}