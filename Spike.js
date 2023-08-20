class Spike {

    constructor() {
        this.r = 60;
        this.x = width;
        this.y = height - this.r - 50;
    }

    move() {
        this.x -= 3;
    }
    
    show() {
        image(sImg, this.x, this.y, this.r, this.r);
    }
}