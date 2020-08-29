const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events; 

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<= width; j = j + 50){
    plinkos.push(new Plinko(j, 65));
  }

  for(var j = 10; j<+ width-10; j = j + 50){
    plinkos.push(new Plinko(j, 165));
  }

  for(var j = 40; j<= width; j = j + 50){
    plinkos.push(new Plinko(j, 265));
  }

  for(var j = 10; j<+ width-10; j = j + 50){
    plinkos.push(new Plinko(j, 365));
  }

  for(var j = 40; j<= width; j = j + 50){
    plinkos.push(new Plinko(j, 465));
  }

}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();

  if(frameCount % 60 === 0 ){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

 
  drawSprites();
}