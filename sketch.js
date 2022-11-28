var jogger, jogger_img, edges

var track_background, trackimage

var obstacleGroup, trackobstacle1
var trackObstacle 
var canvas

function preload(){
trackimage = loadImage("Track_Background.jpg");
jogger_img = loadImage("runner.png");
trackobstacle1 = loadImage("trackobstacle1.png");
}

function setup(){
  canvas = createCanvas(600, 600);
  
  jogger = createSprite(50,100,20,50);
  jogger.addImage(jogger_img);

  edges = createEdgeSprites();

  track_background = createSprite(300,180,600,20);
  track_background.addImage(trackimage);
  track_background.velocityX = -4
  track_background.x = track_background.width/2
  
  jogger.scale = 0.25

  //jogger.debug = true;
 
  obstacleGroup = createGroup();
  
}

function draw(){
  background("white");

  console.log(jogger.y)
  if(keyDown("space")){
    jogger.velocityY = -3;
  }
  
  jogger.velocityY = jogger.velocityY + 0.5;

  if(track_background.x<140){
    track_background.x = track_background.width/2
  }
  
  if(obstacleGroup.isTouching(jogger)){
    gameOver()
  }

  jogger.collide(track_background);
  spawnObstacles();

  drawSprites();
  
}

function spawnObstacles(){
    if (frameCount % 60 === 0){
    trackObstacle = createSprite(400,110,10,40);
    trackObstacle.debug = true;
    obstacleGroup.add(trackObstacle);
    trackObstacle.addImage(trackobstacle1);
    trackObstacle.velocityX = -6;
    
 
    
     

             
     trackObstacle.scale = 0.1;
     trackObstacle.lifetime = 300;
    
 
   
  }
}

function gameOver(){
  track_background.velocityX = 0;
}
