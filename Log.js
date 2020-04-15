class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    this.Visiblity = 255;
    Matter.Body.setAngle(this.body, angle);
  }

  display(){
    if(this.body.speed < 5){
     super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 20, 500);
      pop();
    }
    
  }
  score(){
   if (this.Visiblity < 0 && this.Visiblity > -1005){
     score++;
   }
 }
 

}