import React, { useEffect, useState } from "react";
import { useGameSettingsContext } from "../hooks/useGameSettingsContext";
import { Select, Kbd, Label } from "flowbite-react";
export const GameSettingsBox = () => {
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
            <Label value="Backward" />
          </span>
          <Kbd className=" rounded-2xl text-lg text-center min-w-32">
            {DebugKey}
          </Kbd>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Backward" />
          </span>
          <Kbd className=" rounded-2xl text-lg text-center min-w-32">
            {PauseKey}
          </Kbd>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Backward" />
          </span>
          <Kbd className=" rounded-2xl text-lg text-center min-w-32">
            {RollKey}
          </Kbd>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Backward" />
          </span>
          <Kbd className=" rounded-2xl text-lg text-center min-w-32">
            {CrouchKey}
          </Kbd>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Backward" />
          </span>
          <Kbd className=" rounded-2xl text-lg text-center min-w-32">
            {JumpKey}
          </Kbd>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Backward" />
          </span>
          <Kbd className=" rounded-2xl text-lg text-center min-w-32">
            {BackwardKey}
          </Kbd>
        </div>
        <div className="flex gap-4 items-centergit">
          <span className="w-40">
            <Label value="Backward" />
          </span>
          <Kbd className=" rounded-2xl text-lg text-center min-w-32">
            {ForwardKey}
          </Kbd>
        </div>
      </div>
    </>
  );
};
