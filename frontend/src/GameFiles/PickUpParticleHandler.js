import { HealthStar, SpeedBoostStar } from "./PickUpParticles.js";

export class PickUpParticleHandler {
  constructor(pickUp) {
    this.pickUpReref = pickUp;
    this.currentlyActivePickUpParticles = [];
    this.pickUpParticleTimer = 0;
    this.pickUpParticleInterval = 200;
  }
  addPickUpParticle() {
    if (this.pickUpReref.name == "HealthPickUp") {
      this.currentlyActivePickUpParticles.push(
        new HealthStar(this.pickUpReref) // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
      );
    } else if (this.pickUpReref.name == "SpeedBoostPickUp") {
      this.currentlyActivePickUpParticles.push(
        new SpeedBoostStar(this.pickUpReref) // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
      );
    }
  }
  update(deltaTime) {
    if (this.pickUpParticleTimer > this.pickUpParticleInterval) {
      this.pickUpParticleTimer = 0;
      this.addPickUpParticle();
      this.addPickUpParticle();
    } else {
      this.pickUpParticleTimer += deltaTime;
    }
    this.currentlyActivePickUpParticles.forEach((pickUpParticle, index) => {
      pickUpParticle.update();
      if (pickUpParticle.markedForDeletion == true) {
        this.currentlyActivePickUpParticles.splice(index, 1);
      }
    });
  }
  draw(context) {
    this.currentlyActivePickUpParticles.forEach((pickUpParticle) => {
      pickUpParticle.draw(context);
    });
  }
}
