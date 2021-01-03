class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
console.log(gameState);
  }

  update(state){
    database.ref('/').update({
      gameState: state  
    });
  }

  async start(){

    keeper = createSprite(displayWidth-200,displayHeight-340);
    keeper.addImage("goalKeeper",goalKeeper);
    keeper.scale=0.25;

    goal=createSprite(displayWidth-100,displayHeight-300);
    goal.addImage(goalImage);
    goal.scale=1.5;

    player = createSprite(displayWidth-1000,displayHeight-300);
    player.addImage(playerImage);
    player.scale=0.8;

  ball=createSprite(displayWidth-850,displayHeight-200);
    ball.addImage(ballImage);
    ball.scale=0.1;

  }


  end(){
    console.log("Game Ended");
  }
 shoot(randNum){
   if(randNum===1){
  ball.velocityY=-0.5;
ball.velocityX=10;

}
    if(randNum===2){
      ball.velocityY=-0.5
      ball.velocityX=10;
      keeper.y= ball.y;
    }
 
  }

}