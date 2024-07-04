class Particle {
  constructor(player) {
    this.player = player;
    this.markedForDeletion = false;
  }
  update() {
    this.posX +=
      this.xVelocity -
      this.player.game.maxSpeed * this.player.game.speedFraction;
    this.posY += this.yVelocity;
    this.size *= 0.95;
    if (this.size < 0.01) this.markedForDeletion = true;
  }
}

export class DustParticle extends Particle {
  constructor(player) {
    super(player);
    this.name = "DustParticle";
    this.particleSpawnX = this.player.posX + this.player.spriteWidth / 2;
    this.particleSpawnY = this.player.posY + this.player.spriteHeight;
    this.posX = this.particleSpawnX;
    this.posY = this.particleSpawnY;
    this.size = 1 * 10 + 10;
    this.xVelocity = Math.random();
    this.yVelocity = -Math.random();
    this.dustColor = "rgb(0,0,0,0.15)";
  }

  draw(context) {
    context.save();
    context.beginPath();
    context.arc(this.posX, this.posY, this.size, 0, Math.PI * 2);
    context.fillStyle = this.dustColor;
    context.fill();
    context.restore();
  }
}

export class FireParticle extends Particle {
  constructor(player) {
    super(player);
    this.name = "FireParticle";
    this.particleImage = document.getElementById("fireSprite");
    this.size = Math.random() * 50 + 50;
    this.particleSpawnX =
      this.player.posX + this.player.spriteWidth * Math.random();
    this.particleSpawnY =
      this.player.posY + this.player.spriteHeight * Math.random();
    this.posX = this.particleSpawnX;
    this.posY = this.particleSpawnY;
    this.xVelocity = 1;
    this.yVelocity = -1;
    this.angle = 0;
  }
  update() {
    super.update();
  }
  draw(context) {
    context.drawImage(
      this.particleImage,
      this.posX,
      this.posY,
      this.size,
      this.size
    );
  }
}

export class SplashParticle extends Particle {
  constructor(player) {
    super(player);
    this.name = "SplashParticle";
    this.particleImage = document.getElementById("fireSprite");
    this.size = Math.random() * 100 + 100;
    this.particleSpawnX =
      this.player.posX + this.player.spriteWidth / 2 - this.size * 0.4;
    this.particleSpawnY =
      this.player.posY + this.player.spriteHeight / 2 - this.size * 0.5;
    this.posX = this.particleSpawnX;
    this.posY = this.particleSpawnY;
    this.xVelocity =
      Math.random() * (Math.random() * 6 + 20 * (Math.random() < 0.5 ? -1 : 1));
    this.yVelocity = -Math.random() * 40;
    this.grav = 0;
  }
  update() {
    super.update();
    this.grav += 2;
    this.posY += this.grav;
  }
  draw(context) {
    context.drawImage(
      this.particleImage,
      this.posX,
      this.posY,
      this.size,
      this.size
    );
  }
}
class SpeedLine extends Particle {
  constructor(player) {
    super(player);
    this.game = this.player.game;
    this.spawnX = this.game.width * Math.random();
    this.spawnY = this.game.height * Math.random();
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.xVleocity = -20;
  }
  update() {
    this.posX += this.xVleocity;
    if (this.posx + 100 < 0) this.markedForDeletion = true;
  }
  draw(context) {
    context.save();
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.beginPath();
    context.moveTo(this.posX, this.posY);
    context.lineTo(this.posX + 100, this.posY);
    context.stroke();
    context.restore();
  }
}

export class VerticalShockWave extends Particle {
  constructor(player) {
    super(player);
    this.name = "VerticalShockWave";
    this.spriteSheet = document.getElementById("fireRingSpriteSheet");
    this.spriteWidth = 500;
    this.spriteHeight = 500;
    this.sizeModifier = 0.005;
    this.particleSpawnX = this.player.posX + 120;
    this.particleSpawnY = this.player.posY + 45;
    this.posX = this.particleSpawnX;
    this.posY = this.particleSpawnY;
    this.xVelocity = -10;
    this.yVelocity = -40;
    this.size = this.spriteHeight * this.sizeModifier; //need this in collision handler to handle enemy collision with shockwave

    //following properties will be used for animating the shockwave
    this.frameX = 0;
    this.totalframes = 3;
    this.fps = 20;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;

    //following will be the speed lines generated by each shockwave
    this.currentlyactiveSpeedLines = [];
    for (let i = 0; i < 5; i++) {
      this.currentlyactiveSpeedLines.unshift(new SpeedLine(this.player));
    }
  }
  forceDeleteSpeedLines() {
    this.currentlyactiveSpeedLines.splice(
      0,
      this.currentlyactiveSpeedLines.length
    );
  }
  speedLineUpdateHandler() {
    this.currentlyactiveSpeedLines.forEach((speedLine, index) => {
      speedLine.update();
      if (speedLine.markedForDeletion == true)
        this.currentlyactiveSpeedLines.splice(index, 1);
    });
  }
  speedLineDrawHandler(context) {
    this.currentlyactiveSpeedLines.forEach((speedLine) => {
      speedLine.draw(context);
    });
  }
  animate() {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.totalframes - 1) {
        this.frameX += 1;
      } else {
        this.frameX = 0;
      }
    } else {
      let deltaTime = this.player.playerParticleHandler.deltaTime;
      this.frameTimer += deltaTime;
    }
  }
  update() {
    this.posX +=
      this.xVelocity -
      this.player.game.maxSpeed * this.player.game.speedFraction;
    this.posY += this.yVelocity;
    this.sizeModifier += 0.14;
    this.size = this.spriteHeight * this.sizeModifier;
    this.animate();
    this.speedLineUpdateHandler();
    if (this.sizeModifier > 1.3) {
      this.markedForDeletion = true;
      this.forceDeleteSpeedLines();
    }
  }
  draw(context) {
    context.save();
    context.drawImage(
      this.spriteSheet,
      this.spriteWidth * this.frameX,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.posX,
      this.posY,
      this.spriteWidth * this.sizeModifier,
      this.spriteHeight * this.sizeModifier
    );
    context.restore();
    this.speedLineDrawHandler(context);
  }
}
