class Dino{
   constructor() {
    this.r = 75;
    this.x = this.r;
    this.y = height - this.r - 50;
    this.vy = 0;
    this.gravity = 1;
   }

   isOnGround() {
      return this.y >= height - this.r - 50
   }
   
   jump() {
      if (this.isOnGround()) {
         this.vy = -20;
      }
   }

   hits(obstacles) {
      return collideRectRect(this.x, this.y, this.r, this.r, obstacles.x + ((obstacles.r * 1)/4), obstacles.y, obstacles.r/2, obstacles.r);
   }  
   
   collects(eggs) {
      return collideRectRect(this.x, this.y, this.r, this.r, eggs.x, eggs.y, eggs.r, eggs.r);
   }

   move() {
      this.y += this.vy;
      this.y =constrain(this.y,0,height - this.r);
      this.vy += this.gravity;

      if (this.isOnGround()) {
         this.vy = 0;
      }
   }

   show() {
         image(dImg,this.x, this.y, this.r, this.r);
         
         // rect(this.x, this.y, this.r, this.r);
   }

   hide() {
      fill(255,50);
      image(dImg,this.x, this.y, this.r, this.r);
   }
}