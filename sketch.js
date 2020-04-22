const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pri,vin,vig,bbird = "sprites/vinod.png";
var bpig = "sprites/vinod.png";

var engine, world;
var box1, pig1,pig3,pimg,vimg,viimg;
var backgroundImg,platform;
var bird, slingshot;

var GameState = "select";
var gameState = "onSling";
var bg = "sprites/bg1.png";
var playerimg,pigimg,ky = "vig" ;
var score = 0;

function preload() {
    GetTime();
    
}

function setup(){

    

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
     
    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    pig4 = new Pig(1050, 150);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    pig5 = new Pig(600, 380);
    pig6 = new Pig(770, 180);
    pig7 = new Pig(840, 180);


    log3 =  new Log(810,180,300, PI/2);

   
    box6 = new Box(1050,380,100,200);



    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:195, y:220});
    pir = new CreateSprite(100,150,1,1);
    vig = new CreateSprite(400,150,1,1);
    vin = new CreateSprite(800,150,1,1);

     pimg = loadImage("sprites/pe.png");
     viimg = loadImage("sprites/vinod.png");
     vimg = loadImage("sprites/vk.png");
    
}

function draw(){
    background("white");



    if(backgroundImg)
        background(backgroundImg);
    

    
    Engine.update(engine);
    //strokeWeight(4);

    if(GameState === "play" ){
 
        noStroke();
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

    pig5.display();
    pig5.score();

    pig6.display();
    pig6.score();

    pig7.display();
    pig7.score();

    pig4.display();
    pig4.score();
    log3.display();
    log3.score();

  
    box6.display();
    box6.score();



    
    //log6.display();
    slingshot.display();   
    bird.display();
   
     
    image(playerimg, bird.body.position.x-50, bird.body.position.y-50, 125, 125);
    
   }

    if(GameState === "select"){

        
        
        strokeWeight(4);
        fill("yellow");
        text("Select The Player You Want",350,100)
        textSize(20);
        text("For player 1 press 1 on keyboard",70,380);
        text("For player 2 press 2 on keyboard",430,380);
        text("For player 3 press 3 on keyboard",800,380);
        fill("white");
        textSize(50);
        text("1", pir.body.position.x , pir.body.position.y)
        text("2", vig.body.position.x + 60, vig.body.position.y)
        text("3", vin.body.position.x + 60, vin.body.position.y)
        pir.display();
        
        image(pimg, pir.body.position.x - 50, pir.body.position.y -50, 250, 250);

        vig.display();
        
        image(vimg, vig.body.position.x -20, vig.body.position.y-100, 350, 350);
        vin.display();
        
        image(viimg, vin.body.position.x-50, vin.body.position.y-150, 450, 450);

        if(keyCode === 49){
            bpig = "sprites/vk.png";
            bbird = "sprites/pe.png";
            GameState = "play";
            pir.body.position.y = -2000;
            vig.body.position.y = -2000;
            vin.body.position.y = -2000;
          }
          if(keyCode === 50){
            bpig = "sprites/vinod.png";
              bbird = "sprites/vk.png";
              GameState = "play";
              pir.body.position.y = -2000;
              vig.body.position.y = -2000;
              vin.body.position.y = -2000;
          }
          if(keyCode === 51){
            bpig = "sprites/pe.png";
              bbird = "sprites/vinod.png";
              GameState = "play";
              pir.body.position.y = -2000;
              vig.body.position.y = -2000;
              vin.body.position.y = -2000;
          }
          pigimg = loadImage (bpig);
          playerimg = loadImage (bbird);


          
    }
     
}

function mouseDragged(){
    if (GameState ==="play" /*&&  gameState!=="launched"*/){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";

}

function keyPressed(){
    if(keyCode === 32 && GameState === "play"){
        gameState = "hehehe";

        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x: 220 , y:50})
       slingshot.attach(bird.body);
    }
}

async function GetTime(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
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