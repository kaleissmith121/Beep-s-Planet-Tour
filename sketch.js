var chunky=45;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

function draw() {
  background(mouseX,170,mouseY) ; //an RGB color for the canvas' background
  
  stroke(100,100,100);
  strokeWeight(10);
  fill(250,250,250);
  rect(90,350,300,300); //dance floor

  stroke(255,255,100);
  strokeWeight(5);
  fill(19,109,21);
  ellipse(240,450,chunky); //main alien

  stroke(255,255,100);
  strokeWeight(5);
  fill(19,109,21);
  ellipse(145,385,chunky); //alien 1

  stroke(255,255,100);
  strokeWeight(5);
  fill(19,109,21);
  ellipse(215,385,chunky); //alien 2

  stroke(255,255,100);
  strokeWeight(5);
  fill(19,109,21);
  ellipse(270,385,chunky); //alien 3

  stroke(255,255,100);
  strokeWeight(5);
  fill(19,109,21);
  ellipse(330,385,chunky); //alien 4

  stroke(100,100,100);
  strokeWeight(10);
  fill(50,50,50);
  ellipse(225,117,125); //disco ball
  
  stroke(0,0,0);
  strokeWeight(5);
  fill(27,27,27);
  rect(215,2,20,50); //disco stick

  stroke(255,0,255); //Fuchsia colored text outline
  strokeWeight(10);
  textFont('Courier');
  textSize(30);
  text('Planet Bopi Dance Party',25,75);
}