
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject
var dustbinObject
var groundObject

function preload()
{
	
}

function setup() {
	

	createCanvas(1600, 700);
	 rectMode(CENTER);
	  engine = Engine.create();
	   world = engine.world;
		dustbinObject=new Dustbin(1200,650);
		 paperObject=new paper(200,450,40);
		 groundObject=new ground(width/2,670,width,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  groundObject.display();
 dustbinObject.display();

  drawSprites();

  
 
}

function KeyPressed(){
	if(KeyPressed === UP_ARROW){
		Matterter.Body.applyForce(paperObject.body,paperObject.body.position, {x:85,y: -85});
	}
}



