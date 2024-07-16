import { PickUpParticleHandler } from "./PickUpParticleHandler.js";
import { stateNums } from "./playerStates.js";
class PickUp {
  constructor(game, name) {
    this.name = name;
    this.gameReref = game;
    this.markedForDeletion = false;
  }
  update() {
    if (this.posX < 0) {
      this.markedForDeletion = true;
    }
  }
}

export class HealthPickUp extends PickUp {
  constructor(game) {
    super(game, "HealthPickUp");
    this.pickUpImage = document.getElementById("HealthPickupImage");
    this.spriteWidth = 524;
    this.spriteHeight = 525;
    this.spawnX = this.gameReref.width;
    this.spawnY = this.gameReref.height - this.gameReref.groundMargin - 100;
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.xVelocity = -this.gameReref.maxSpeed * this.gameReref.speedFraction;
    this.sizeModifier = 0.1;
    this.PickUpParticleHandler = new PickUpParticleHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.angle = 0;
    this.varyAngle = Math.random() * 0.1 + 0.1;
  }
  UseOnPlayer() {
    this.gameReref.player.playerHealthHandler.Heal(30);
  }
  update(deltaTime) {
    super.update();
    this.angle += this.varyAngle;
    this.xVelocity = -this.gameReref.maxSpeed * this.gameReref.speedFraction;
    this.posX += this.xVelocity;
    this.posY += Math.sin(this.angle);
    this.PickUpParticleHandler.update(deltaTime);
  }
  draw(context) {
    context.drawImage(
      this.pickUpImage,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.posX,
      this.posY,
      this.spriteWidth * this.sizeModifier,
      this.spriteHeight * this.sizeModifier
    );
    this.PickUpParticleHandler.draw(context);
  }
}

export class SpeedBoostPickUp extends PickUp {
  constructor(game) {
    super(game, "SpeedBoostPickUp");
    this.pickUpImage = document.getElementById("SpeedBoostPickUpImage");
    this.spriteWidth = 951;
    this.spriteHeight = 520;
    this.spawnX = this.gameReref.width;
    this.spawnY = this.gameReref.height - this.gameReref.groundMargin - 100;
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.xVelocity = -this.gameReref.maxSpeed * this.gameReref.speedFraction;
    this.sizeModifier = 0.1;
    this.PickUpParticleHandler = new PickUpParticleHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.angle = 0;
    this.varyAngle = Math.random() * 0.1 + 0.1;
  }
  UseOnPlayer() {
    this.gameReref.player.playerStateHandler.setState(stateNums["HYPERSPEED"]);
  }
  update(deltaTime) {
    super.update();
    this.angle += this.varyAngle;
    this.xVelocity = -this.gameReref.maxSpeed * this.gameReref.speedFraction;
    this.posX += this.xVelocity;
    this.posY += Math.sin(this.angle);
    this.PickUpParticleHandler.update(deltaTime);
  }
  draw(context) {
    context.drawImage(
      this.pickUpImage,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.posX,
      this.posY,
      this.spriteWidth * this.sizeModifier,
      this.spriteHeight * this.sizeModifier
    );
    this.PickUpParticleHandler.draw(context);
  }
}
