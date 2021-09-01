
function preload(){
  shipImg=("ship.png")
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.25;
  sea.velocityX=-5;
  sea.x=sea.width/8;

  ship=createSprite(130,130);
  ship.addAnimation("movingship",shipImg1);
  ship.scale=0.3;

  

  

  
}

function draw() {
  background("white");
  if(sea.x<0){
    sea.x=sea.width/8;
  }

  drawSprites();
 
}