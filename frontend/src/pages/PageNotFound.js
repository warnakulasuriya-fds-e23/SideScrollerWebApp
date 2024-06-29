import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiOutlineEmojiSad } from "react-icons/hi";
export const PageNotFound = () => {
  return (
    <div>
      <HiOutlineEmojiSad className="w-96 h-96 mx-auto text-black dark:text-white" />
      <div className="text-7xl text-center dark:text-white">
        Page was not found!
      </div>
      <div className="text-5xl text-center dark:text-white">
        would you like to go to Home page?
      </div>
      <Button
        className="mx-auto my-10 w-36"
        size="xl"
        gradientDuoTone="greenToBlue"
      >
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};
