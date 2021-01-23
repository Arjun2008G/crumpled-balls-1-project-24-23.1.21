
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperball;
var ground1;
var dustbin1;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paperball = new paper(200,450,40);
	ground1 = new ground(width/2,670,width,20);
	
	dustbin1 = new dustbin(1200,650);

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});

	Engine.run(engine);
  
}


function draw() {	
  rectMode(CENTER);

  background(0);
  Engine.update(engine);

 paperball.display();
 ground1.display();
 dustbin1.display();
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
}
}


