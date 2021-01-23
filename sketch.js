const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Bin(1050+110,height-122.5,20,175);
	box2=new Bin(1050,height-40,200,20);
	box3=new Bin(1050-110,height-122.5,20,175);

	ground=new Ground(650,675,1300,20);

	paper=new Paper(150,height-60,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  box1.display();
  box2.display();
  box3.display();

  paper.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position, { x: 205, y: -165 });
	} 

  }





