import React, { useState } from "react";
import { useGameSettingsContext, useUpdateGameSettings } from "../../hooks";
import {
  Select,
  Kbd,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
} from "flowbite-react";
import { Drawer } from "flowbite-react";
import { HiOutlineCog } from "react-icons/hi";
import { FaCheck, FaXmark } from "react-icons/fa6";

const KeyPressRecorder = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const captureKeyPress = (key) => {
    props.setKeyMethod(key);
    setModalOpen(false);
  };
  return (
    <>
      <Kbd
        className=" rounded-2xl text-lg text-center min-w-32"
        onClick={openModal}
      >
        {props.children}
      </Kbd>
      <Modal
        show={modalOpen}
        onClose={handleModalClose}
        onKeyDown={(e) => {
          captureKeyPress(e.key);
        }}
      >
        <ModalHeader>Key Selection</ModalHeader>
        <ModalBody className="text-center text-2xl">
          - Press Any Key -
        </ModalBody>
      </Modal>
    </>
  );
};

const GameSettingsBox = (props) => {
  const { gameSettings } = useGameSettingsContext();
  const [UserId, setUserId] = useState(gameSettings.UserId);
  const [BackgroundType, setBackgroundType] = useState(
    gameSettings.BackgroundType
  );
  const [CharacterType, setCharacterType] = useState(
    gameSettings.CharacterType
  );
  const [MuteBackgroundMusic, setMuteBackgroundMusic] = useState(
    gameSettings.MuteBackgroundMusic
  );
  const [MuteEffects, setMuteEffects] = useState(gameSettings.MuteEffects);
  const [DebugKey, setDebugKey] = useState(gameSettings.DebugKey);
  const [PauseKey, setPauseKey] = useState(gameSettings.PauseKey);
  const [RollKey, setRollKey] = useState(gameSettings.RollKey);
  const [CrouchKey, setCrouchKey] = useState(gameSettings.CrouchKey);
  const [JumpKey, setJumpKey] = useState(gameSettings.JumpKey);
  const [BackwardKey, setBackwardKey] = useState(gameSettings.BackwardKey);
  const [ForwardKey, setForwardKey] = useState(gameSettings.ForwardKey);
  const { UpdateGameSettings } = useUpdateGameSettings();
  const saveChangedSettings = async () => {
    await UpdateGameSettings({
      UserId,
      BackgroundType,
      CharacterType,
      MuteBackgroundMusic,
      MuteEffects,
      DebugKey,
      PauseKey,
      RollKey,
      CrouchKey,
      JumpKey,
      BackwardKey,
      ForwardKey,
    });
    props.closeDrawer();
  };
  return (
    <>
      <div className="flex flex-col gap-2 w-fit">
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Background Type" />
          </span>
          <Select
            value={BackgroundType}
            onChange={(e) => {
              setBackgroundType(e.target.value);
            }}
          >
            <option>Default</option>
            <option>City</option>
          </Select>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="CharacterType" />
          </span>
          <Select
            value={CharacterType}
            onChange={(e) => {
              setCharacterType(e.target.value);
            }}
          >
            <option>Default</option>
            <option>Red</option>
          </Select>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Mute Background Music" />
          </span>
          <Select
            value={MuteBackgroundMusic}
            onChange={(e) => {
              setMuteBackgroundMusic(e.target.value);
            }}
          >
            <option>{true.toString()}</option>
            <option>{false.toString()}</option>
          </Select>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Mute Effects" />
          </span>
          <Select
            value={MuteEffects}
            onChange={(e) => {
              setMuteEffects(e.target.value);
            }}
          >
            <option>{true.toString()}</option>
            <option>{false.toString()}</option>
          </Select>
        </div>

        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Debug Key" />
          </span>
          <KeyPressRecorder setKeyMethod={setDebugKey}>
            {DebugKey}
          </KeyPressRecorder>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Pause Key" />
          </span>
          <KeyPressRecorder setKeyMethod={setPauseKey}>
            {PauseKey}
          </KeyPressRecorder>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Roll Key" />
          </span>
          <KeyPressRecorder setKeyMethod={setRollKey}>
            {RollKey}
          </KeyPressRecorder>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Crouch Key" />
          </span>
          <KeyPressRecorder setKeyMethod={setCrouchKey}>
            {CrouchKey}
          </KeyPressRecorder>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Jump Key" />
          </span>
          <KeyPressRecorder setKeyMethod={setJumpKey}>
            {JumpKey}
          </KeyPressRecorder>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Backward" />
          </span>
          <KeyPressRecorder setKeyMethod={setBackwardKey}>
            {BackwardKey}
          </KeyPressRecorder>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Forward Key" />
          </span>
          <KeyPressRecorder setKeyMethod={setForwardKey}>
            {ForwardKey}
          </KeyPressRecorder>
        </div>
        <div className="flex gap-5 justify-center">
          <Button gradientMonochrome="success" onClick={saveChangedSettings}>
            <FaCheck />
          </Button>
          <Button gradientMonochrome="failure" onClick={props.closeDrawer}>
            <FaXmark />
          </Button>
        </div>
      </div>
    </>
  );
};

export const GameSettingsDrawer = (props) => {
  const { gameSettings } = useGameSettingsContext();
  const [gameSettingsBoxKey, setGameSettingsBoxKey] = useState(1);
  const handleDrawerClose = () => {
    setGameSettingsBoxKey((gameSettingsBoxKey + 1) % 10); //im changing the key so that the GameSettingsBox Component will re-render when opening and closing the drawer. Im doing this to make sure that the gameSettigns stored in the game settings contenxt is loaded up everytime that the drawer is opened.
    props.onClose();
  };
  return (
    <Drawer
      open={props.open}
      onClose={handleDrawerClose}
      position={props.position}
    >
      <Drawer.Header title="Game Settings" titleIcon={HiOutlineCog} />
      <Drawer.Items>
        {gameSettings && (
          <GameSettingsBox
            key={gameSettingsBoxKey}
            closeDrawer={handleDrawerClose}
          />
        )}
      </Drawer.Items>
    </Drawer>
  );
};
