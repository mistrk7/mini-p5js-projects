

let vib = [
  head=[
  [485,188],
  [520,191],
  [553,211],
  [553,211],
  [570,236],
  [557,269],
  [557,269],
  [507,292],
  [470,289],
  [468,261],
  [468,261],
  [410,249],
  [427,211],
  [456,190],
  [485,188]
  ],
  ears=[
  [490,188],
  [428,104],
  [436,68],
  [471,94],
  [490,188],
  [526,70],
  [571,38],
  [570,91],
  [490,188]
  ],
  body=[
    [475,291],
    [371,299],
    [373,320],
    [475,291],
    [372,310]
  ],
  arms=[
    [374,264],
    [343,258],
    [356,278],
    [374,264],
    [395,284],
    [475,291],
    //bottom arm
    [559,339],
    [548,312],
    [540,287],
    [556,294],
    [548,312]
  ],
  legs=[
    [198,329],
    [201,271],
    [176,281],
    [198,329],
    [287,298],
    [372,310],
    //right leg#
    [288,279],
    [212,337],
    [195,289],
    [218,283],
    [212,337]
  ],
  rightI=[
    //outer
    [538,182],
    [551,193],
    [555,216],
    [548,237],
    [530,244],
    [515,232],
    [511,210],
    [518,189],
    [538,182],
    //triangles
    [538,202],
    [551,193],
    [544,209],
    [555,216],
    [542,220],
    [548,237],
    [535,227],
    [530,244],
    [530,224],
    [515,232],
    [525,216],
    [511,210],
    [526,206],
    [518,189],
    [532,200],
    [538,182],
    //inner
    [538,202],
    [544,209],
    [542,220],
    [535,227],
    [530,224],
    [525,216],
    [526,206],
    [532,200]
  ],
  leftI=[
    //outer
    [435, 186],
    [448, 197],
    [452, 220],
    [445, 241],
    [427, 248],
    [412, 236],
    [408, 214],
    [415, 193],
    [435, 186],
    //triangles
    [435, 206],
    [448, 197],
    [441, 213],
    [452, 220],
    [439, 224],
    [445, 241],
    [432, 231],
    [427, 248],
    [427, 228],
    [412, 236],
    [422, 220],
    [408, 214],
    [423, 210],
    [415, 193],
    [429, 204],
    [435, 186],
    //inner
    [435, 206],
    [441, 213],
    [439, 224],
    [432, 231],
    [427, 228],
    [422, 220],
    [423, 210],
    [429, 204],
    [435, 206]
  ]
];

let part = 0
let pointz = 1
let repeat = 0

function setup() {

  createCanvas(800, 450);
  background(20);

  stroke('white')
  strokeWeight(1)

//  for(let part=0; part<vib.length; part++){
//    for(let pointz=1; pointz<vib[part].length; point++){
//      let curr = vib[part][pointz-1]
//      let prev = vib[part][pointz]
//
//      line(prev[0],prev[1],curr[0],curr[1])
//    };
//  };

// This was the original code for loops, but to make it animate I had to convert it into the draw function.
}

function draw() {
  if (part < vib.length) { 
    if (pointz < vib[part].length) { 
      let fset = random(1,6)
      let curr = vib[part][pointz - 1];
      let prev = vib[part][pointz];
  
      line(prev[0]-fset, prev[1]-fset, curr[0]-fset, curr[1]-fset); 

      pointz++;
    } else {
      part++; 
      pointz = 1; 
    }
  } else if(repeat<2) {
    part=0 //repeat
    repeat++
  } else {
    print('done');
    let c = random(1,800);
    let v = random(1,450);

    strokeWeight(1);
    point(c,v);
    textSize(50);
    text('VIB-RIBBON!', 228, 370);
    // noLoop()
  };
}



