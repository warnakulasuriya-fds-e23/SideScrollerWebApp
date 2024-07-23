import React, { useState } from "react";
import { Button } from "flowbite-react";
import { useReturnBackground } from "../../hooks";

export const BackgroundPreviewer = () => {
  const { returnBackgroundBackendCommunication } = useReturnBackground();
  const [BackgroundNameToShow, setBackgroundNameToShow] = useState();
  const [LoadedBackgroundObj, setLoadedBackgroundObj] = useState();

  const LoadUpImageObject = async () => {
    const fetchedBackgroundObj = await returnBackgroundBackendCommunication(
      BackgroundNameToShow
    );
    setLoadedBackgroundObj(fetchedBackgroundObj);
  };
  const DisplayLayer1 = async () => {
    if (
      !LoadedBackgroundObj ||
      LoadedBackgroundObj.BackgroundName != BackgroundNameToShow
    ) {
      await LoadUpImageObject();
    }
    document
      .querySelector("#LayerDisplay")
      .setAttribute("src", LoadedBackgroundObj.Layer1);
  };
  const DisplayLayer2 = async () => {
    if (
      !LoadedBackgroundObj ||
      LoadedBackgroundObj.BackgroundName != BackgroundNameToShow
    ) {
      await LoadUpImageObject();
    }
    document
      .querySelector("#LayerDisplay")
      .setAttribute("src", LoadedBackgroundObj.Layer2);
  };
  const DisplayLayer3 = async () => {
    if (
      !LoadedBackgroundObj ||
      LoadedBackgroundObj.BackgroundName != BackgroundNameToShow
    ) {
      await LoadUpImageObject();
    }
    document
      .querySelector("#LayerDisplay")
      .setAttribute("src", LoadedBackgroundObj.Layer3);
  };
  const DisplayLayer4 = async () => {
    if (
      !LoadedBackgroundObj ||
      LoadedBackgroundObj.BackgroundName != BackgroundNameToShow
    ) {
      await LoadUpImageObject();
    }
    document
      .querySelector("#LayerDisplay")
      .setAttribute("src", LoadedBackgroundObj.Layer4);
  };
  const DisplayLayer5 = async () => {
    if (
      !LoadedBackgroundObj ||
      LoadedBackgroundObj.BackgroundName != BackgroundNameToShow
    ) {
      await LoadUpImageObject();
    }
    document
      .querySelector("#LayerDisplay")
      .setAttribute("src", LoadedBackgroundObj.Layer5);
  };
  const DisplayPreviewImage = async () => {
    if (
      !LoadedBackgroundObj ||
      LoadedBackgroundObj.BackgroundName != BackgroundNameToShow
    ) {
      await LoadUpImageObject();
    }
    document
      .querySelector("#LayerDisplay")
      .setAttribute("src", LoadedBackgroundObj.PreviewImage);
  };

  return (
    <>
      <input
        type="text"
        value={BackgroundNameToShow}
        onChange={(e) => setBackgroundNameToShow(e.target.value)}
      />
      <img id="LayerDisplay" src="" alt="" />
      <div className="flex justify-between">
        <Button
          gradientDuoTone="greenToBlue"
          disabled={BackgroundNameToShow ? false : true}
          onClick={DisplayLayer1}
        >
          Layer1
        </Button>
        <Button
          gradientDuoTone="greenToBlue"
          disabled={BackgroundNameToShow ? false : true}
          onClick={DisplayLayer2}
        >
          Layer2
        </Button>
        <Button
          gradientDuoTone="greenToBlue"
          disabled={BackgroundNameToShow ? false : true}
          onClick={DisplayLayer3}
        >
          Layer3
        </Button>
        <Button
          gradientDuoTone="greenToBlue"
          disabled={BackgroundNameToShow ? false : true}
          onClick={DisplayLayer4}
        >
          Layer4
        </Button>
        <Button
          gradientDuoTone="greenToBlue"
          disabled={BackgroundNameToShow ? false : true}
          onClick={DisplayLayer5}
        >
          Layer5
        </Button>
        <Button
          gradientDuoTone="greenToBlue"
          disabled={BackgroundNameToShow ? false : true}
          onClick={DisplayPreviewImage}
        >
          PreviewImage
        </Button>
      </div>
    </>
  );
};
