let dino;
let dImg;
let sImg;
let eImg;
let bImg;
let lives = 1;
let GraceMode = false;
let GraceCount = 0;
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
    GraceCount++;
    if (GraceCount > 180) {
        GraceMode = false;
    }
    // console.log(GraceMode)
    if (frameCount % 60 == 0) {
        if (random(1) < 0.9){
            obstacles.push(new Spike());
        } else {
            eggs.push(new Egg());
        }
    }
    
    background(bImg);
    textSize(20);
    text("LIVES:", 10, 20);
    textSize(20);
    text(lives, 80, 20);

    if (!GraceMode){
        dino.show();
    }
    
    
    dino.move();

    for (let o of obstacles) {
       o.move();
       o.show();
       if (dino.hits(o)) {
        if (!GraceMode) {
            GraceMode = true
            lives--;
            GraceCount = 0;
        } 
        
        // noLoop();
       }
    }
    
    if (GraceMode) {
        if (frameCount % 60 < 30) {
            dino.hide();
        }
    }

    let idx = 0;
    for (let e of eggs) {
       e.move();
       e.show();
       if (dino.collects(e)) {
        eggs.splice(idx, 1)
        lives++;
        break
       }
       idx++;
    }
}