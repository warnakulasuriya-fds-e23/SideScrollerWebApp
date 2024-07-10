export class KeyBoardConfiguration {
  constructor() {
    this.keySettings = {
      FORWARD: "ArrowRight",
      BACKWARD: "ArrowLeft",
      JUMP: "ArrowUp",
      CROUCH: "ArrowDown",
      ROLL: "r",
      DEBUGMODE: "d",
      PAUSE: "Escape",
    };
  }
  setKeyBoardConfiguration(newSettings) {
    this.keySettings.FORWARD = newSettings.ForwardKey;
    this.keySettings.BACKWARD = newSettings.BackwardKey;
    this.keySettings.JUMP = newSettings.JumpKey;
    this.keySettings.CROUCH = newSettings.CrouchKey;
    this.keySettings.ROLL = newSettings.RollKey;
    this.keySettings.DEBUGMODE = newSettings.DebugKey;
    this.keySettings.PAUSE = newSettings.PauseKey;
  }
}
