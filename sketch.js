var bullets,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  bullets=createSprite(200,200,30,30);
  wall=createSprite(1200,200,50,150);

  speed=random(50,90);
  weight=random(400,1500);

  bullets.velocityX=speed;
}

function draw() {
  background("black");  
  if(wall.x-bullets.x < (bullets.width+wall.width)/2)
  {
  bullets.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
   bullets.shapeColor=color("white");
   wall.shapeColor=color("green");

  }
  if(deformation<180 && deformation>100)
  {
    bullets.shapeColor=color("white");
    wall.shapeColor=color("green");
 
  }
  if(deformation<100)
  {
    bullets.shapeColor=color("white");
    wall.shapeColor=color("red");

  }

  }
  drawSprites();
}