let desk; 
let pancake;

function preload() {
  desk = loadImage('image/desk.jpg');
  pancake = loadImage('image/pancakes.jpeg');
  doggy = loadImage('image/dog.jpeg');
  treees = loadImage('image/trees.jpeg');
  muug = loadImage('image/mug.jpeg');


  slide = loadSound("sound/slide.mp3");
}

class Photograph {
  constructor(pos, type, media, name) {
    this.type = type;
    this.media = media; 
    this.name = name;
    this.size = [200, 300]; 
    this.pos = pos; 
    this.expand = true;
    this.old_size = this.size;
    this.old_pos = this.pos;
  }

  draw() {
    fill(0);
    rect(this.pos[0]-5, this.pos[1]-5, this.size[0]+10, this.size[1]+10);
    image(this.media, this.pos[0], this.pos[1], this.size[0], this.size[1]);

    if(this.expand == false){
      textSize(81)
      text(this.name+' ('+this.type+')',width/15,(height/10))
    }
  }

  onClicked() {
    if (mouseX > this.pos[0] && mouseX < this.pos[0] + this.size[0] && mouseY > this.pos[1] && mouseY < this.pos[1] + this.size[1]){
      this.expand = !this.expand
      slide.play()

      if(this.expand){
        this.size = this.old_size; 
        this.pos = this.old_pos;
      }else{
        this.size = [400, 600];
        this.pos = [
          width / 2 - this.size[0] / 2,
          height / 2 - this.size[1] / 2,
      ];
      }
    }
  }
}

let pancakes;

function setup() {
  createCanvas(1280, 960);

  dog = new Photograph([800, 100], "photo", doggy, "Dog");
  pancakes = new Photograph([500, 100], "photo", pancake, "Pancakes");
  trees = new Photograph([300, 500], "photo", treees, "Trees");
  mug = new Photograph([700, 500], "photo", muug, "Skeleton Mug");
}

function draw() {
  image(desk, 0, 0);
  pancakes.draw();
  dog.draw();
  trees.draw();
  mug.draw();
}

function mouseClicked() {
  pancakes.onClicked();
  dog.onClicked();
  trees.onClicked();
  mug.onClicked();
}
