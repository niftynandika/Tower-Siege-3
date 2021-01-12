class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0.01
       
    }
    this.Visiblity = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  score(){
    if(this.Visiblity < 0 && this.Visiblity>-105){
      score++;
    }
    console.log(this.Visiblity);
  }

  display(){
     //console.log(this.body.speed);
     if(this.body.speed<5){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
     }
     else{
      push();
      this.Visiblity = this.Visiblity-5;
      pop();
       World.remove(world,this.body);
       
     }
    
      fill(236,185,57);
      strokeWeight(3);
      stroke(114,98,85);
    
  }
};