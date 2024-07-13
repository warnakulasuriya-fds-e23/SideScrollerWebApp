import { stateNums } from "./playerStates.js";
import {
  Sitting,
  Running,
  Jumping,
  Falling,
  Idling,
  Rolling,
  Diving,
  GotHit,
  HyperSpeed,
} from "./playerStates.js";

export class PlayerStateHandler {
  constructor(player) {
    this.playerReref = player;
    this.states = [
      new Sitting(player), // [Checked for circular references] [Checked for places that use .game and .player]
      new Running(player), // [Checked for circular references] [Checked for places that use .game and .player]
      new Jumping(player), // [Checked for circular references] [Checked for places that use .game and .player]
      new Falling(player), // [Checked for circular references] [Checked for places that use .game and .player]
      new Idling(player), // [Checked for circular references] [Checked for places that use .game and .player]
      new Rolling(player), // [Checked for circular references] [Checked for places that use .game and .player]
      new Diving(player), // [Checked for circular references] [Checked for places that use .game and .player]
      new GotHit(player), // [Checked for circular references] [Checked for places that use .game and .player]
      new HyperSpeed(player), // [Checked for circular references] [Checked for places that use .game and .player]
    ];
    this.stateNums = stateNums;
    this.previousState = this.states[4];
    this.currentState = this.states[0];
    this.currentState.activate();
    this.deltaTime = 0;
  }
  setState(stateNum) {
    this.previousState = this.currentState;
    this.currentState = this.states[stateNum];
    this.currentState.activate();
  }

  update(pressedDownKeys, deltaTime) {
    this.deltaTime = deltaTime;
    this.currentState.update(pressedDownKeys, this.playerReref.keySettings);
  }
}
