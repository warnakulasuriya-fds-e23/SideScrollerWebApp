class UIComponent {
  constructor(game) {
    this.gameReref = game;
    // this.playerReref = game.player;
    this.verticalGap = 20;
    this.markedForDeletion = false;
  }
}

export class HealthComponenet extends UIComponent {
  constructor(game) {
    super(game);
    this.fontSize = 20;
    this.fontFamily = "Arial";
    this.fontColor = "black";
    this.healthPercent =
      this.gameReref.player.playerHealthHandler.HealthPercentage;
  }
  HealthBarColor() {
    if (this.healthPercent > 75) return "#009900";
    else if (this.healthPercent > 50) return "#ffff00";
    else if (this.healthPercent > 25) return "#ec9513";
    else return "#cc0000";
  }
  update() {
    this.healthPercent =
      this.gameReref.player.playerHealthHandler.HealthPercentage;
  }
  draw(context) {
    context.save();
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.fontColor;
    context.fillText(
      "Health :(" + "                                      " + ")",
      20,
      this.verticalGap
    );
    context.fillStyle = this.HealthBarColor();
    context.fillRect(
      100,
      this.verticalGap * 0 + 8,
      200 * (this.healthPercent / 100),
      10
    );

    context.restore();
  }
  PropLoader(HealthComponentData) {
    this.fontSize = HealthComponentData.fontSize;
    this.fontFamily = HealthComponentData.fontFamily;
    this.fontColor = HealthComponentData.fontColor;
    this.healthPercent = HealthComponentData.healthPercent;
  }
}

export class EnergyComponent extends UIComponent {
  constructor(game) {
    super(game);
    this.fontSize = 20;
    this.fontFamily = "Arial";
    this.fontColor = "black";
    this.energyPercent =
      this.gameReref.player.playerEnergyHandler.energyPercent;
  }
  update() {
    this.energyPercent =
      this.gameReref.player.playerEnergyHandler.energyPercent;
  }
  draw(context) {
    context.save();
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.fontColor;
    context.fillText(
      "Energy:(" + "                                      " + ")",
      20,
      this.verticalGap * 2
    );
    context.fillStyle = "#4106ba";
    context.fillRect(
      100,
      this.verticalGap * 1 + 8,
      200 * (this.energyPercent / 100),
      10
    );
    context.restore();
  }
  PropLoader(EnergyComponentData) {
    this.fontSize = EnergyComponentData.fontSize;
    this.fontFamily = EnergyComponentData.fontFamily;
    this.fontColor = EnergyComponentData.fontColor;
    this.energyPercent = EnergyComponentData.energyPercent;
  }
}

export class ScoreComponent extends UIComponent {
  constructor(game) {
    super(game);
    this.fontSize = 18;
    this.fontFamily = "Arial";
    this.fontColor = "black";
  }
  update() {}
  draw(context) {
    context.save();
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.fontColor;
    context.fillText("Score    :", 20, this.verticalGap * 3);
    context.fillStyle = "#006bb3";
    context.fillText(
      "<" + this.gameReref.score + ">",
      100,
      this.verticalGap * 3
    );
    context.restore();
  }
  PropLoader(ScoreComponentData) {
    this.fontSize = ScoreComponentData.fontSize;
    this.fontFamily = ScoreComponentData.fontFamily;
    this.fontColor = ScoreComponentData.fontColor;
  }
}

export class TimeComponent extends UIComponent {
  constructor(game) {
    super(game);
    this.fontSize = 18;
    this.fontFamily = "Arial";
    this.fontColor = "black";
  }
  timeToDisplay() {
    let totSeconds = this.gameReref.gameTime / 1000;
    let hours = Math.floor(totSeconds / 3600);
    let minutes = Math.floor((totSeconds % 3600) / 60);
    let seconds = Math.floor((totSeconds % 3600) % 60);
    return hours + "h : " + minutes + "m : " + seconds + "s";
  }
  update() {}
  draw(context) {
    context.save();
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.fontColor;
    context.fillText("Time      : ", 20, this.verticalGap * 4);
    context.fillStyle = "#006bb3";
    context.fillText(
      "<" + this.timeToDisplay() + ">",
      100,
      this.verticalGap * 4
    );
    context.restore();
  }
  PropLoader(TimeComponentData) {
    this.fontSize = TimeComponentData.fontSize;
    this.fontFamily = TimeComponentData.fontFamily;
    this.fontColor = TimeComponentData.fontColor;
  }
}

export class HitPopup extends UIComponent {
  constructor(enemy) {
    super(enemy.game);
    this.enemyReref = enemy;
    this.fontSize = 150;
    this.fontFamily = "Arial";
    this.fontColor = "#006bb3";
    this.spawnX = this.enemyReref.posX + this.enemyReref.spriteWidth;
    this.spawnY = this.enemyReref.posY + this.enemyReref.spriteHeight;
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.xVleocity = 0;
    this.yVleocity = -10;
  }
  PopUpValue() {
    if (this.enemyReref.name == "Fly") {
      return "+1";
    } else if (this.enemyReref.name == "Plant") {
      return "+2";
    } else if (this.enemyReref.name == "Spider_Big") {
      return "+3";
    } else return "+NotDefined";
  }
  update() {
    this.fontSize -= 5;
    this.posX += this.xVleocity;
    this.posY += this.yVleocity;
    if (this.fontSize <= 5) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    context.save();
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "center";
    context.fillStyle = this.fontColor;
    context.fillText(this.PopUpValue(), this.posX, this.posY);
    context.restore();
  }
}

export class HealthUpPopUp extends UIComponent {
  constructor(pickUp) {
    super(pickUp.game);
    this.pickUpReref = pickUp;
    this.fontSize = 150;
    this.fontFamily = "Arial";
    this.fontColor = "green";
    this.spawnX =
      this.pickUpReref.posX +
      this.pickUpReref.spriteWidth * this.pickUpReref.sizeModifier;
    this.spawnY =
      this.pickUpReref.posY +
      this.pickUpReref.spriteHeight * this.pickUpReref.sizeModifier;
    this.posX = this.spawnX;
    this.posY = this.spawnY;
    this.xVleocity = 0;
    this.yVleocity = -10;
  }
  PopUpValue() {
    if (this.pickUpReref.name == "HealthPickUp") {
      return "+30";
    } else return "+NotDefined";
  }
  update() {
    this.fontSize -= 5;
    this.posX += this.xVleocity;
    this.posY += this.yVleocity;
    if (this.fontSize <= 5) {
      this.markedForDeletion = true;
    }
  }
  draw(context) {
    context.save();
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "center";
    context.fillStyle = this.fontColor;
    context.fillText(this.PopUpValue(), this.posX, this.posY);
    context.restore();
  }
}

export class PauseScreen extends UIComponent {
  constructor(game) {
    super(game);
    this.fontSize = 100;
    this.fontFamily = "Arial";
    this.fontColor = "red";
  }
  Actitavte() {
    let canvas = document.getElementById("gameCanvas");
    let context = canvas.getContext("2d");
    context.save();
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "center";
    context.fillStyle = this.fontColor;
    context.fillText("-PAUSED-", 500, 300);
    context.restore();
  }
}
