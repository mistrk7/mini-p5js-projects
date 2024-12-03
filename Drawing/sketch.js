function setup() {
  createCanvas(400, 400);
  img = loadImage('grunge.png')
}

function draw() {
  background(220);
  strokeWeight(0);
  noise(255,224,123)

  // BLACK SEMI
  fill(30,30,30);
  arc(200,200,400,400,0,PI);
  // WHITE SEMI
  fill(252, 251, 240);
  arc(200,200,400,400,PI,PI*2);
  

  stroke(38,38,38)
  strokeWeight(18)
  // WHITE INNER SEMI
  fill(252, 251, 240);
  arc(200,200,280,280,0,PI);
  // BLACK INNER SEMI
  fill(30,30,30);
  arc(200,200,280,280,PI,PI*2);


  strokeWeight(0)
  // MIDDLE TRIANGLE WHITE TOP
  fill(252, 251, 240);
  triangle(
    180,200,
    200,180,
    220,200)
  // MIDDLE TRIANGLE BLACK BOTTOM
  fill(30,30,30);
  triangle(
    180,200,
    200,220,
    220,200)
  image(img,0,0)
}
