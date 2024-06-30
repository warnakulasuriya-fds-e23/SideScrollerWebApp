import { useEffect } from "react";
import { GameSettingsBox } from "../components/GameSettingsBox";
import { useLoadUpGameSettings } from "../hooks/useLoadUpGameSetting";
import { useGameSettingsContext } from "../hooks/useGameSettingsContext";

export const Home = () => {
  const { gameSettings } = useGameSettingsContext();
  const { LoadUpGameSettings } = useLoadUpGameSettings();

  useEffect(() => {
    const loadingfunction = async () => {
      await LoadUpGameSettings();
    };
    loadingfunction();
  }, []);
  return (
    <>
      <div>HOME</div>
      {gameSettings && <GameSettingsBox />}
    </>
  );
};
