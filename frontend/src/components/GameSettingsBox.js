import React, { useEffect } from "react";
import { useLoadUpGameSettings } from "../hooks/useLoadUpGameSetting";
import { useGameSettingsContext } from "../hooks/useGameSettingsContext";
export const GameSettingsBox = () => {
  const { gameSettings } = useGameSettingsContext();
  const { LoadUpGameSettings } = useLoadUpGameSettings();

  useEffect(() => {
    const loadingfunction = async () => {
      await LoadUpGameSettings();
    };
    loadingfunction();
  }, []);
  const {
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
  } = gameSettings;

  return <div>{UserId}</div>; // CHECK HERE for issue . I put the destructuring of gameSettings after useEffect() it might have solved the problem
};
