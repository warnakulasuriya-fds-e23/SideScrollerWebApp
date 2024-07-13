export const stateNums = {
  SITTING: 0,
  RUNNING: 1,
  JUMPING: 2,
  FALLING: 3,
  IDLING: 4,
  ROLLING: 5,
  DIVING: 6,
  GOTHIT: 7,
  HYPERSPEED: 8,
};

class State {
  constructor(player, state) {
    this.playerReref = player;
    this.state = state;
  }
}

export class Sitting extends State {
  constructor(player) {
    super(player, "SITTING");
  }
  activate() {
    this.playerReref.playerAnimationHandler.frameY = 5;
    this.playerReref.gameReref.speedFraction = 0;
  }
  update(pressedDownKeys, keySettings) {
    if (
      (pressedDownKeys.includes(keySettings["BACKWARD"]) ||
        pressedDownKeys.includes(keySettings["FORWARD"])) &&
      !pressedDownKeys.includes(keySettings["CROUCH"])
    ) {
      this.playerReref.playerStateHandler.setState(stateNums.RUNNING);
    } else if (
      pressedDownKeys.includes(keySettings["JUMP"]) &&
      !pressedDownKeys.includes(keySettings["CROUCH"])
    ) {
      this.playerReref.playerStateHandler.setState(stateNums.JUMPING);
    } else if (
      pressedDownKeys.includes(keySettings["ROLL"]) &&
      !pressedDownKeys.includes(keySettings["CROUCH"])
    ) {
      this.playerReref.playerStateHandler.setState(stateNums.ROLLING);
    }
  }
}

export class Running extends State {
  constructor(player) {
    super(player, "RUNNING");
  }
  activate() {
    this.playerReref.playerAnimationHandler.frameY = 3;
    this.playerReref.gameReref.speedFraction = 1;
  }
  update(pressedDownKeys, keySettings) {
    if (pressedDownKeys.includes(keySettings["CROUCH"])) {
      this.playerReref.playerStateHandler.setState(stateNums.SITTING);
    } else if (pressedDownKeys.includes(keySettings["JUMP"])) {
      this.playerReref.playerStateHandler.setState(stateNums.JUMPING);
    } else if (pressedDownKeys.includes(keySettings["ROLL"])) {
      this.playerReref.playerStateHandler.setState(stateNums.ROLLING);
    }
  }
}

export class Jumping extends State {
  constructor(player) {
    super(player, "JUMPING");
  }
  activate() {
    this.playerReref.playerAnimationHandler.frameY = 1;
    this.playerReref.gameReref.speedFraction = 1;
  }
  update(pressedDownKeys, keySettings) {
    if (this.playerReref.playerMovementHandler.yVelocity == 0) {
      this.playerReref.playerStateHandler.setState(stateNums.FALLING);
    } else if (pressedDownKeys.includes(keySettings["ROLL"])) {
      this.playerReref.playerStateHandler.setState(stateNums.ROLLING);
    } else if (pressedDownKeys.includes(keySettings["CROUCH"])) {
      this.playerReref.playerStateHandler.setState(stateNums.DIVING);
    }
  }
}

export class Falling extends State {
  constructor(player) {
    super(player, "FALLING");
  }
  activate() {
    this.playerReref.playerAnimationHandler.frameY = 2;
    this.playerReref.gameReref.speedFraction = 1;
  }
  update(pressedDownKeys, keySettings) {
    if (this.playerReref.onGround()) {
      if (pressedDownKeys.includes(keySettings["CROUCH"])) {
        this.playerReref.playerStateHandler.setState(stateNums.SITTING);
      } else {
        this.playerReref.playerStateHandler.setState(stateNums.RUNNING);
      }
    } else if (pressedDownKeys.includes(keySettings["ROLL"])) {
      this.playerReref.playerStateHandler.setState(stateNums.ROLLING);
    } else if (pressedDownKeys.includes(keySettings["CROUCH"])) {
      this.playerReref.playerStateHandler.setState(stateNums.DIVING);
    }
  }
}

