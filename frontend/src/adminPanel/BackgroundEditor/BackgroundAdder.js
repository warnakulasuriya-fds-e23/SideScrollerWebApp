import React, { useEffect, useState } from "react";
import { Label, Button } from "flowbite-react";
import {
  useCheckBackgroundAvailability,
  useAddBackground,
  useUpdateBackground,
} from "../../hooks";
export const BackgroundAdder = () => {
  const { CheckBackgroundAvailabiltyBackendCommunication } =
    useCheckBackgroundAvailability();
  const { addBackroundBackendCommunication } = useAddBackground();
  const { updateBackgroundBackendCommunication } = useUpdateBackground();
  const [BackgroundName, setBackgroundName] = useState();
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
    console.log("processing Image submission...");
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
      const IsAvailable = await CheckBackgroundAvailabiltyBackendCommunication(
        BackgroundName
      );
      if (IsAvailable) {
        console.log("Going to update already existing Object ....");
        await updateBackgroundBackendCommunication(backgroundObject);
        console.log("successfully updated");
      } else {
        console.log("Going to add a new Object ....");
        await addBackroundBackendCommunication(backgroundObject);
        console.log("successfully added");
      }
    } catch (error) {
      console.log(error);
    }
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
          <input type="file" id="Layer1Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer2Input" value="Layer2:" />
          </span>
          <input type="file" id="Layer2Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer3Input" value="Layer3:" />
          </span>
          <input type="file" id="Layer3Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer4Input" value="Layer4:" />
          </span>
          <input type="file" id="Layer4Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="Layer5Input" value="Layer5:" />
          </span>
          <input type="file" id="Layer5Input" />
        </div>
        <div className="flex gap-10">
          <span className="w-64 text-2xl">
            <Label htmlFor="PreviewImageInput" value="PreviewImage:" />
          </span>
          <input type="file" id="PreviewImageInput" />
        </div>
        <Button type="submit" gradientMonochrome="success">
          Add/Upadte Background Object
        </Button>
      </form>
    </>
  );
};
