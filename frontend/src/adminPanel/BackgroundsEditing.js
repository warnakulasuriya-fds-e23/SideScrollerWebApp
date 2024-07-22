import React, { useEffect, useState } from "react";
import { Label, Button } from "flowbite-react";
import { useAddBackground, useReturnBackground } from "../hooks";
export const BackgroundsEditing = () => {
  const { addBackroundBackendCommunication } = useAddBackground();
  const { returnBackgroundBackendCommunication } = useReturnBackground();
  const [BackgroundName, setBackgroundName] = useState();
  const [BackgroundNameToShow, setBackgroundNameToShow] = useState();
  const [LoadedBackgroundObj, setLoadedBackgroundObj] = useState();
  const [Layer1, setLayer1] = useState();
  const [Layer2, setLayer2] = useState();
  const [Layer3, setLayer3] = useState();
  const [Layer4, setLayer4] = useState();
  const [Layer5, setLayer5] = useState();
  const [PreviewImage, setPreviewImage] = useState();
  var Layer1Input;
  var Layer2Input;
  var Layer3Input;
  var Layer4Input;
  var Layer5Input;
  var PreviewImageInput;
  useEffect(() => {
    Layer1Input = document.querySelector("#Layer1Input");
    Layer2Input = document.querySelector("#Layer2Input");
    Layer3Input = document.querySelector("#Layer3Input");
    Layer4Input = document.querySelector("#Layer4Input");
    Layer5Input = document.querySelector("#Layer5Input");
    PreviewImageInput = document.querySelector("#PreviewImageInput");
    Layer1Input.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setLayer1(reader.result);
      });
      reader.readAsDataURL(this.files[0]);
    });
    Layer2Input.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setLayer2(reader.result);
      });
      reader.readAsDataURL(this.files[0]);
    });
    Layer3Input.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setLayer3(reader.result);
      });
      reader.readAsDataURL(this.files[0]);
    });
    Layer4Input.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setLayer4(reader.result);
      });
      reader.readAsDataURL(this.files[0]);
    });
    Layer5Input.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setLayer5(reader.result);
      });
      reader.readAsDataURL(this.files[0]);
    });
    PreviewImageInput.addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setPreviewImage(reader.result);
      });
      reader.readAsDataURL(this.files[0]);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside handleSubmit");
    try {
      const backgroundObject = {
        BackgroundName,
        Layer1,
        Layer2,
        Layer3,
        Layer4,
        Layer5,
        PreviewImage,
      };
      await addBackroundBackendCommunication(backgroundObject);
      console.log("successfully added");
    } catch (error) {
      console.log(error);
    }
  };
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
      <form className="flex flex-col gap-5 w-2/5" onSubmit={handleSubmit}>
        <div className="flex gap-10 items-center">
          <span className="w-64 text-2xl">
            <Label htmlFor="BackgroundNameInput" value="Background Name:" />
          </span>
          <input
            className="rounded"
            required={true}
            type="text"
            id="BackgroundNameInput"
            value={BackgroundName}
            onChange={(e) => {
              setBackgroundName(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-10 items-center">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer1Input" value="Layer1:" />
          </span>
          <input required={true} type="file" id="Layer1Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer2Input" value="Layer2:" />
          </span>
          <input required={true} type="file" id="Layer2Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer3Input" value="Layer3:" />
          </span>
          <input required={true} type="file" id="Layer3Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer4Input" value="Layer4:" />
          </span>
          <input required={true} type="file" id="Layer4Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer5Input" value="Layer5:" />
          </span>
          <input required={true} type="file" id="Layer5Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="PreviewImageInput" value="PreviewImage:" />
          </span>
          <input required={true} type="file" id="PreviewImageInput" />
        </div>
        <Button type="submit" gradientMonochrome="success">
          Add Background Object
        </Button>
      </form>
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
