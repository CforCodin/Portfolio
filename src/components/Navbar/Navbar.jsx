import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex flex-col md:flex-row justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-2xl font-bold tracking-wide text-white">
        Portfolio
      </span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-20 py-2 mt-4 font-semibold md:mt-5 rounded-x1 bg-opacity-30 md:border-none text-center md:bg-transparent
         md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all border border-blue-900 my-1 md:border-none duration-300 p-1 md:p-0 hover:text-yellow-500">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all border my-1 border-blue-900 md:border-none duration-300 p-1 md:p-0 hover:text-yellow-500">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all border my-1 border-blue-900 md:border-none duration-300 p-1 md:p-0 hover:text-yellow-500">
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="text-md transition-all border my-1 border-blue-900 md:border-none duration-300 p-1 md:p-0 hover:text-yellow-500">
            Contacts
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
