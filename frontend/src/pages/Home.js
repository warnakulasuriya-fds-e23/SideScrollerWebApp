import { useEffect } from "react";
import { useLoadUpGameSettings } from "../hooks";
import { GamePlayer } from "../components";
import { Label } from "flowbite-react";

export const Home = () => {
  const { LoadUpGameSettings } = useLoadUpGameSettings();

  useEffect(() => {
    const loadingfunction = async () => {
      await LoadUpGameSettings();
    };
    loadingfunction();
    // document
    //   .querySelector("#myFileInput")
    //   .addEventListener("change", function () {
    //     const reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //       localStorage.setItem("testImage", reader.result);
    //     });
    //     reader.readAsDataURL(this.files[0]);
    //   });
    // if (localStorage.getItem("testImage")) {
    //   document
    //     .querySelector("#imagePlace")
    //     .setAttribute("src", localStorage.getItem("testImage"));
    // }
  }, []);

  return (
    <>
      <GamePlayer />
      <div className="flex gap-4">
        <Label htmlFor="Layer1Input" value="Layer1:" />
        <input type="file" id="Layer1Input" />
      </div>
      <div className="flex gap-4">
        <Label htmlFor="Layer2Input" value="Layer2:" />
        <input type="file" id="Layer2Input" />
      </div>
      <div className="flex gap-4">
        <Label htmlFor="Layer2Input" value="Layer2:" />
        <input type="file" id="Layer2Input" />
      </div>
      <div className="flex gap-4">
        <Label htmlFor="Layer3Input" value="Layer3:" />
        <input type="file" id="Layer3Input" />
      </div>
      <div className="flex gap-4">
        <Label htmlFor="Layer4Input" value="Layer4:" />
        <input type="file" id="Layer4Input" />
      </div>
    </>
  );
};
