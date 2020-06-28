const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var canvas;
var rain;
var j;
function setup(){
    canvas = createCanvas(1280,610);
    engine = Engine.create();
    world = engine.world;
    rain = [];
    
}
function draw(){
    Engine.update(engine);
    background(0);
   
        rain.push(new Rain(random(0,1280),0));
    

    for(j = 0;j < rain.length;j++){
        rain[j].display();
        
    }
    
}
