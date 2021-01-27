const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,engine,world;
var drops;
var shock,shock1,shock2,shock3,shock4;
var database;
var maxDrops=100;
var raindrops=[];

function preload(){
    shock1 = loadAnimation("thunderbolt/1.png");
    shock2 = loadAnimation("thunderbolt/2.png");
    shock3 = loadAnimation("thunderbolt/3.png");
    shock4 = loadAnimation("thunderbolt/4.png");
}

function setup(){
   createCanvas(500,900);
   
    engine = Engine.create();
    world = engine.world;

    boy = new Umbrella();
    drops = new Drops(50,50,10,10);
}

function draw(){

    background(0);

    Engine.update(engine);
    
    if(frameCount%12 === 0)
  {
    var rand=Math.round(random(0,400))
    switch(rand)
    {
        case 1 : shock.addAnimation(shock1)
               break;
        case 2 : shock.addAnimation(shock2)
               break;
        case 3 : shock.addAnimation(shock3)
               break;
        case 4 : shock.addAnimation(shock4)
               break;
               default:break;
    }
  }   
    for(i=0;i<maxDrops;i++)
    {
        raindrops.push(new Drops(random(0,400)),(random(0,400)));
    }
    resetdrops();
    boy.display();
    drops.display();
}   

function resetdrops()
{
    if(drops.body.position.y>height)
    {
        this.drops.Body.setPosition(this.rain,{x : random(0,400),y : random(0,400)})
    }
}