let dino;
let dImg;
let sImg;
let eImg;
let bImg;
let obstacles = [];
let eggs = [];

function preload () {
    dImg = loadImage('Pictures/dino.png')
    sImg = loadImage('Pictures/spike.png')
    eImg = loadImage('Pictures/egg.png')
    bImg = loadImage('Pictures/Background2.jpg')
}

function setup() {
    createCanvas(600,450);
    dino = new Dino();
    
}

function keyPressed() {
    if (key == ' ') {
       dino.jump(); 
    }
}

function draw() {
    if (random(1) < 0.01) {
        obstacles.push(new Spike());
    }
    
    if (random(1) < 0.01) {
        obstacles.push(new Egg());
    }
    
    
    
    background(bImg);
    dino.show();
    dino.move();

    for (let o of obstacles) {
       o.move();
       o.show(); 
    }
    
    for (let e of eggs) {
       e.move();
       e.show(); 
    }
}