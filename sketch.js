const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,stand1, stand2;
var bird, slingShot;
var stone;
var block1, block2, block3, block4;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    stone = loadImage("sprites/paper.png");
}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(285, 372, 200, 10);
    stand2 = new Ground(807, 240, 200, 10);
    
    //base of stand 1
    block1 = new Ground(285, 352, 50, 30);
    block2 = new Ground(305, 352, 50, 30);
    block3 = new Ground(325, 352, 50, 30);
    block4 = new Ground(265, 352, 50, 30);
     
     stone = createSprite(100, 100);
     World.add(world, stone);
     imageMode(CENTRE);
     image(stone, stone.position.x, stone.position.y, 50, 50);
     stone.velocityX = 0;
     stone.velocityY = 0;

     sling = new SlingShot(stone.body,{x:200,y:50});
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    textSize(20);
    text(mouseX + "  " + mouseY, 100, 100);
    
    // box1.display();
    // box2.display();
     ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    
    stone.display();
     stand1.display();
     stand2.display();
    // log6.display();
    sling.display();  
    drawSprites ();  
}


function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
   sling.fly();
}