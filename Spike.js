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
        image(sImg, this.x, this.y, this.r, this.r);
        // fill(255,50);
        // rect(this.x + ((this.r * 1)/4), this.y, (this.r * 2)/4, this.r);
        // rect(this.x, this.y, (this.r * 2)/4, this.r);

    }
}