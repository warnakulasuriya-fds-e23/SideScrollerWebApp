import { useEffect } from "react";
import { useLoadUpGameSettings, useLoadUpBackground } from "../hooks";
import { GamePlayer } from "../components";
import { Label } from "flowbite-react";

export const Home = () => {
  const { LoadUpGameSettingsFromBackend } = useLoadUpGameSettings();
  const { LoadUpBackgroundFromBackend } = useLoadUpBackground();

  useEffect(() => {
    const loadingfunction = async () => {
      await LoadUpGameSettingsFromBackend();
      await LoadUpBackgroundFromBackend("City1");
    };
    loadingfunction();
  }, []);

  return (
    <>
      <GamePlayer />
    </>
  );
};
