import React, { useEffect, useRef, useState } from "react";
import { LeftCabinet } from "./LeftCabinet";
import { RightCabinet } from "./RightCabinet";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { GameState } from "../GameFiles/GameState.js";
export const GamePlayer = () => {
  const navigate = useNavigate();
  const [isGameRunning, setIsGameRunnig] = useState(false);
  const gameRef = useRef(null);
  useEffect(() => {}, []);

  // Left Cabinet Methods to interact with game state
  const customizeCharacter = () => {};
  const customizeBackground = () => {};
  const runGame = () => {
    if (!isGameRunning) {
      const canvas = document.getElementById("gameCanvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 1000;
      canvas.height = 500;
      console.log(canvas.width);
      console.log(canvas.height);
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
  const stopGame = () => {
    navigate("/*");
  };

  // Right Cabinet Methods to interact with game state
  const gameSettings = () => {};
  const saveGame = () => {};
  const loadGame = () => {};
  const restartGame = () => {};

  const pauseGame = () => {
    if (isGameRunning) {
      gameRef.current.Pause();
    }
  };
  return (
    <div className="flex justify-between ">
      <LeftCabinet
        customizeCharacterMethod={customizeCharacter}
        customizeBackgroundMethod={customizeBackground}
        runGameMethod={runGame}
        stopGameMethod={stopGame}
      />

      <div className="grow flex flex-col h-[84vh] ">
        <div>
          <canvas
            className={`w-[1000px] h-[500px] relative  transform scale-110  mx-auto my-10 ${
              isGameRunning ? "block" : "hidden"
            }`}
            id="gameCanvas"
          ></canvas>
          <Button onClick={pauseGame}>Pause Game</Button>
          <Button onClick={runGame}>Run Game</Button>
          <Button onClick={stopGame}>Stop Game</Button>
        </div>
        <div className=" flex h-2/6  bg-yellow-400 items-center justify-center">
          <p className=" text-7xl text-white">controls</p>
        </div>
      </div>

      <RightCabinet
        gameSettingsMethod={gameSettings}
        saveGameMethod={saveGame}
        loadGameMethod={loadGame}
        restartGame={restartGame}
      />
    </div>
  );
};
