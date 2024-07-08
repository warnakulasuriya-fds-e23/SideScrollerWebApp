import { Button, Drawer, Label } from "flowbite-react";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { GiCycle } from "react-icons/gi";
import React from "react";

const RestartGameBox = (props) => {
  const confirmOption = () => {
    props.onClose();
    props.restartGameMethod();
  };
  return (
    <div className=" flex flex-col gap-10 items-center my-48">
      <Label className="text-3xl text-center">
        Your about to Restart your Game!
      </Label>
      <div className="flex gap-5">
        <Button gradientMonochrome="success" onClick={confirmOption}>
          <FaCheck />
        </Button>
        <Button gradientMonochrome="failure">
          <FaXmark />
        </Button>
      </div>
    </div>
  );
};

export const RestartGameDrawer = (props) => {
  return (
    <Drawer open={props.open} onClose={props.onClose} position={props.position}>
      <Drawer.Header title="Restart Game" titleIcon={GiCycle} />
      <Drawer.Items>
        <RestartGameBox
          onClose={props.onClose}
          restartGameMethod={props.restartGameMethod}
        />
      </Drawer.Items>
    </Drawer>
  );
};
