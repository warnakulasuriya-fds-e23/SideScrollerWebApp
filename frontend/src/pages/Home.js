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
      {/* <div>
        <input type="file" id="myFileInput" />
        <img id="imagePlace" src="" alt="test" />
      </div> */}
    </>
  );
};
