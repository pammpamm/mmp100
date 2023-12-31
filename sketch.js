var pam=500
let beginX = 20.0; // Initial x-coordinate
let beginY = 10.0; // Initial y-coordinate
let endX = 570.0; // Final x-coordinate
let endY = 320.0; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 4; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.01; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(500, 500);
  background(255,171,171);//background color
  noStroke();
  distX = endX - beginX;
  distY = endY - beginY; 
}

function draw() {
  background(255,171,171);//background color
  fill(0,2);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(255);
  ellipse(x, y, 20, 20);
  fill(83,80,80);  
  rect(0,400,75,100);
  rect(75,350,75,150);
  rect(150,250,80,250);
  rect(230,150,90,350);
  rect(320,350,75,150);
  rect(395,180,75,400);
  rect(465,250,80,250);
}

function mousePressed() {
  pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}