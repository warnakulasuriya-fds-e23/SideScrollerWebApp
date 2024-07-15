export class PlayerMovementHandler {
  constructor(player) {
    this.playerReref = player;
    this.gameReref = player.gameReref;
    this.keySettings = this.gameReref.keyboardConfig.keySettings;
    this.xVelocity = 0;
    this.max_xVelocity = 10;
    this.yVelocity = 0;
    this.max_yVelocity = 10;
    this.g = 1; //graviational acceleration
  }

  boundaryHandling() {
    //stop player from going out of bounds from left side of screen
    if (this.playerReref.posX < 0) {
      this.playerReref.posX = 0;
    }

    //stops player from going out of bounds from right side of screen
    if (
      this.playerReref.posX >
      this.gameReref.width - this.playerReref.spriteWidth
    ) {
      this.playerReref.posX =
        this.gameReref.width - this.playerReref.spriteWidth;
    }

    //stops player from going below the ground margin
    if (
      this.playerReref.posY >
      this.gameReref.height -
        this.gameReref.groundMargin -
        this.playerReref.spriteHeight
    ) {
      this.playerReref.posY =
        this.gameReref.height -
        this.gameReref.groundMargin -
        this.playerReref.spriteHeight;
    }
  }

  setPlayerSpeedMode(mode) {
    if (mode == "STOPPED") {
      this.max_xVelocity = 0;
    } else if (mode == "SLOW") {
      this.max_xVelocity = 5;
    } else if (mode == "NORMAL") {
      this.max_xVelocity = 10;
    } else if (mode == "FAST") {
      this.max_xVelocity = 20;
    }
  }
  midAirMovement() {
    this.playerReref.posY = this.gameReref.height / 2;
  }
  horizontalMotion(pressedDownKeys) {
    if (this.playerReref.playerStateHandler.currentState.state == "ROLLING") {
      this.setPlayerSpeedMode("FAST");
    } else if (
      this.playerReref.playerStateHandler.currentState.state == "GOTHIT"
    ) {
      this.setPlayerSpeedMode("STOPPED");
    } else {
      this.setPlayerSpeedMode("NORMAL");
    }

    if (
      pressedDownKeys.includes(this.keySettings["FORWARD"]) &&
      !pressedDownKeys.includes(this.keySettings["CROUCH"])
    ) {
      this.xVelocity = this.max_xVelocity;
    } else if (
      pressedDownKeys.includes(this.keySettings["BACKWARD"]) &&
      !pressedDownKeys.includes(this.keySettings["CROUCH"])
    ) {
      this.xVelocity = -this.max_xVelocity;
    } else {
      this.xVelocity = 0;
    }
    this.playerReref.posX += this.xVelocity; //motion along x axis
    this.boundaryHandling();
  }

  interuptJump() {
    /*will be executed if the player releases the jump button
    intended effect of interrupting the jump midway, is to make it so that 
    the longer the user presses Jump the higher the character will jump*/
    if (this.playerReref.playerStateHandler.currentState.state == "JUMPING") {
      this.yVelocity = 0;
    }
  }
  //PLEASE NOTE!! : here we are dealing with an inverted y-axis
  verticalMotion(pressedDownKeys) {
    if (
      this.playerReref.playerStateHandler.currentState.state != "HYPERSPEED"
    ) {
      if (this.playerReref.playerStateHandler.currentState.state == "DIVING") {
        this.yVelocity = 40;
      } else if (
        pressedDownKeys.includes(this.keySettings["JUMP"]) &&
        this.playerReref.onGround() &&
        !pressedDownKeys.includes(this.keySettings["CROUCH"])
      ) {
        this.yVelocity = -28;
      }

      this.playerReref.posY += this.yVelocity; //motion along y axis

      if (!this.playerReref.onGround()) {
        this.yVelocity += this.g; //the is deceleration taking place (the g is added and not subtracted because y axis is inverted)
      } else this.yVelocity = 0; //final velocity (stops player from falling through the floor)

      this.boundaryHandling();
    } else {
      this.midAirMovement();
    }
  }

  update(pressedDownKeys) {
    this.horizontalMotion(pressedDownKeys);
    this.verticalMotion(pressedDownKeys);
  }

  PropLoader(GameStateData) {
    this.keySettings = GameStateData.player.playerMovementHandler.keySettings;
    this.xVelocity = GameStateData.player.playerMovementHandler.xVelocity;
    this.max_xVelocity =
      GameStateData.player.playerMovementHandler.max_xVelocity;
    this.yVelocity = GameStateData.player.playerMovementHandler.yVelocity;
    this.max_yVelocity =
      GameStateData.player.playerMovementHandler.max_yVelocity;
    this.g = GameStateData.player.playerMovementHandler.g;
  }
}
