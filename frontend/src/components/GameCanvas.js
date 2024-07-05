import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { RunGame } from "../GameFiles/index";
import { Button } from "flowbite-react";
import { GameState } from "../GameFiles/GameState.js";
export const GameCanvas = () => {
  const navigate = useNavigate();
  const [isGameRunning, setIsGameRunnig] = useState(false);
  const gameRef = useRef(null);
  useEffect(() => {}, []);

  const pauseGame = () => {
    if (isGameRunning) {
      gameRef.current.Pause();
    }
  };
  const runGame = () => {
    if (!isGameRunning) {
      const canvas = document.getElementById("gameCanvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 1000;
      canvas.height = 500;

      gameRef.current = new GameState(canvas.width, canvas.height);
      let lastTime = 0;
      function animate(timeStamp) {
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        if (gameRef.current.paused == false) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          gameRef.current.update(deltaTime);
          gameRef.current.draw(ctx);
        }

        requestAnimationFrame(animate); //this function passes the current time stamp to the animate function automatically
      }
      animate(0);
      setIsGameRunnig(true);
    }
  };

  const goHome = () => {
    navigate("/*");
  };

  return (
    <div>
      <canvas
        className={isGameRunning ? "block" : "hidden"}
        id="gameCanvas"
      ></canvas>
      <Button onClick={pauseGame}>Pause Game</Button>
      <Button onClick={runGame}>Run Game</Button>
      <Button onClick={goHome}>Stop Game</Button>
    </div>
  );
};
