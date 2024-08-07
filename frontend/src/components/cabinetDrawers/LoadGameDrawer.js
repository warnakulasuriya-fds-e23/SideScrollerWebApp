import React from "react";
import { Button, Drawer, Label } from "flowbite-react";
import { GiLoad } from "react-icons/gi";
import { IoReaderSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
const LoadGameBox = (props) => {
  const LoadGame = async (Slot) => {
    await props.loadGameMethod(Slot);
    props.closeDrawer();
  };
  const loadFromSlotA = async () => {
    await LoadGame("A");
  };
  const loadFromSlotB = async () => {
    await LoadGame("B");
  };
  const loadFromSlotC = async () => {
    await LoadGame("C");
  };
  return (
    <div className="flex flex-col gap-5 justify-center">
      <Button gradientMonochrome="info" onClick={loadFromSlotA}>
        <IoReaderSharp className="size-6" /> <span>Load from Slot A</span>
      </Button>
      <Button gradientMonochrome="info" onClick={loadFromSlotB}>
        <IoReaderSharp className="size-6" /> Load from Slot B
      </Button>
      <Button gradientMonochrome="info" onClick={loadFromSlotC}>
        <IoReaderSharp className="size-6" /> Load from Slot C
      </Button>
      <Button gradientMonochrome="failure" onClick={props.closeDrawer}>
        <FaXmark />
      </Button>
    </div>
  );
};

export const LoadGameDrawer = (props) => {
  return (
    <Drawer open={props.open} onClose={props.onClose} position={props.position}>
      <Drawer.Header title="Load Game" titleIcon={GiLoad} />
      <Drawer.Items>
        <LoadGameBox
          closeDrawer={props.onClose}
          loadGameMethod={props.loadGameMethod}
        />
      </Drawer.Items>
    </Drawer>
  );
};
