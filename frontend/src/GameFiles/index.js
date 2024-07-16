import { GameState } from "./GameState";
function RunGame() {
  const canvas = document.getElementById("gameCanvas");
  console.log(document.getElementById("GameCanvas"));
  const ctx = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 500;
  let lastTime = 0; //last time stamp

  const game = new GameState(canvas.width, canvas.height);

  function animate(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (game.paused == false) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      game.update(deltaTime);
      game.draw(ctx);
    }

    requestAnimationFrame(animate); //this function passes the current time stamp to the animate function automatically
  }
  animate(0);
}

export { RunGame };
