class Dino{
   constructor() {
    this.r = 75;
    this.x = this.r;
    this.y = height - this.r - 50;
    this.vy = 0;
    this.gravity = 0.5;
   }

   isOnGround() {
      return this.y >= height - this.r - 50
   }
   
   jump() {
      if (this.isOnGround()) {
         this.vy = -15;
      }
   }

   hits(obstacles) {
      return collideRectRect(this.x, this.y, this.r, this.r, obstacles.x, obstacles.y, obstacles.r, obstacles.r);
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
         fill(255,50);
         rect(this.x, this.y, this.r, this.r);
   }
}