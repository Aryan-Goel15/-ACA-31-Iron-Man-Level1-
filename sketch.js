
var bg, backgroundImg;
var iron , im; 


function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  im=loadImage("images/iron.png")
}

function setup() {
  createCanvas(1200, 650);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.velocityY=10;
  bg.scale=2
  iron = createSprite(100,500,60,90) ;
  iron.addImage(im);
  iron.scale=0.3
}

function draw() {
 if(keyDown("up")){
   iron.velocityY=-10;
 }
 if(keyDown("left")){
  iron.x=iron.x-5;
}
if(keyDown("right")){
  iron.x=iron.x+5;
}
iron.velocityY=iron.velocityY+0.5;
 if(bg.y>650){
   bg.y=300
 }
    
    drawSprites();
   
}
