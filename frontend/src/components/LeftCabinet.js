import React, { useState } from "react";
import { Button, Tooltip } from "flowbite-react";
import { HiStop } from "react-icons/hi";
import { GiPlayButton, GiCharacter } from "react-icons/gi";
import { PiCityFill } from "react-icons/pi";
import { CustomizeBackgroundDrawer } from "./cabinetDrawers";
export const LeftCabinet = (props) => {
  const [CustomizeBackgroundOpen, setCustomizeBackgroundOpen] = useState();

  const handleCustomizeBackgroundClose = () => {
    setCustomizeBackgroundOpen(false);
    props.togglePauseGameMethod();
  };
  return (
    <>
      <div className="w-fit h-[84vh] bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="py-10 flex flex-col gap-10 content-around">
          <Tooltip placement="right" content="Customize Character">
            <Button
              className="transform hover:scale-150 hover:translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={props.customizeCharacterMethod}
            >
              <GiCharacter className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="right" content="Customize Background">
            <Button
              className="transform hover:scale-150 hover:translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={() => {
                props.togglePauseGameMethod();
                setCustomizeBackgroundOpen(true);
              }}
            >
              <PiCityFill className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="right" content="Play Game">
            <Button
              className="transform hover:scale-150 hover:translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={props.runGameMethod}
            >
              <GiPlayButton className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
          <Tooltip placement="right" content="Stop Game">
            <Button
              className="transform hover:scale-150 hover:translate-x-5 transition ease-linear duration-300"
              color="blue"
              onClick={props.stopGameMethod}
            >
              <HiStop className="size-3 sm:size-6 " />
            </Button>
          </Tooltip>
        </div>
      </div>
      <CustomizeBackgroundDrawer
        open={CustomizeBackgroundOpen}
        onClose={handleCustomizeBackgroundClose}
        position="left"
        customizeBackgroundMethod={props.customizeBackgroundMethod}
      />
    </>
  );
};
