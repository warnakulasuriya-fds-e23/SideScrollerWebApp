import { Button, Drawer, Label } from "flowbite-react";
import React from "react";
import { GiSave } from "react-icons/gi";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
const SaveGameBox = (props) => {
  const saveGame = async (Slot) => {
    await props.saveGameMethod(Slot);
    props.closeDrawer();
  };
  const savetoSlotA = async () => {
    await saveGame("A");
  };
  const savetoSlotB = async () => {
    await saveGame("B");
  };
  const savetoSlotC = async () => {
    await saveGame("C");
  };
  return (
    <>
      <Label>Save Your Game</Label>
      <div className="flex flex-col gap-5 justify-center">
        <Button gradientMonochrome="success" onClick={savetoSlotA}>
          <TfiWrite className="size-6" /> <span>Save to Slot A</span>
        </Button>
        <Button gradientMonochrome="success" onClick={savetoSlotB}>
          <TfiWrite className="size-6" /> Save to Slot B
        </Button>
        <Button gradientMonochrome="success" onClick={savetoSlotC}>
          <TfiWrite className="size-6" /> Save to Slot C
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
