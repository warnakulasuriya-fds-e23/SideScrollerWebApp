import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
  Button,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { HiLogout } from "react-icons/hi";
import { useLogout } from "../hooks";
export function NavigationBar() {
  const currentPath = useLocation().pathname;
  const { Logout } = useLogout();
  return (
    <>
      <Navbar className=" h-[8vh] bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <NavbarBrand>
          <img
            src="/favicon.svg"
            className="mr-3 h-s sm:h-9"
            alt="Flowbite React Logo"
          />

          <Link to="/">
            <div className="self-center flex justify-evenly  text-xl font-semibold dark:text-white">
              <div className="bg-blue-600 rounded-lg px-4 transform -skew-x-12 text-gray-200 dark:text-gray-900">
                Zyd
              </div>
              <div>Scroller</div>
            </div>
          </Link>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" active={currentPath === "/"}>
            Home
          </NavbarLink>
          <NavbarLink href="/login" active={currentPath === "/login"}>
            Login
          </NavbarLink>
          <NavbarLink href="/signup" active={currentPath === "/signup"}>
            Signup
          </NavbarLink>
        </NavbarCollapse>
        <Button onClick={Logout}>
          <HiLogout />
        </Button>

        <DarkThemeToggle />
      </Navbar>
    </>
  );
}

// import { Button, Navbar, TextInput } from "flowbite-react";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";
// import { FaMoon } from "react-icons/fa";

// export const NavigationBar = () => {
//   const path = useLocation().pathname;

//   return (
//     <div>
//       <Navbar className="border-b-2">
//         <Link
//           to="/"
//           className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
//         >
//           <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
//             Cleverly's
//           </span>
//           Blog
//         </Link>

//         <form>
//           <TextInput
//             type="text"
//             placeholder="Search..."
//             rightIcon={AiOutlineSearch}
//             className="hidden lg:inline"
//           />
//         </form>
//         <Button className="w-12 h-10 lg:hidden" color="gray" pill>
//           <AiOutlineSearch />
//         </Button>

//         <div className="flex gap-2 md:order-2">
//           <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
//             <FaMoon />
//           </Button>
//           <Link to="/sign-in">
//             <Button gradientDuoTone="purpleToBlue" outline>
//               Sign In
//             </Button>
//           </Link>
//           <Navbar.Toggle />
//         </div>

//         <Navbar.Collapse>
//           <Navbar.Link active={path === "/"} as={"div"}>
//             <Link to="/">Home</Link>
//           </Navbar.Link>

//           <Navbar.Link active={path === "/about"} as={"div"}>
//             <Link to="/about">About</Link>
//           </Navbar.Link>

//           <Navbar.Link active={path === "/projects"} as={"div"}>
//             <Link to="/projects">Projects</Link>
//           </Navbar.Link>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default NavigationBar;
