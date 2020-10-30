
var car1, car2, car3, wall1, wall2, wall3;
var speed1, speed2, speed3, weight1, weight2, weight3;

function setup() {
  createCanvas(1600,400);
  car1 = createSprite(60,200, 70, 30);
  car2 = createSprite(60, 60, 70,30)
  car3 = createSprite(60, 330, 70,30)

  wall1 = createSprite(900,200, 30, 70);
  wall2 = createSprite(900, 60, 30,70)
  wall3 = createSprite(900, 330, 30,70)

  border1 = createSprite(0, 126 , 2200, 7)
  border2 = createSprite(0, 266, 2200, 7)
  border3 = createSprite(0, 1, 2200, 8)
  border4 = createSprite(0, 399, 2200, 8)

  speed1 =  random(55,90)
  weight1 = (400,1500)
  speed2 = random(55,90)
  weight2 =random(400,1500)
  speed3 = random(55,90)
  weight3 =random(400,1500)
}

function draw() {
  background(0,0,0); 

car1.velocityX = speed1;
car2.velocityX = speed2;
car3.velocityX = speed3;

border1.shapeColor=color("white");
border2.shapeColor=color("white");
border3.shapeColor=color("white");
border4.shapeColor=color("white");

wall1.shapeColor=color("white");
wall2.shapeColor=color("white");
wall3.shapeColor=color("white");
  
if(wall1.x-car1.x < (car1.width+wall1.width)/2)
{
  car1.velocityX=0;
  var deformation1 = 0.5*weight1*speed1*speed1/22500;
 if(deformation1>180)
{
    car1.shapeColor=color(255,0,0)
}
}
  
if(wall2.x-car2.x < (car2.width+wall2.width)/2){

  car2.velocityX=0;
  var deformation2 = 0.5*weight2*speed2*speed2/22500;
 if(deformation2>180)
{
    car2.shapeColor=color("green")
}
}

if(wall3.x-car3.x < (car3.width+wall3.width)/2) {
  car3.velocityX=0;
  var deformation3 = 0.5*weight3*speed3*speed3/22500;
 if(deformation3>180)
{
    car3.shapeColor=color("blue ")
}
}

if(deformation1>180) {
    textSize(32);
    fill("red")
    text('Zenia : Not Safe', 550, 200)
}

if(deformation1>80 && deformation2<180) {
  textSize(32);
  fill("red")
  text('Zenia : Not Safe', 550, 200)
}

if(deformation1<80) {
  textSize(32);
  fill("red")
  text('Zenia : Safe', 550, 200)
}

if(deformation2>180) {
  textSize(32);
  fill("green")
  text('Taurus : Not Safe', 550, 67)
}

if(deformation2>80 && deformation2<180) {
  textSize(32);
  fill("green")
  text('Taurus : Not Safe', 550, 67)
}

if(deformation2<80) {
  textSize(32);
  fill("green")
  text('Taurus : Safe', 550, 67)
}

if(deformation3>180) {
  textSize(32);
  fill("blue")
  text('Cyclops : Not Safe', 550, 350)
}

if(deformation3>80 && deformation3<180) {
  textSize(32);
  fill("blue")
  text('Cyclops : Not Safe', 550, 350)
}

if(deformation3<80) {
  textSize(32);
  fill("blue")
  text('Cyclops : Safe', 550, 350)
}

  textSize(32);
  fill("white");
 text( deformation1, 200, 200);
  fill("white");
  text('Deformation: ', 10, 200);
  fill("white")
  text( deformation2, 200, 67);
  fill("white")
  text('Deformation: ', 10, 67);
  fill("white")
  text( deformation3, 200, 350);
  fill("white")
  text('Deformation: ', 10, 350)

drawSprites();

}