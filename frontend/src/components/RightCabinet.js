import React, { useState } from "react";
import { Drawer, Button, Tooltip } from "flowbite-react";
import { useGameSettingsContext } from "../hooks";
// import { GameSettingsBox } from "./GameSettingsBox";
import { HiOutlineCog } from "react-icons/hi";
import { GiSave, GiLoad, GiCycle } from "react-icons/gi";
import { GameSettingsDrawer } from "./cabinetDrawers/GameSettingsDrawer";
export const RightCabinet = (props) => {
  const { gameSettings } = useGameSettingsContext();
  const [gameSettingsOpen, setGameSettingsOpen] = useState(false);

  const handleGameSettingsClose = () => {
    setGameSettingsOpen(false);
  };
  return (
    <>
      <div className="w-fit h-[84vh] bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="py-10 flex flex-col gap-10 content-around">
          <Tooltip placement="left" content="Settings">
            <Button
              className="transform hover:scale-150 hover:-translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={() => {
                setGameSettingsOpen(!gameSettingsOpen);
                props.gameSettingsMethod();
              }}
            >
              <HiOutlineCog className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Save Game">
            <Button
              className="transform hover:scale-150 hover:-translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={props.saveGameMethod}
            >
              <GiSave className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Load Game">
            <Button
              className="transform hover:scale-150 hover:-translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={props.loadGameMethod}
            >
              <GiLoad className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Restart Game">
            <Button
              className="transform hover:scale-150 hover:-translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={props.restartGameMethod}
            >
              <GiCycle className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
        </div>
      </div>

      <GameSettingsDrawer
        open={gameSettingsOpen}
        onClose={handleGameSettingsClose}
        position="right"
      />
    </>
  );
};
