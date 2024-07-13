import {
  HealthComponenet,
  EnergyComponent,
  ScoreComponent,
  TimeComponent,
  HitPopup,
  HealthUpPopUp,
  PauseScreen,
} from "./UIs.js";
export class UIHandler {
  constructor(game) {
    this.gameReref = game;
    this.currentlyActiveUIComponents = [
      new HealthComponenet(game), // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
      new EnergyComponent(game), // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
      new ScoreComponent(game), // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
      new TimeComponent(game), // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    ];
  }
  addHitPopUp(enemy) {
    this.currentlyActiveUIComponents.push(new HitPopup(enemy)); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
  }
  addHealthUpPopUp(pickUp) {
    this.currentlyActiveUIComponents.push(new HealthUpPopUp(pickUp)); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
  }
  update() {
    this.currentlyActiveUIComponents.forEach((UIComp, index) => {
      UIComp.update();
      if (UIComp.markedForDeletion == true) {
        this.currentlyActiveUIComponents.splice(index, 1);
      }
    });
  }
  draw(context) {
    this.currentlyActiveUIComponents.forEach((UIComp) => {
      UIComp.draw(context);
    });
  }
  pauseScreen() {
    let pauseScreen = new PauseScreen(this.gameReref); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    pauseScreen.Actitavte();
  }
}
