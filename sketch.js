const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground1;

function preload(){
  rockImg=loadImage("polygon.png");
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground1=new Ground(300,350,250,10);
  ground2=new Ground(600,280,200,10);

  //Left Block
  //layer 1
  box1=new Box(205,300,"lightblue");
  box2=new Box(235,300,"lightblue");
  box3=new Box(265,300,"lightblue");
  box4=new Box(295,300,"lightblue");
  box5=new Box(325,300,"lightblue");
  box6=new Box(355,300,"lightblue");
  box7=new Box(385,300,"lightblue");

  //layer 2
  box8=new Box(235,250,"pink");
  box9=new Box(265,250,"pink");
  box10=new Box(295,250,"pink");
  box11=new Box(325,250,"pink");
  box12=new Box(355,250,"pink");

  //layer 3
  box13=new Box(265,200,"blue");
  box14=new Box(295,200,"blue");
  box15=new Box(325,200,"blue");

  //layer 4
  box16=new Box(295,150,"purple");
  //Left Block

  //Right Block
  //layer 1
  box17=new Box(535,250,"lightblue");
  box18=new Box(565,250,"lightblue");
  box19=new Box(595,250,"lightblue");
  box20=new Box(625,250,"lightblue");
  box21=new Box(655,250,"lightblue");

   //layer 2
  box22=new Box(565,200,"pink");
  box23=new Box(595,200,"pink");
  box24=new Box(625,200,"pink");

  //layer 3
  box25=new Box(595,150,"purple");

  rock=Bodies.circle(100,300,20);
  World.add(world,rock);

  slingshot1=new Slingshot(this.rock,{x:80,y:250});
}

function draw() {
  background(56,44,44);  
  drawSprites();
  Engine.update(engine);

  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();

  imageMode(CENTER);
  image(rockImg,rock.position.x,rock.position.y,40,40);

  slingshot1.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot1.fly();
}