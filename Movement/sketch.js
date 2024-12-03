let wave = 1

function setup() {
  createCanvas(400, 400);
}

function tpoint(x,y) { 
  // calculate the distance from the point using pythagoras theorem
  let distance = min(150, sqrt(((mouseX-x)**2) + (((mouseY-y)**2))))

  // set the fill using random colours based on position and distance
  fill(mouseX/1.566,mouseY/1.566,distance*1.5);

  // sin value for the wave plus an offest and the calculated distance
  circle(x,y,distance+(sin(wave+x))*3);
}

function draw() {
  background(220);

  // increment the waving value
  wave = wave+0.1
  
  // This places circles in a grid from the top left down to the bottom right. 
  for (let y = 0; y <= 400; y += 100) {
    for (let x = 0; x <= 400; x += 100) {
      tpoint(x, y);
    }
  }
}