// so far idling has not been used yet but im keeping it just in case
export class Idling extends State {
  constructor(player) {
    super(player, "IDLING");
  }
  activate() {
    this.playerReref.playerAnimationHandler.frameY = 0;
    this.playerReref.gameReref.speedFraction = 0;
  }
  update(pressedDownKeys, keySettings) {
    if (
      pressedDownKeys.includes(keySettings["BACKWARD"]) ||
      pressedDownKeys.includes(keySettings["FORWARD"])
    ) {
      this.playerReref.playerStateHandler.setState(stateNums.RUNNING);
    } else if (pressedDownKeys.includes(keySettings["CROUCH"])) {
      this.playerReref.playerStateHandler.setState(stateNums.SITTING);
    } else if (pressedDownKeys.includes(keySettings["JUMP"])) {
      this.playerReref.playerStateHandler.setState(stateNums.JUMPING);
    }
  }
}

export class Rolling extends State {
  constructor(player) {
    super(player, "ROLLING");
  }
  activate() {
    if (this.playerReref.playerEnergyHandler.playerEnergy > 20) {
      this.playerReref.playerAnimationHandler.frameY = 6;
      this.playerReref.gameReref.speedFraction = 1;
    } else {
      if (this.playerReref.onGround()) {
        this.playerReref.playerStateHandler.setState(stateNums.RUNNING);
      } else {
        this.playerReref.playerStateHandler.setState(stateNums.FALLING);
      }
    }
  }
  update(pressedDownKeys, keySettings) {
    if (
      !pressedDownKeys.includes(keySettings["ROLL"]) ||
      this.playerReref.playerEnergyHandler.playerEnergy < 10
    ) {
      if (this.playerReref.onGround()) {
        this.playerReref.playerStateHandler.setState(stateNums.RUNNING);
      } else {
        this.playerReref.playerStateHandler.setState(stateNums.FALLING);
      }
    }
  }
}

export class Diving extends State {
  constructor(player) {
    super(player, "DIVING");
  }
  activate() {
    if (this.playerReref.playerEnergyHandler.playerEnergy > 100) {
      this.playerReref.playerEnergyHandler.singleShotAttack(this.state);
      this.playerReref.playerAnimationHandler.frameY = 6;
      this.playerReref.gameReref.speedFraction = 1;
    } else {
      if (this.playerReref.onGround()) {
        this.playerReref.playerStateHandler.setState(stateNums.RUNNING);
      } else {
        this.playerReref.playerStateHandler.setState(stateNums.FALLING);
      }
    }
  }
  update(pressedDownKeys, keySettings) {
    if (this.playerReref.onGround()) {
      if (!pressedDownKeys.includes(keySettings["ROLL"])) {
        this.playerReref.playerParticleHandler.addSplashParticles();
        this.playerReref.playerStateHandler.setState(stateNums.SITTING);
      } else {
        this.playerReref.playerStateHandler.setState(stateNums.ROLLING);
      }
    }
  }
}

export class GotHit extends State {
  constructor(player) {
    super(player, "GOTHIT");
  }
  activate() {
    this.playerReref.playerAnimationHandler.frameY = 4;
    this.playerReref.gameReref.speedFraction = 0;
  }
  update(pressedDownKeys, keySettings) {
    if (this.playerReref.playerAnimationHandler.frameX >= 10) {
      if (this.playerReref.onGround()) {
        this.playerReref.playerStateHandler.setState(stateNums.RUNNING);
      } else {
        this.playerReref.playerStateHandler.setState(stateNums.FALLING);
      }
    }
  }
}

export class HyperSpeed extends State {
  constructor(player) {
    super(player, "HYPERSPEED");
    this.timer = 0;
    this.timeLimit = 7000;
  }
  activate() {
    this.playerReref.playerAnimationHandler.frameY = 6;
    this.playerReref.gameReref.speedFraction = 10;
  }
  update(pressedDownKeys, keySettings) {
    if (this.timer > this.timeLimit) {
      this.timer = 0;
      this.playerReref.playerStateHandler.setState(stateNums.FALLING);
    } else if (this.playerReref.playerStateHandler.deltaTime != null) {
      this.timer += this.playerReref.playerStateHandler.deltaTime;
    }
  }
}
