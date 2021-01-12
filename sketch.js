const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var slingshot;
var polygonImage;
var score = 0;

function preload(){
    polygonImage = loadImage("images/polygon.png");
}

function setup(){
    createCanvas(900, 400);
    engine = Engine.create();
	world = engine.world;
    ground = new Ground();
    stand1 = new Stand(390,300,300,10);
    stand2 = new Stand(710,200,220,10);
    //big stack
    block1 = new Block(295,235,30,40);
    block2 = new Block(480,235,30,40);
    block3 = new Block(330,210,30,40);
    block4 = new Block(450,210,30,40);
    block5 = new Block(360,155,30,40);
    block6 = new Block(420,155,30,40);
    block7 = new Block(390,140,30,40);
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16 = new Block(390,155,30,40);

    //small stack
    block17 = new Block(650,150,30,40);
    block18 = new Block(680,150,30,40);
    block19 = new Block(710,150,30,40);
    block20 = new Block(740,150,30,40);
    block21 = new Block(770,150,30,40);
    block22 = new Block(680,190,30,40);
    block23 = new Block(710,190,30,40);
    block24 = new Block(740,190,30,40);
    block25 = new Block(710,80,30,40);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new SlingShot(this.ball, {x:100, y:200});

        Engine.run(engine);
}

function draw(){
    background(0,0,0);

    //ellipse(mouseX, mouseY, 80, 80);
    ground.display();
    stand1.display();
    stand2.display();

    //big stack
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    //small stack
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    //big stack
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();


    //small stack
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    slingshot.display();
    imageMode(CENTER);
    image(polygonImage, ball.position.x, ball.position.y, 40, 40);

    drawSprites();

    textSize(20);
    text("Score: "+score,750,40);
  // text("Score: "+block16.visiblity,750,40);
    console.log(score);
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode ===  32) {
        slingshot.attach(this.ball);
    }

  }

