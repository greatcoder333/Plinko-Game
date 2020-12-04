const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world

var Particles = []
var Plinkos = []
var Divisions = []

function setup() {
  createCanvas(400,400);
  engine  = Engine.create()
  world = engine.world;
  ground1 = new Ground(399,399,800,20)
  for(var l = 0; l <= width; l = l +80){
    Divisions.push(new Division(l,height-DivisionHeight/2,10,DivisionHeight))
    }
for (var j = 40; j <= width;j=j+50){
Plinkos.push(new Plinko(100,200,10))
}
  Engine.run(engine)
  
}

var DivisionHeight = 100
function draw() {
  background("pink");  
ground1.display();
for(var l = 0; l<Divisions.length; l++){
Divisions[l].display()
}
for(var j = 40; j>Plinkos.length; j++){
Plinkos[j].display()
}
text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY)
}
