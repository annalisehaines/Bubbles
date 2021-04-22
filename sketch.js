var bubbles = [];

function setup() {
  createCanvas(400, 400);
  /*for(var i = 0; i < 10; i++){
    bubbles[i] = new Bubble();
  }*/
}

function draw() {
  background(0);
  for(var i = 0; i < bubbles.length; i ++){
    bubbles[i].show();
    bubbles[i].move();
    bubbles[i].clicked();
  }

}

function mouseClicked(){
 // bubbles[bubbles.length] = new Bubble();
  bubbles.push(new Bubble(mouseX,mouseY));
  //bubbles.pop();
}

class Bubble{
  constructor(x,y){
    this.x = random(0,width);
    this.y = random(0,height);
    this.col = color(255,100);
  }


  move(){
  this.x +=random(-1,1);
  this.y += random(-1,1);
  }

  show() {
  //noFill();
  fill(this.col);
  stroke(255);
  circle(this.x,this.y,48);
  }
  
  clicked(){
    var d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 48 && mouseIsPressed){
      this.col = color(255,0,0);
    }
  }
}