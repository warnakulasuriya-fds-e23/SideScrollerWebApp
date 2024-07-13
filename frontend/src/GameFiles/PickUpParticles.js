class pickUpParticle {
  constructor(pickUp) {
    this.pickUpReref = pickUp;
    this.markedForDeletion = false;
  }
}

export class HealthStar extends pickUpParticle {
  constructor(pickUp) {
    super(pickUp);
    this.pickUpParticleImage = document.getElementById("HealthStarImage");
    this.spriteWidth = 535;
    this.spriteHeight = 535;
    this.spawnX =
      this.pickUpReref.posX -
      20 +
      this.pickUpReref.spriteWidth *
        this.pickUpReref.sizeModifier *
        Math.random();
    this.spawnY =
      this.pickUpReref.posY +
      this.pickUpReref.spriteHeight * this.pickUpReref.sizeModifier;
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.yVelocity = -1;
    this.size = 0.05;
  }
  update() {
    this.posX += this.pickUpReref.xVelocity;
    this.posY += this.yVelocity;
    this.size -= 0.0005;
    if (this.size < 0.001) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    context.save();
    context.drawImage(
      this.pickUpParticleImage,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.posX,
      this.posY,
      this.spriteWidth * this.size,
      this.spriteHeight * this.size
    );
    context.restore();
  }
}

export class SpeedBoostStar extends pickUpParticle {
  constructor(pickUp) {
    super(pickUp);
    this.pickUpParticleImage = document.getElementById("SpeedBoostStarImage");
    this.spriteWidth = 545;
    this.spriteHeight = 545;
    this.spawnX =
      this.pickUpReref.posX -
      20 +
      this.pickUpReref.spriteWidth *
        this.pickUpReref.sizeModifier *
        Math.random();
    this.spawnY =
      this.pickUpReref.posY +
      this.pickUpReref.spriteHeight * this.pickUpReref.sizeModifier;
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.yVelocity = -1;
    this.size = 0.05;
  }
  update() {
    this.posX += this.pickUpReref.xVelocity;
    this.posY += this.yVelocity;
    this.size -= 0.0005;
    if (this.size < 0.001) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    context.save();
    context.drawImage(
      this.pickUpParticleImage,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.posX,
      this.posY,
      this.spriteWidth * this.size,
      this.spriteHeight * this.size
    );
    context.restore();
  }
}
