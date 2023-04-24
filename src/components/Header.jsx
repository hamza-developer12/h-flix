"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="shadow-lg">
      <div className=" container mx-auto flex items-center h-[10vh] py-4 justify-between px-2">
        <Link
          href="/"
          className="flex gap-1 items-center text-pink-700 font-bold"
        >
          <BiCameraMovie size={30} /> <span className="text-lg">H-Flix</span>
        </Link>
        {/* NavBar... */}
        <ul className="hidden md:flex gap-4">
          <li className="hover:text-pink-700 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-pink-700 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-pink-700 cursor-pointer">
            <Link href="/movies">Movies</Link>
          </li>
          <li className="hover:text-pink-700 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {toggle === false ? (
          <AiOutlineMenu
            size={25}
            className={`md:hidden block`}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        ) : (
          <AiOutlineClose
            size={25}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        )}

        <ul
          className={`absolute top-14 left-0 bg-white w-full h-screen flex flex-col items-center  gap-y-4 pt-20 ${
            toggle ? "translate-x-[0]" : "translate-x-[-100%]"
          } duration-300 text-xl`}
        >
          <li onClick={() => setToggle(false)}>
            <Link href={"/"}>Home</Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href={"/about"}>About</Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href={"/movies"}>Movies</Link>
          </li>
          <li onClick={() => setToggle(false)}>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
