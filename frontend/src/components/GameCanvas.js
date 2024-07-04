import React, { useState } from "react";
import { RunGame } from "../GameFiles/index";
import { Button } from "flowbite-react";
export const GameCanvas = () => {
  const [isGameRunning, setIsGameRunnig] = useState(false);
  const playgame = () => {
    setIsGameRunnig(!isGameRunning);
    RunGame();
  };
  return (
    <div>
      {/* {isGameRunning ? (
        <canvas id="gameCanvas"></canvas>
      ) : (
        <Button onClick={playgame}>Play Game</Button>
      )} */}
      <canvas id="gameCanvas"></canvas>
      <Button onClick={playgame}>Play Game</Button>
    </div>
  );
};
