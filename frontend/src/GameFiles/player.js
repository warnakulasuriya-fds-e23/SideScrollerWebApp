import { PlayerMovementHandler } from "./PlayerMovementHandler.js";
import { PlayerAnimationHandler } from "./playerAnimationHandler.js";
import { PlayerStateHandler } from "./PlayerStateHandler.js";
import { PlayerParticleHandler } from "./PlayerParticleHandler.js";
import { PlayerHealthHandler } from "./PlayerHealthHandler.js";
import { PlayerEnergyHandler } from "./PlayerEnergyHandler.js";
export class Player {
  constructor(game) {
    this.gameReref = game;
    this.keySettings = this.gameReref.keyboardConfig.keySettings;
    this.spriteWidth = 100;
    this.spriteHeight = 91.3;
    this.posX = 0;
    this.posY =
      this.gameReref.height - this.spriteHeight - this.gameReref.groundMargin;
    this.spriteSheet = document.getElementById("playerSprites");
    this.playerHealth = 100;
    this.playerHealthHandler = new PlayerHealthHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.playerEnergyHandler = new PlayerEnergyHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.playerMovementHandler = new PlayerMovementHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.playerAnimationHandler = new PlayerAnimationHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.playerStateHandler = new PlayerStateHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.playerParticleHandler = new PlayerParticleHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
  }
  update(pressedDownKeys, deltaTime) {
    this.playerStateHandler.update(pressedDownKeys, deltaTime);
    this.playerMovementHandler.update(pressedDownKeys);
    this.playerAnimationHandler.update(deltaTime);
    this.playerEnergyHandler.update();
    this.playerHealthHandler.update();
    this.playerParticleHandler.update(deltaTime);
  }

  draw(context) {
    context.save();
    if (this.gameReref.debugMode) {
      context.strokeStyle = "blue";
      context.strokeRect(
        this.posX,
        this.posY,
        this.spriteWidth,
        this.spriteHeight
      );
    }
    context.drawImage(
      this.spriteSheet,
      this.playerAnimationHandler.frameX * this.spriteWidth,
      this.playerAnimationHandler.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.posX,
      this.posY,
      this.spriteWidth,
      this.spriteHeight
    );
    context.restore();

    this.playerParticleHandler.draw(context);
  }

  onGround() {
    //returns true if player is on ground
    //(might look a bit weird but thats cuz we're dealing wiht an inverted y axis)
    return (
      this.posY >=
      this.gameReref.height - this.spriteHeight - this.gameReref.groundMargin
    );
  }
  PropLoader(GameStateData) {
    this.keySettings = GameStateData.player.keySettings;
    this.spriteWidth = GameStateData.player.spriteWidth;
    this.spriteHeight = GameStateData.player.spriteHeight;
    this.posX = GameStateData.player.posX;
    this.posY = GameStateData.player.posY;
    // this.spriteSheet = GameStateData.player.spriteSheet;
    this.playerHealth = GameStateData.player.playerHealth;
    this.playerHealthHandler.PropLoader(GameStateData); // [Completed Prop Loader]
    this.playerEnergyHandler.PropLoader(GameStateData); // [Completed Prop Loader]
    this.playerMovementHandler.PropLoader(GameStateData); // [Completed Prop Loader]
    this.playerAnimationHandler.PropLoader(GameStateData); // [Completed Prop Loader]
    this.playerStateHandler.PropLoader(GameStateData); // [Completed Prop Loader]
    this.playerParticleHandler.PropLoader(GameStateData); // [Completed Prop Loader]
  }
}
