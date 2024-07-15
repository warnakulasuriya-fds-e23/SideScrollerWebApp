import { HealthPickUp, SpeedBoostPickUp } from "./PickUps.js";
export class PickUpHandler {
  constructor(game) {
    this.gameReref = game;
    this.currentlyActivePickUps = [];
    this.healthPickUpTimer = 0;
    this.healthPickUpInterval = 60000 * Math.random();
    this.speedBoostPickUpTimer = 0;
    this.speedBoostPickUpInterval = 120000 * Math.random();
  }
  healthPickUpSpawner(deltaTime) {
    let HealthPercent =
      this.gameReref.player.playerHealthHandler.HealthPercentage;

    if (
      this.healthPickUpTimer > this.healthPickUpInterval &&
      Math.random() > 0.5 &&
      HealthPercent < 75
    ) {
      this.healthPickUpTimer = 0;
      this.healthPickUpInterval = 60000 * Math.random();
      this.currentlyActivePickUps.push(new HealthPickUp(this.gameReref)); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    } else {
      this.healthPickUpTimer += deltaTime;
    }
  }
  speedBoostPickUpSpawner(deltaTime) {
    if (
      this.speedBoostPickUpTimer > this.speedBoostPickUpInterval &&
      this.gameReref.speedFraction > 0 &&
      this.gameReref.player.playerStateHandler.currentState.state !=
        "HYPERSPEED" &&
      Math.random() > 0.5
    ) {
      this.speedBoostPickUpTimer = 0;
      this.speedBoostPickUpInterval = 120000 * Math.random();
      this.currentlyActivePickUps.push(new SpeedBoostPickUp(this.gameReref)); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    } else {
      this.speedBoostPickUpTimer += deltaTime;
    }
  }
  update(deltaTime) {
    this.healthPickUpSpawner(deltaTime);
    this.speedBoostPickUpSpawner(deltaTime);
    this.currentlyActivePickUps.forEach((pickUp, index) => {
      pickUp.update(deltaTime);
      if (pickUp.markedForDeletion == true) {
        this.currentlyActivePickUps.splice(index, 1);
      }
    });
  }
  draw(context) {
    this.currentlyActivePickUps.forEach((pickUp, index) => {
      pickUp.draw(context);
    });
  }
  PropLoader(GameStateData) {
    this.currentlyActivePickUps = [];
    this.healthPickUpTimer = GameStateData.PickUpHandler.healthPickUpTimer;
    this.healthPickUpInterval =
      GameStateData.PickUpHandler.healthPickUpInterval;
    this.speedBoostPickUpTimer =
      GameStateData.PickUpHandler.speedBoostPickUpTimer;
    this.speedBoostPickUpInterval =
      GameStateData.PickUpHandler.speedBoostPickUpInterval;
  }
}
