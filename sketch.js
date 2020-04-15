const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var score = 0;

var gameState = "onSling";
var bg = "sprites/school.jpg";

function preload() {

     GetTime();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(600,height,1200,20);
    
    box1 = new Box1(700,320,70,70);
    box2 = new Box1(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);
    
    box3 = new Box1(700,250,70,70);
    box4 = new Box1(920,250,70,70);
    pig3 = new Pig(810, 220);
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,170,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:195, y:220});
}

function draw(){
    background(225);
    if(backgroundImg){
    background(backgroundImg);
    }
    Engine.update(engine);
    textSize(50);
    strokeWeight(4);
    text("Your Score : " + score, 30, 50);

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    log1.score();

    box3.display();
    box3.score();
    box4.display();
    box4.score();
    pig3.display();
    pig3.score();
    log3.display();
    log3.score();

    box5.display();
    box5.score();
    log4.display();
    log4.score();
    log5.display();
    log5.score();

    bird.display();
    slingshot.display();   
    textSize(15);
    text("weak point is here (hit hard) --->>>",430,360)
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
     
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball.body, {x: 100 , y: 100});
        slingshot.attach(bird.body);
    }
}



async function GetTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
    var responsejson = await response.json();

    var datetime = responsejson.datetime;

    var hour = datetime.slice(11,13);

    if (hour >= 06 && hour <= 14){
      bg = "sprites/school.jpg" 
    }else if(hour >16 && hour <= 18) {
        bg = "sprites/playground2.JPG"    
    } else{
        bg = "sprites/house.JPG"
    }

    backgroundImg  = loadImage (bg);

    console.log(hour);
}