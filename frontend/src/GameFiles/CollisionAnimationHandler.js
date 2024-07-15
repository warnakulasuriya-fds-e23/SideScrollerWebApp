import { ExplosionCollision } from "./CollisionAnimations.js";

export class CollisionAnimationHandler {
  constructor(game) {
    this.gameReref = game;
    this.currentlyActiveCollisionAnimations = [];
  }

  addExplosionCollision(enemy) {
    this.currentlyActiveCollisionAnimations.unshift(
      new ExplosionCollision(enemy) // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    );
  }
  update(deltaTime) {
    if (this.currentlyActiveCollisionAnimations.length != 0) {
      this.currentlyActiveCollisionAnimations.forEach(
        (collisionAnimation, index) => {
          collisionAnimation.update(deltaTime);
          if (collisionAnimation.markedForDeletion == true) {
            this.currentlyActiveCollisionAnimations.splice(index, 1);
          }
        }
      );
    }
  }
  draw(context) {
    if (this.currentlyActiveCollisionAnimations.length != 0) {
      this.currentlyActiveCollisionAnimations.forEach((collisionAnimation) => {
        collisionAnimation.draw(context);
      });
    }
  }
  PropLoader(GameStateData) {
    this.currentlyActiveCollisionAnimations = [];
  }
}
