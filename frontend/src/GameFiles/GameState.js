import { KeyBoardConfiguration } from "./KeyboardConfig.js";
import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./Background.js";
import { UIHandler } from "./UIHandler.js";
import { EnemyHandler } from "./EnemyHandler.js";
import { CollisionHandler } from "./CollisionHandler.js";
import { PickUpHandler } from "./PickupHandler.js";

export class GameState {
  constructor(width, height) {
    this.keyboardConfig = new KeyBoardConfiguration(); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.paused = false;
    this.exitGameLoop = false;
    this.stopGame = false;
    this.width = width;
    this.height = height;
    this.score = 0;
    this.gameTime = 0;
    this.groundMargin = 80;
    this.speedFraction = 0;
    this.maxSpeed = 5;
    this.debugMode = false;
    this.background = new Background(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.player = new Player(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.input = new InputHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.enemyHandler = new EnemyHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.UIHandler = new UIHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.collisionHandler = new CollisionHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
    this.PickUpHandler = new PickUpHandler(this); // [Checked for circular references] [Checked for places that use .game and .player] [checked for .enemy] [checked for .pickUp]
  }
  update(deltaTime) {
    this.gameTime += deltaTime;
    this.background.update();
    this.player.update(this.input.keys, deltaTime);
    this.enemyHandler.update(deltaTime);
    this.UIHandler.update();
    this.collisionHandler.update(deltaTime);
    this.PickUpHandler.update(deltaTime);
  }
  draw(context) {
    this.background.draw(context);
    this.player.draw(context);
    this.enemyHandler.draw(context);
    this.UIHandler.draw(context);
    this.collisionHandler.draw(context);
    this.PickUpHandler.draw(context);
  }
  TogglePause() {
    this.paused = !this.paused;
    if (this.paused) {
      this.UIHandler.pauseScreen();
    }
  }
  UpdateGameSettings(newSettings) {
    this.keyboardConfig.setKeyBoardConfiguration(newSettings);
  }
  Restart() {
    this.exitGameLoop = true;
    this.score = 0;
    this.gameTime = 0;
    this.speedFraction = 0;
    this.maxSpeed = 5;
    this.background = new Background(this);
    this.player = new Player(this);
    this.input = new InputHandler(this);
    this.enemyHandler = new EnemyHandler(this);
    this.UIHandler = new UIHandler(this);
    this.collisionHandler = new CollisionHandler(this);
    this.PickUpHandler = new PickUpHandler(this);
    this.exitGameLoop = false;
  }
  Stop() {
    this.stopGame = true;
  }
  ReplacerFunction(key, value) {
    if (key == "this.gameReref") {
      return null;
      /*places where this.gameReref is present
      Background.js (prev Refactored properties: Background.game=>Background.gameReref , Layer.game=>Layer.gameReref)
      player.js (prev Refactored properties: player.game=>player.gameReref)
      PlayerMovementHandler.js (prev Refactored properties: PlayerMovementHandler.game=>PlayerMovementHandler.gameReref, PlayerMovementHandler.player=>PlayerMovementHandler.playerReref)
      PlayerParticles.js (prev Refactored properties: SpeedLine.game=>SpeedLine.gameReref)
      input.js (prev Refactored properties: InputHandler.game=>InputHandler.gameReref)
      EnemyHandler.js (prev Refactored properties: EnemyHandler.game=>EnemyHandler.gameReref, EnemyHandler.player=>EnemyHandler.playerReref )
      enemy.js (prev Refactored properties: Enemy.game=>Enemy.gameReref)
      UIHandler.js (prev Refactored properties: UIHandler.game=>UIHandler.gameReref)
      UI.js (prev Refactored properties: UIComponent.game=>UIComponent.gameReref, UIComponent.player=>UIComponent.playerReref, HitPopup.enemy=>HitPopup.enemyReref, HealthUpPopUp.pickUp=>HealthUpPopUp.pickUpReref)
      CollisionHandler.js (prev Refactored properties: CollisionHandler.game=>CollisionHandler.gameReref, CollisionHandler.player=>CollisionHandler.playerReref)
      CollisionAnimationHandler.js (prev Refactored properties: CollisionAnimationHandler.game=>CollisionAnimationHandler.gameReref)
      CollisionAnimations.js (prev Refactored properties: CollisionAnimation.game=>CollisionAnimation.gameReref, CollisionAnimation.enemy=>CollisionAnimation.enemyReref)
      PickUpHandler.js (prev Refactored properties: PickUpHandler.game=>PickUpHandler.gameReref)
      PickUps.js (prev Refactored properties: PickUp.game=>PickUp.gameReref)
      */
    } else if (key == "this.playerReref") {
      return null;
      /*places where this.playerRered is present
      PlayerHealthHandler.js (prev Refactored properties: PlayerHealthHandler.player=>PlayerHealthHandler.playerReref,)
      PlayerEnergyHandler.js (prev Refactored properties: PlayerEnergyHandler.player=>PlayerEnergyHandler.playerReref,)
      PlayerMovementHandler.js (prev Refactored properties: PlayerMovementHandler.player=>PlayerMovementHandler.playerReref, PlayerMovementHandler.game=>PlayerMovementHandler.gameReref) 
      playerAnimationHandler.js (prev Refactored properties: PlayerAnimationHandler.player=>PlayerAnimationHandler.playerReref) 
      PlayerStateHandler.js (prev Refactored properties: PlayerStateHandler.player=>PlayerStateHandler.playerReref)
      playerStates.js (prev Refactored properties: State.player=>State.playerReref)
      PlayerParticleHandler.js (prev Refactored properties: PlayerParticleHandler.player=>PlayerParticleHandler.playerReref)
      PlayerParticles.js (prev Refactored properties: Particle.player=>Particle.playerReref )
      UI.js (prev Refactored properties: UIComponent.player=>UIComponent.playerReref, UIComponent.game=>UIComponent.gameReref, HitPopup.enemy=>HitPopup.enemyReref, HealthUpPopUp.pickUp=>HealthUpPopUp.pickUpReref)
      EnemyHandler.js (prev Refactored properties: EnemyHandler.player=>EnemyHandler.playerReref , EnemyHandler.game=>EnemyHandler.gameReref )
      CollisionHandler.js (prev Refactored properties: CollisionHandler.player=>CollisionHandler.playerReref , CollisionHandler.game=>CollisionHandler.gameReref)
      */
    } else if (key == "this.enemyReref") {
      return null;
      /*places where this.enemyReref is present
      CollisionAnimations.js (prev Refactored properties: CollisionAnimation.enemy=>CollisionAnimation.enemyReref, CollisionAnimation.game=>CollisionAnimation.gameReref)
      UI.js (prev Refactored properties: HitPopup.enemy=>HitPopup.enemyReref, UIComponent.player=>UIComponent.playerReref, UIComponent.game=>UIComponent.gameReref, HealthUpPopUp.pickUp=>HealthUpPopUp.pickUpReref)
      */
    } else if (key == "this.pickUpReref") {
      return null;
      /*places where this.pickUpReref is present
      PickUpParticleHandler.js (prev Refactored properties: PickUpParticleHandler.pickUp=>PickUpParticleHandler.pickUpReref)
      PickUpParticles.js (prev Refactored properties: pickUpParticle.pickUp=>pickUpParticle.pickUpReref)
      UI.js (prev Refactored properties: HealthUpPopUp.pickUp=>HealthUpPopUp.pickUpReref, HitPopup.enemy=>HitPopup.enemyReref, UIComponent.player=>UIComponent.playerReref, UIComponent.game=>UIComponent.gameReref)  
      */
    }

    /*Properties that might also need to be filtered out
    PlayerMovementHandler.keySettings (cause it uses the PlayerMovementHandler.gameReref property in its initial definition) 
    */

    //NOTE THAT I MUST MAKE THE NECESSARY CHANGES TO THE PLACES THAT WOULD ACCESS .game and .player properties because they are now renamed to .gameReref and .playerReref
    //Inside of functions Its okay to have something.gameReref.player but something.playerReref.game is not okay even inside functions and shoudl be something.playerReref.gameReref

    /*Special Edited places that use .game and or .player (they dont directly use the property)
    playerStates.js (this.playerReref.game...=>this.playerReref.gameReref)
    PlayerParticles.js (this.playerReref.game...=>this.playerReref.gameReref) */
    return value;
  }
}
