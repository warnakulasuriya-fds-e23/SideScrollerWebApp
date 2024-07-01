import { useEffect, useState } from "react";
import { GameSettingsBox } from "../components/GameSettingsBox";
import { useLoadUpGameSettings } from "../hooks/useLoadUpGameSetting";
// import { useGameSettingsContext } from "../hooks/useGameSettingsContext";
import { Button, Drawer } from "flowbite-react";
import { Cabinet } from "../components/Cabinet";
export const Home = () => {
  // const { gameSettings } = useGameSettingsContext();
  const { LoadUpGameSettings } = useLoadUpGameSettings();
  // const [gameSettingsOpen, setGameSettingsOpen] = useState(false);

  useEffect(() => {
    const loadingfunction = async () => {
      await LoadUpGameSettings();
    };
    loadingfunction();
  }, []);

  // const handleGameSettingsClose = () => {
  //   setGameSettingsOpen(false);
  // };
  return (
    <>
      <div className="text-black dark:text-white z-0">
        HOME blah blah blah blah
      </div>
      <div className=" absolute right-0 top-14  z-10">
        <Cabinet />
      </div>

      {/* <Button
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
      </Drawer> */}
    </>
  );
};
