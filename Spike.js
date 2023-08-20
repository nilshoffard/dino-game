class Spike {

    constructor() {
        this.r = 80;
        this.x = width;
        this.y = height - this.r - 50;
    }

    move() {
        this.x -= 6;
    }
    
    show() {
        image(sImg, this.x, this.y, (this.r * 2)/3, this.r);
        fill(255,50);
        rect(this.x, this.y, (this.r * 2)/3, this.r);
    }
}