import { useEffect } from "react";
import { useLoadUpGameSettings } from "../hooks";
import { GamePlayer } from "../components";

export const Home = () => {
  const { LoadUpGameSettings } = useLoadUpGameSettings();

  useEffect(() => {
    const loadingfunction = async () => {
      await LoadUpGameSettings();
    };
    loadingfunction();
  }, []);

  return <GamePlayer />;
};
