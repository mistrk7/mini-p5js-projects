let pos;
let vel;
let grav;
let drag;
let size;
let power;
let distance;
let mousePos;

let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set Bubble Variables.
  pos = createVector(windowWidth/2, windowHeight/2);
  vel = createVector(0, 0);
  grav = 0.05;
  size = 50;
  drag = 0.98;
  power = 3;
}

// The *function* that I use to bounce the bubble across the screen
function bounce(pos1X, pos1Y){
  let angle = atan2(pos1Y - pos.y, pos1X - pos.x)
  vel.add(-cos(angle) * power, -sin(angle) * power)
}

// The *event* that I use to respond to the mouse scrolling.
function mouseWheel(event) {
  if (event.delta > 0) {
    vel.y += -0.5
  } else {
    vel.y += +0.5
  }
}

function draw() {
background(200);

// mousePos
mousePos = createVector(mouseX, mouseY)

// gravity
vel.y += grav

// drag
let minus_vel = -vel
if (vel > createVector()){
  vel = vel.mult(drag)
}

// Mouse Collision
distance = dist(pos.x, pos.y, mouseX, mouseY); 
if(distance <= size/2){
  let angle = atan2(mouseY - pos.y, mouseX - pos.x)
  vel = createVector(0,0)
  vel.add(-cos(angle) * power, -sin(angle) * power)
  
  score = score + 1;
  
  //Faster speed
  power += ((score % 24)/20)
  grav += ((score % 24)/1200)
}

  // Add velocity to position. Always
  pos.add(vel);

  // Edge bouncing (vertical edges)
  if (pos.y > windowHeight - size / 2) {
    pos.y = windowHeight - size / 2; 
    vel.y *= -1; 
    score = 0
    grav = 0.05;
    size = 50;
    drag = 0.98;
    power = 3;
  }

 // Edge bouncing (horizontal edges)
  if (pos.x > windowWidth - size / 2) {
    pos.x = windowWidth - size / 2;
    vel.x *= -1;
  } else if (pos.x < size / 2) {
    pos.x = size / 2;
    vel.x *= -1;
  }

  // Draw the dot.
  strokeWeight(size);
  point(pos);

  //Draw the score
  fill(0)
  textSize(32)
  text("SCORE: "+score+"   How long can you keep it up?", windowWidth/10, windowHeight/10)
}