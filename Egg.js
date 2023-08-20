class Egg {

    constructor() {
        this.r = 30;
        this.x = width;
        this.y = height - this.r - 50;
    }

    move() {
        this.x -= 3;
    }
    
    show() {
        image(eImg, this.x, this.y, this.r, this.r);
    }
}