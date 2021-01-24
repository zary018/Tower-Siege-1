const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var slingShot, ground, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15 ,box16, box17, box18, box19, box20, box21;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 550, 500, 10)

    box1 = new Box(390,540,70,100);
    box2 = new Box(460,540,70,100);
    box3 = new Box(530,540,70,100);
    box4 = new Box(600,540,70,100);
    box5 = new Box(680,540,70,100);
    box6 = new Box(750,540,70,100);
    box7 = new Box(420,360,70,100);
    box8 = new Box(490,360,70,100);
    box9 = new Box(560,360,70,100);
    box10 = new Box(630,360,70,100);
    box11 = new Box(700,360,70,100);
    box12 = new Box(450,280,70,100);
    box13 = new Box(520,280,70,100);
    box14 = new Box(590,280,70,100);
    box15 = new Box(660,280,70,100);
    box16 = new Box(490,200,70,100)
    box17 = new Box(560,200,70,100)
    box18 = new Box(630,190,70,100)
    box19 = new Box(520,100,70,100)
    box20 = new Box(590,100,70,100)

}

function draw(){
    background("grey")
    Engine.update(engine);
    textSize(30)
    fill("blue")
    text("Drag the Hexagonal Stone and Release it to launch it towards the blocks", 50,40)
    ground.display()

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()

}
