const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball,Jeffery;
var ground;
var con,Diego;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);
  Jeffery = Bodies.circle(350,10,12,ball_options);
  World.add(world,Jeffery);

  
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);
      
  Diego = Matter.Constraint.create({
    bodyA:ball,
    pointA:{x:0,y:0},
    bodyB:Jeffery,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,Diego);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(Jeffery.position.x,Jeffery.position.y,12);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,Jeffery.position.x,Jeffery.position.y);
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}

