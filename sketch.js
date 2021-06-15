
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

var groundOBJ;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	};

	ball = Bodies.circle(1000, 600,20, ball_options);
	World.add(world, ball);

	groundOBJ = new Ground(1200, 670, 5, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 20 );

  groundOBJ.display();
  
  drawSprites();
 
}



