var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
  for (var j = 60; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

 
  for (var j = 30; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,130));
  }


  for (var j = 60; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,185));
  }

  for (var j = 30; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,240));
  }

  for (var j = 60; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,295));
  }

  for (var j = 30; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,350));
  }

  for (var j = 60; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,405));
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount
  if(frameCount%60===0){
    perticles.push(new particlea(random(0,800),0))
  }


  //display the particles 
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
}