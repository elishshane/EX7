var rs;
var rh;
var img;

var string = "I dunno who U R"
var string2 = "U Dunno who I am"
var string3 = "Good luck in Season 7"
var imgScale = 0.1;

function preload(){
  rs = loadFont( 'data/NexaRustScriptL.otf');
  rh = loadFont( 'data/NexaRustHandmade.otf');
  img = loadImage( 'data/koo-tigers-i5uiuuo7.png');
  
}

function setup() {
  createCanvas( 1000, 1000);
  
  quote = new Quote( 10, 50, string, rs, [255, 0, 0]);
  quote2 = new Quote( 500, 500, string2, rh, [ 0, 0, 255]);
  quote3 = new Quote( 100, -300, string3, rs, [0]);
}

function draw() {
  background(255);
  quote.drop();
  quote.display();
  if( quote.position.y == height - 210){
    quote2.slide();
    quote2.display();
    if( quote2.position.x < -1000){
      translate( 400, 300);
      imageMode(CENTER);
      scale(imgScale);
      image(img, width/2, height/2);
      imgScale = imgScale + 0.001;
      if(imgScale > 0.35){
        imgScale = 0.35;
        quote3.display();
      }
      
      
    }
  }
  
}

function Quote(x, y, txt, font, color){//create class for string
  // x = x position of x string
  //y = y position of y string
  //font = typeface
  //color = color of typeface
  this.position = createVector(x, y);
  this.velocity = createVector();
  this.accel = createVector(0, 1);
  this.txt = txt;
  this.font = font;
  this.color = color;
}

Quote.prototype.drop = function(){//droping stirng
  this.velocity.add(this.accel);
  this.position.add(this.velocity);
  if( this.position.y > height - 210 ){
    this.velocity.y = 0;
    this.position.y = height - 210;
  }
}

Quote.prototype.display = function(){//displaying quote
  fill(this.color);
  textFont( this.font, 100);
  text( this.txt, this.position.x, this.position.y );
}

Quote.prototype.slide = function(){//sliding quote
  this.position.x = this.position.x - 3;
}