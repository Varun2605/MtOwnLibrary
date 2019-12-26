var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 100, 50, 50);
 movingRect=createSprite(400,800,50,80);
 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";
 fixedRect.velocityY=+5;
 movingRect.velocityY=-5;

}

function draw() {
  background(0); 
  
bounceOff(movingRect,fixedRect);
  





  drawSprites();

  
}

