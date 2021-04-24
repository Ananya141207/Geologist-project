const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubber,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,600,1200,20)
    hammer = new Hammer(100,20,50,50);
    rubber = new Rubber(350,100,100)
    stone = new Stone(750,100,50,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   
    plane.display();
    hammer.display();
   rubber.display();
   stone.display();
    
 
}