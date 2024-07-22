import React, { useEffect, useState } from "react";
import { Drawer, Carousel } from "flowbite-react";
import { PiCityFill } from "react-icons/pi";
import { useBackgroundObjectContext } from "../../hooks";
const CustomizeBackgroundBox = (props) => {
  const { BackgroundObject } = useBackgroundObjectContext();
  const [image1, setImage1] = useState(1);
  useEffect(() => {
    if (BackgroundObject) {
      setImage1(BackgroundObject.Layer1);
    }
  }, [BackgroundObject]);

  return (
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
