import React, { useState } from "react";
import { Button, Tooltip } from "flowbite-react";
import { HiOutlineCog } from "react-icons/hi";
import { GiSave, GiLoad, GiCycle } from "react-icons/gi";
import {
  GameSettingsDrawer,
  SaveGameDrawer,
  LoadGameDrawer,
  RestartGameDrawer,
} from "./cabinetDrawers";
export const RightCabinet = (props) => {
  const [gameSettingsOpen, setGameSettingsOpen] = useState(false);
  const [saveGameOpen, setSaveGameOpen] = useState(false);
  const [loadGameOpen, setLoadGameOpen] = useState(false);
  const [restartGameOpen, setRestartGameOpen] = useState(false);
  const handleGameSettingsClose = () => {
    setGameSettingsOpen(false);
    props.togglePauseGameMethod();
  };
  const handleSaveGameClose = () => {
    setSaveGameOpen(false);
    props.togglePauseGameMethod();
  };
  const handleLoadGameClose = () => {
    setLoadGameOpen(false);
    props.togglePauseGameMethod();
  };
  const handleRestartGameClose = () => {
    setRestartGameOpen(false);
    props.togglePauseGameMethod();
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
                props.togglePauseGameMethod();
              }}
            >
              <HiOutlineCog className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Save Game">
            <Button
              className="transform hover:scale-150 hover:-translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={() => {
                setSaveGameOpen(true);
                props.togglePauseGameMethod();
              }}
            >
              <GiSave className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Load Game">
            <Button
              className="transform hover:scale-150 hover:-translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={() => {
                setLoadGameOpen(true);
                props.togglePauseGameMethod();
              }}
            >
              <GiLoad className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="left" content="Restart Game">
            <Button
              className="transform hover:scale-150 hover:-translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={() => {
                setRestartGameOpen(true);
                props.togglePauseGameMethod();
              }}
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
        gameSettingsMethod={props.gameSettingsMethod}
      />
      <SaveGameDrawer
        open={saveGameOpen}
        onClose={handleSaveGameClose}
        position="right"
        saveGameMethod={props.saveGameMethod}
      />
      <LoadGameDrawer
        open={loadGameOpen}
        onClose={handleLoadGameClose}
        position="right"
        LoadGameMethod={props.LoadGameMethod}
      />
      <RestartGameDrawer
        open={restartGameOpen}
        onClose={handleRestartGameClose}
        position="right"
        restartGameMethod={props.restartGameMethod}
      />
    </>
  );
};
