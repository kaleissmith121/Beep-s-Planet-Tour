let shapeSize = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  let redVal = map(sin(frameCount * 0.05), -1, 1, 100, 255);
  let blueVal = map(cos(frameCount * 0.05), -1, 1, 100, 255);
  background(redVal, 170, blueVal); 


  let jump = sin(frameCount * 0.1) * 30;

  let pulse = 50 + sin(frameCount * 0.08) * 10;

  // Dance Floor
  stroke(100);
  strokeWeight(10);
  fill(250);
  rect(90, 350, 300, 300);

  stroke(255, 255, 100);
  strokeWeight(5);
  fill(19, 109, 21);

  ellipse(240, 450 + jump, pulse); // Main alien
  ellipse(145, 385 + jump, pulse); // Alien 1
  ellipse(215, 385 + jump, pulse); // Alien 2
  ellipse(270, 385 + jump, pulse); // Alien 3
  ellipse(330, 385 + jump, pulse); // Alien 4

  // Disco Ball
  stroke(100);
  fill(50);
  ellipse(225, 117, 125); 
  rect(215, 2, 20, 50); // stick

  // Text
  stroke(255, 0, 255);
  textFont('Courier');
  textSize(30);
  text('Planet Bopi Dance Party', 25, 75);
}