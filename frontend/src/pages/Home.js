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
    <>
      <div className="text-black dark:text-white z-0">
        HOME blah blah blah blah
      </div>
      <div className=" absolute right-0 top-14  z-10">
        <Cabinet />
      </div>
    </>
  );
};
