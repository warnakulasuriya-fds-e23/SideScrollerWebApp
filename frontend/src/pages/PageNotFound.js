import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import { HiOutlineEmojiSad } from "react-icons/hi";
export const PageNotFound = () => {
  return (
    <Card className="h-[84vh]">
      <HiOutlineEmojiSad className="size-4/12 sm:size-4/12 mx-auto text-black dark:text-white" />
      <div className=" text-5xl sm:text-7xl text-center dark:text-white">
        Page was not found!
      </div>
      <div className="text-xl sm:text-3xl text-center dark:text-white">
        would you like to go to Home page?
      </div>
      <Button className="mx-auto my-5 w-36 size-m sm:size-xl" color="blue">
        <Link to="/">Home</Link>
      </Button>
    </Card>
  );
};
