import { Button, Drawer, Label } from "flowbite-react";
import React from "react";
import { GiSave } from "react-icons/gi";
import { FaCheck, FaXmark } from "react-icons/fa6";
const SaveGameBox = (props) => {
  const saveGame = async () => {
    await props.saveGameMethod();
    props.closeDrawer();
  };
  return (
    <>
      <Label>Save Your Game</Label>
      <div className="flex gap-5 justify-center">
        <Button gradientMonochrome="success" onClick={saveGame}>
          <FaCheck />
        </Button>
        <Button gradientMonochrome="failure" onClick={props.closeDrawer}>
          <FaXmark />
        </Button>
      </div>
    </>
  );
};

export const SaveGameDrawer = (props) => {
  return (
    <Drawer open={props.open} onClose={props.onClose} position={props.position}>
      <Drawer.Header title="Save Game" titleIcon={GiSave} />
      <Drawer.Items>
        <SaveGameBox
          closeDrawer={props.onClose}
          saveGameMethod={props.saveGameMethod}
        />
      </Drawer.Items>
    </Drawer>
  );
};
