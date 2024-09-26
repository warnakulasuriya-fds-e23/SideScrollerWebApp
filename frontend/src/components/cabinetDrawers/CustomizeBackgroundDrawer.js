import React, { useEffect, useState } from "react";
import { Button, Drawer, Carousel } from "flowbite-react";
import { PiCityFill } from "react-icons/pi";
import { useBackgroundObjectContext, useLoadUpBackground } from "../../hooks";
const CustomizeBackgroundBox = (props) => {
  const { LoadUpBackgroundFromBackend } = useLoadUpBackground();
  const { BackgroundObject } = useBackgroundObjectContext();
  const [image1, setImage1] = useState(1);
  useEffect(() => {
    if (BackgroundObject) {
      setImage1(BackgroundObject.Layer1);
    }
  }, [BackgroundObject]);

  const SwitchToCity1 = async () => {
    await LoadUpBackgroundFromBackend("City1");
    props.customizeBackgroundMethod(BackgroundObject);
    props.closeDrawer();
  };
  const SwitchToCity2 = async () => {
    await LoadUpBackgroundFromBackend("City2");
    props.customizeBackgroundMethod(BackgroundObject);
    props.closeDrawer();
  };
  const SwitchToCity3 = async () => {
    await LoadUpBackgroundFromBackend("City3");
    props.customizeBackgroundMethod(BackgroundObject);
    props.closeDrawer();
  };
  const SwitchToCity4 = async () => {
    await LoadUpBackgroundFromBackend("City4");
    props.customizeBackgroundMethod(BackgroundObject);
    props.closeDrawer();
  };
  const SwitchToCity5 = async () => {
    await LoadUpBackgroundFromBackend("City5");
    props.customizeBackgroundMethod(BackgroundObject);
    props.closeDrawer();
  };
  const SwitchToCity6 = async () => {
    await LoadUpBackgroundFromBackend("City6");
    props.customizeBackgroundMethod(BackgroundObject);
    props.closeDrawer();
  };
  const SwitchToCity7 = async () => {
    await LoadUpBackgroundFromBackend("City7");
    props.customizeBackgroundMethod(BackgroundObject);
    props.closeDrawer();
  };
  const SwitchToCity8 = async () => {
    await LoadUpBackgroundFromBackend("City8");
    props.customizeBackgroundMethod(BackgroundObject);
    props.closeDrawer();
  };
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <img src={image1} alt="..." />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="flex flex-col">
        <Button onClick={SwitchToCity1}>City1</Button>
        <Button onClick={SwitchToCity2}>City2</Button>
        <Button onClick={SwitchToCity3}>City3</Button>
        <Button onClick={SwitchToCity4}>City4</Button>
        <Button onClick={SwitchToCity5}>City5</Button>
        <Button onClick={SwitchToCity6}>City6</Button>
        <Button onClick={SwitchToCity7}>City7</Button>
        <Button onClick={SwitchToCity8}>City8</Button>
      </div>
    </>
  );
};

export const CustomizeBackgroundDrawer = (props) => {
  const { BackgroundObject } = useBackgroundObjectContext();
  return (
    <Drawer open={props.open} onClose={props.onClose} position={props.position}>
      <Drawer.Header title="Background" titleIcon={PiCityFill} />
      <Drawer.Items>
        {BackgroundObject && (
          <CustomizeBackgroundBox
            closeDrawer={props.onClose}
            customizeBackgroundMethod={props.customizeBackgroundMethod}
          />
        )}
      </Drawer.Items>
    </Drawer>
  );
};
