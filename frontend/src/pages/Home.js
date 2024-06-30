import { useEffect, useState } from "react";
import { GameSettingsBox } from "../components/GameSettingsBox";
import { useLoadUpGameSettings } from "../hooks/useLoadUpGameSetting";
import { useGameSettingsContext } from "../hooks/useGameSettingsContext";
import { Button, Drawer } from "flowbite-react";

export const Home = () => {
  const { gameSettings } = useGameSettingsContext();
  const { LoadUpGameSettings } = useLoadUpGameSettings();
  const [gameSettingsOpen, setGameSettingsOpen] = useState(false);

  useEffect(() => {
    const loadingfunction = async () => {
      await LoadUpGameSettings();
    };
    loadingfunction();
  }, []);

  const handleGameSettingsClose = () => {
    setGameSettingsOpen(false);
  };
  return (
    <>
      <div>HOME</div>
      <Button
        onClick={() => {
          setGameSettingsOpen(!gameSettingsOpen);
        }}
      >
        open game settings
      </Button>
      <Drawer
        open={gameSettingsOpen}
        onClose={handleGameSettingsClose}
        position="right"
      >
        <Drawer.Header title="Drawer" />
        <Drawer.Items>{gameSettings && <GameSettingsBox />}</Drawer.Items>
      </Drawer>
    </>
  );
};
