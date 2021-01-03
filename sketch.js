var canvas, backgroundImage;
var gameState = 0;
var database;

var goal,goalImage,ball,ballImage,player,playerImage, game,keeper, randNum;
var score;
function preload(){
  goalKeeper = loadImage("sprites/goalKeeper.jpg");
  playerImage= loadImage("sprites/player.png");
  ballImage=loadImage("sprites/soccerBall.png");
 goalImage=loadImage("sprites/wood2.png")
backgroundImage=loadImage("sprites/soccer-field-background.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  score=0;
}

function draw(){
  background(backgroundImage);
 text("score="+score,displayWidth/2,displayHeight-700);


  if(ball.isTouching (keeper)){
    ball.x=displayWidth-850;
    ball.y=displayHeight-200;
  ball.velocityX=0;
  ball.velocityY=0;
  keeper.y=displayHeight-400;
  }
  if(ball.x>displayWidth-150){
   ball.x=displayWidth-850
   ball.y=displayHeight-200
 ball.velocityX=0;
 ball.velocityY=0;
 score=score+1;

}


drawSprites();
}


function keyPressed(){
  if(keyCode===32){
     randNum=Math.round(random (1,2))
     game.shoot(randNum);

     console.log(randNum);
    }
}
