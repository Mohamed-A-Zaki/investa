"use client";

import { useState } from "react";
import { nav_links } from "@/app/constants";
import { CiMenuBurger } from "react-icons/ci";

import MainLink from "../MainLink";
import MainButton from "../MainButton";

export default function NavDropDown() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="md:hidden">
      <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer" onClick={toggleMenu}>
        <CiMenuBurger size={25} />
      </div>

      {open && (
        <div className="absolute shadow-md w-full right-0 top-full p-4 rounded-lg flex flex-col gap-4">
          {nav_links.map(({ id, name, href }) => (
            <MainLink
              key={id}
              className="mx-2"
              id={id}
              name={name}
              href={href}
            />
          ))}

          <MainButton className="hover:border-gray-600">Get Advice</MainButton>
          <MainButton className="text-white bg-black">Hire Me</MainButton>
        </div>
      )}
    </div>
  );
}
