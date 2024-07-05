import React from "react";
import { LeftCabinet } from "./LeftCabinet";
import { GameCanvas } from "./GameCanvas";
import { RightCabinet } from "./RightCabinet";

export const GamePlayer = () => {
  return (
    <div className="flex justify-between ">
      <LeftCabinet />

      <div className="grow flex flex-col h-[84vh] ">
        {/* <div className=" flex h-4/6  bg-green-400 items-center justify-center">
        <p className=" text-7xl text-white">Game Canvas</p>
      </div> */}
        <GameCanvas />
        <div className=" flex h-2/6  bg-yellow-400 items-center justify-center">
          <p className=" text-7xl text-white">controls</p>
        </div>
      </div>

      <RightCabinet />
    </div>
  );
};
