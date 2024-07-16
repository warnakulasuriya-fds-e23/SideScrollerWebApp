export class PlayerHealthHandler {
  constructor(player) {
    this.playerReref = player;
    this.playerHealth = 100;
    this.maxHealth = 100;
    this.HealthPercentage = (this.playerHealth / this.maxHealth) * 100;
  }
  Heal(amount) {
    if (this.playerHealth + amount <= this.maxHealth) {
      this.playerHealth += amount;
    } else {
      this.playerHealth = this.maxHealth;
    }
  }
  update() {
    this.HealthPercentage = (this.playerHealth / this.maxHealth) * 100;
  }
  PropLoader(GameStateData) {
    this.playerHealth = GameStateData.player.playerHealthHandler.playerHealth;
    this.maxHealth = GameStateData.player.playerHealthHandler.maxHealth;
    this.HealthPercentage =
      GameStateData.player.playerHealthHandler.HealthPercentage;
  }
}
