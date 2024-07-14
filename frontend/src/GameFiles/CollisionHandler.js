import { CollisionAnimationHandler } from "./CollisionAnimationHandler.js";

export class CollisionHandler {
  constructor(game) {
    this.gameReref = game;
    this.playerReref = game.player;
    this.collisionAnimationHandler = new CollisionAnimationHandler(game); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
  }
  increaseScoreAccordingToEnemy(enemy) {
    if (enemy.name == "Fly") {
      this.gameReref.score += 1;
      this.gameReref.UIHandler.addHitPopUp(enemy);
    } else if (enemy.name == "Plant") {
      this.gameReref.score += 2;
      this.gameReref.UIHandler.addHitPopUp(enemy);
    } else if (enemy.name == "Spider_Big") {
      this.gameReref.score += 3;
      this.gameReref.UIHandler.addHitPopUp(enemy);
    }
  }
  UsePicKUp(pickUp) {
    if (pickUp.name == "HealthPickUp") {
      pickUp.UseOnPlayer();
      this.gameReref.UIHandler.addHealthUpPopUp(pickUp);
    } else if (pickUp.name == "SpeedBoostPickUp") {
      pickUp.UseOnPlayer();
    }
  }
  playerCollisionWithEnemyDetection() {
    this.gameReref.enemyHandler.currentlyActiveEnemies.forEach((enemy) => {
      if (
        enemy.posX < this.playerReref.posX + this.playerReref.spriteWidth &&
        enemy.posX > this.playerReref.posX &&
        enemy.posY < this.playerReref.posY + this.playerReref.spriteHeight &&
        enemy.posY > this.playerReref.posY
      ) {
        enemy.markedForDeletion = true;
        this.collisionAnimationHandler.addExplosionCollision(enemy);
        if (
          this.playerReref.playerStateHandler.currentState.state == "ROLLING" ||
          this.playerReref.playerStateHandler.currentState.state == "DIVING" ||
          this.playerReref.playerStateHandler.currentState.state == "HYPERSPEED"
        ) {
          this.increaseScoreAccordingToEnemy(enemy);
        } else {
          this.playerReref.playerHealthHandler.playerHealth -= 5;
          let indexOfGotHit =
            this.playerReref.playerStateHandler.stateNums["GOTHIT"];
          this.playerReref.playerStateHandler.setState(indexOfGotHit);
        }
      }
    });
  }
  attackParticleCollisionWithEnemyDetection() {
    this.gameReref.enemyHandler.currentlyActiveEnemies.forEach((enemy) => {
      this.playerReref.playerParticleHandler.currentlyActiveParticles.forEach(
        (particle) => {
          if (
            enemy.posX < particle.posX + particle.size &&
            enemy.posX > particle.posX &&
            enemy.posY < particle.posY + particle.size &&
            enemy.posY > particle.posY
          ) {
            enemy.markedForDeletion = true;
            this.collisionAnimationHandler.addExplosionCollision(enemy);
            this.increaseScoreAccordingToEnemy(enemy);
          }
        }
      );
    });
  }
  playerCollisionWithPickUpDetection() {
    this.gameReref.PickUpHandler.currentlyActivePickUps.forEach((pickUp) => {
      if (
        pickUp.posX < this.playerReref.posX + this.playerReref.spriteWidth &&
        pickUp.posX > this.playerReref.posX &&
        pickUp.posY < this.playerReref.posY + this.playerReref.spriteHeight &&
        pickUp.posY > this.playerReref.posY
      ) {
        this.UsePicKUp(pickUp);
        pickUp.markedForDeletion = true;
      }
    });
  }
  collisionDetection() {
    this.playerCollisionWithEnemyDetection();
    this.attackParticleCollisionWithEnemyDetection();
    this.playerCollisionWithPickUpDetection();
  }

  update(deltaTime) {
    this.collisionDetection();
    this.collisionAnimationHandler.update(deltaTime);
  }
  draw(context) {
    this.collisionAnimationHandler.draw(context);
  }
}
