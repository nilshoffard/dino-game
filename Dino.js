class Dino{
   constructor() {
    this.r = 100;
    this.x = this.r;
    this.y = height - this.r - 50;
    this.vy = 0;
    this.gravity = 2;
   }

   isOnGround() {
      return this.y == height - this.r - 50
   }
   
   jump() {
      if (this.isOnGround()) {
         this.vy = -25;
      }
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
   }
}