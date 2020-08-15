var car , wall , wall1;
var speed , wieght;
var deformation ;

function setup() {
  createCanvas(800,400);
  car = createSprite(40,200,35 , 10);
  wall = createSprite(750,200,10,50);
  wall1 = createSprite(752,200,10,50);
  wall1.visible = false ;
  speed  = random(55,90);
  wieght = random(400,1500);

}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  car.collide(wall1);
  deformation = Math.round(0.5 * wieght * speed *speed / 22500);
  text("Deformation : " + deformation , 650 , 100);
  if(deformation < 100 && car.isTouching(wall)){
    car.shapeColor = color(0,255,0);
    car.velocityX = 0;
  }
  if(deformation > 100 && deformation < 180 && car.isTouching(wall)){
    car.shapeColor = color(230,230,0);
    car.velocityX = 0;
  }
  if(deformation > 180 && car.isTouching(wall)){
    car.shapeColor = color(255,0,0);
    car.velocityX = 0;
  }
  drawSprites();
}