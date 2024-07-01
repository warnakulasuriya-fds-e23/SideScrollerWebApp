import { useEffect } from "react";
import { useLoadUpGameSettings } from "../hooks";
import { Cabinet } from "../components";

export const Home = () => {
  const { LoadUpGameSettings } = useLoadUpGameSettings();

  useEffect(() => {
    const loadingfunction = async () => {
      await LoadUpGameSettings();
    };
    loadingfunction();
  }, []);

  return (
    <div className="flex justify-between ">
      <Cabinet />
      <div className="flex flex-col h-[84vh] w-[90vw]">
        <div className=" flex h-4/6  bg-green-400 items-center justify-center">
          <p className=" text-7xl text-white">Game Canvas</p>
        </div>
        <div className=" flex h-2/6  bg-yellow-400 items-center justify-center">
          <p className=" text-7xl text-white">controls</p>
        </div>
      </div>

      <Cabinet />
    </div>
  );
};
