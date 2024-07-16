export class InputHandler {
  constructor(game) {
    this.gameReref = game;
    this.keySettings = this.gameReref.keyboardConfig.keySettings;
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key == this.keySettings["JUMP"] ||
          e.key == this.keySettings["CROUCH"] ||
          e.key == this.keySettings["BACKWARD"] ||
          e.key == this.keySettings["FORWARD"] ||
          e.key == this.keySettings["ROLL"]) &&
        this.keys.indexOf(e.key) == -1
      ) {
        this.keys.push(e.key);
      } else if (e.key == this.keySettings["DEBUGMODE"]) {
        this.gameReref.debugMode = !this.gameReref.debugMode;
      }

      if (e.key == this.keySettings["PAUSE"]) {
        this.gameReref.paused = !this.gameReref.paused;
        if (this.gameReref.paused) {
          this.gameReref.UIHandler.pauseScreen();
        }
      }
    });
    window.addEventListener("keyup", (e) => {
      if (e.key == this.keySettings["JUMP"]) {
        this.gameReref.player.playerMovementHandler.interuptJump();
      }

      if (
        e.key == this.keySettings["JUMP"] ||
        e.key == this.keySettings["CROUCH"] ||
        e.key == this.keySettings["BACKWARD"] ||
        e.key == this.keySettings["FORWARD"] ||
        e.key == this.keySettings["ROLL"]
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
  PropLoader(GameStateData) {
    this.keySettings = GameStateData.input.keySettings;
    this.keys = [];
  }
}
