//CHECK THE DRAW FUNCTIONS
class Enemy {
  constructor(game) {
    this.game = game;
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.markedForDeletion = false;
  }
  update(deltaTime) {
    //movement (the properties utilized here will be accessed from the child class in which the update method is called)
    this.posX += this.xVelocity - this.game.maxSpeed * this.game.speedFraction;
    this.posY += this.yVelocity;

    //sprite animation
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.totalspriteFrames - 1) this.frameX++;
      else this.frameX = 0;
    } else this.frameTimer += deltaTime;

    //check if enemy has gone off screen
    if (this.posX < 0 - this.spriteWidth) {
      this.markedForDeletion = true;
    }
    if (this.posY < 0 - this.spriteHeight) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    context.save();
    if (this.game.debugMode) {
      context.strokeStyle = "red";
      context.strokeRect(
        this.posX,
        this.posY,
        this.spriteWidth,
        this.spriteHeight
      );
    }
    //the properties utilized here will be accessed from the child class in which the update method is called
    context.drawImage(
      this.enemyImage,
      this.frameX * this.spriteWidth,
      0, //cuz enemies have only one row in their sprite sheet
      this.spriteWidth,
      this.spriteHeight,
      this.posX,
      this.posY,
      this.spriteWidth,
      this.spriteHeight
    );
    context.restore();
  }
}

class FlyingEnemy extends Enemy {
  constructor(game) {
    super(game);
    this.spawnX = game.width; //x position of spawn point (starting point) of enemy
    this.spawnY = Math.random() * game.height * 0.5; //y position of spaw "" "" "" ""
  }
}

export class Fly extends FlyingEnemy {
  constructor(game) {
    super(game);
    this.name = "Fly";
    this.spriteWidth = 60;
    this.spriteHeight = 44;
    this.posX = this.spawnX; //starts at spawn point
    this.posY = this.spawnY; //starts at "" ""
    this.xVelocity = -1 + Math.random() * -3;
    this.yVelocity = 0;
    this.totalspriteFrames = 6;
    this.enemyImage = document.getElementById("enemy_fly");
    this.angle = 0;
    this.varyAngle = Math.random() * 0.1 + 0.1;
  }
  update(deltaTime) {
    super.update(deltaTime);
    this.angle += this.varyAngle;
    this.posY += Math.sin(this.angle);
  }
}

class GroundEnemy extends Enemy {
  constructor(game) {
    super(game);
    this.spawnX = game.width;
  }
}

export class Plant extends GroundEnemy {
  constructor(game) {
    super(game);
    this.name = "Plant";
    this.spriteWidth = 60;
    this.spriteHeight = 87;
    this.enemyImage = document.getElementById("enemy_plant");
    this.spawnY = game.height - game.groundMargin - this.spriteHeight;
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.totalspriteFrames = 2;
    this.xVelocity = 0;
    this.yVelocity = 0;
  }
}

class ClimbingEnemy extends Enemy {
  constructor(game) {
    super(game);
    this.spawnX = game.width;
    this.spawnY = Math.random() * game.height * 0.5;
    this.xVelocity = 0;
    this.yVelocity = Math.random() > 0.5 ? 1 : -1;
  }
}

export class Spider_Big extends ClimbingEnemy {
  constructor(game) {
    super(game);
    this.name = "Spider_Big";
    this.spriteWidth = 120;
    this.spriteHeight = 144;
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.enemyImage = document.getElementById("enemy_spider_big");
    this.totalspriteFrames = 6;
  }
  update(deltaTime) {
    super.update(deltaTime);
    if (
      this.posY >
      this.game.height - this.game.groundMargin - this.spriteHeight
    ) {
      this.yVelocity = -1;
    }
  }

  draw(context) {
    super.draw(context);
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(this.posX + this.spriteWidth / 2, 0);
    context.lineTo(this.posX + this.spriteWidth / 2, this.posY + 44);
    context.stroke();
  }
}
