import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
  Button,
  Avatar,
  Dropdown,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { HiLogout } from "react-icons/hi";
import { useLogout, useAuthContext } from "../hooks";
import { useNavigate } from "react-router-dom";
export function NavigationBar() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const currentPath = useLocation().pathname;
  const { Logout } = useLogout();
  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar className="  h-[8vh] bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700 items-center ">
        <NavbarBrand className="hover:cursor-pointer" onClick={goHome}>
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span>
            <div className="self-center flex justify-evenly  text-xl font-semibold dark:text-white">
              <div className="bg-blue-600 rounded-lg px-4 transform -skew-x-12 text-gray-200 dark:text-gray-900">
                Zyd
              </div>
              <div>Scroller</div>
            </div>
          </span>
        </NavbarBrand>
        <div className="flex md:order-2 space-x-4">
          <DarkThemeToggle />
          {user && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="/Assets/Images/UserAvatar/Person.svg"
                  rounded
                  bordered
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">testUserName</span>
                <span className="block truncate text-sm font-medium">
                  testuser@gmail.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>View Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Messages</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={Logout}>Log out</Dropdown.Item>
            </Dropdown>
          )}
        </div>

        <NavbarToggle />
        <NavbarCollapse className="bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700 z-10">
          {user && (
            <NavbarLink href="/" active={currentPath === "/"}>
              Home
            </NavbarLink>
          )}
          {!user && (
            <NavbarLink href="/login" active={currentPath === "/login"}>
              Login
            </NavbarLink>
          )}
          {!user && (
            <NavbarLink href="/signup" active={currentPath === "/signup"}>
              Signup
            </NavbarLink>
          )}
        </NavbarCollapse>
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
