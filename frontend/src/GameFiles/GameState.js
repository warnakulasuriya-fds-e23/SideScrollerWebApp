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
    this.keyboardConfig = new KeyBoardConfiguration();
    this.paused = false;
    this.exitGameLoop = false;
    this.width = width;
    this.height = height;
    this.score = 0;
    this.gameTime = 0;
    this.groundMargin = 80;
    this.speedFraction = 0;
    this.maxSpeed = 5;
    this.debugMode = false;
    this.background = new Background(this);
    this.player = new Player(this);
    this.input = new InputHandler(this);
    this.enemyHandler = new EnemyHandler(this);
    this.UIHandler = new UIHandler(this);
    this.collisionHandler = new CollisionHandler(this);
    this.PickUpHandler = new PickUpHandler(this);
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
  Pause() {
    this.paused = !this.paused;
    if (this.paused) {
      this.UIHandler.pauseScreen();
    }
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
}
