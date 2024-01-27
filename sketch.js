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
let gameStarted = false;

function preload () {
    dImg = loadImage('Pictures/dino.png')
    sImg = loadImage('Pictures/spike.png')
    eImg = loadImage('Pictures/egg.png')
    bImg = loadImage('Pictures/Background2.jpg')
}

function setup() {
    createCanvas(600,450);
    dino = new Dino();
    fill(0);
    text("Press Enter", 175, 225);
    
}


function keyPressed() {
    if (keyCode == ENTER) {
       gameStarted = true; 
    }
    if (key == ' ') {
        dino.jump(); 
     }
}



function draw() {
    if (gameStarted) {
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
        fill(0);
        textSize(20);
        text("LIVES:", 10, 20);
        fill(0);
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

        if (lives <= 0) {
            textSize(50);
            fill(0);
            text("Game over", 175, 225);
            noLoop();
        }
    }
}