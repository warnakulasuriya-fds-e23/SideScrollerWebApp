import React, { useState } from "react";
import { Drawer, Button, Tooltip } from "flowbite-react";
import { useGameSettingsContext } from "../hooks";
import { GameSettingsBox } from "./GameSettingsBox";
import { HiOutlineCog } from "react-icons/hi";
import { GiSave, GiLoad, GiCycle } from "react-icons/gi";
export const RightCabinet = () => {
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
              color="blue"
              onClick={() => {
                setGameSettingsOpen(!gameSettingsOpen);
              }}
            >
              <HiOutlineCog className="size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Save Game">
            <Button color="blue">
              <GiSave className="size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Load Game">
            <Button color="blue">
              <GiLoad className="size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Restart Game">
            <Button color="blue">
              <GiCycle className="size-6 " />
            </Button>
          </Tooltip>
        </div>
      </div>

      <Drawer
        open={gameSettingsOpen}
        onClose={handleGameSettingsClose}
        position="right"
      >
        <Drawer.Header title="Game Settings" titleIcon={HiOutlineCog} />
        <Drawer.Items>{gameSettings && <GameSettingsBox />}</Drawer.Items>
      </Drawer>
    </>
  );
};
