const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var particle = [ ]
var plinkos = [ ]
var divisions = [ ]
var divisionHeight = 300

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  Engine.run (engine)

  ground1= new ground(240,790,480,20)
  ground2= new ground(0,400,20,800)
  ground3= new ground(480,400,20,800)

  for(i=16;i<480;i=i+65){
    divisions.push(new division(i,650))
  }

  for(i=0;i<=width;i=i+50){
    plinkos.push(new plinko(i,50))
  }

  for(i=0;i<=width;i=i+50)
  {
    plinkos.push(new plinko(i,150))
  }
}

function draw() {
  background(0);  
  Engine.update(engine);

  drawSprites();
  ground1.display()
  ground2.display()
  ground3.display()


  if(frameCount%30===0)
  {
    particle.push(new Particle())
  }

  for(i=0;i<particle.length;i++){
    particle[i].display()
  }

  for(i=0;i<divisions.length;i++){
    divisions[i].display()
  }

  for(i=0;i<plinkos.length;i++){
    plinkos[i].display()
  }
}