"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const menuRef = useRef(null);
  const [hash, setHash] = useState("");
  const [menubar, setMenuBar] = useState(false);
  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);

    // Set initial hash
    setHash(window.location.hash);

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  useEffect(() => {
    if (menubar) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [menubar]);

  return (
    <div
      ref={menuRef}
      onClick={(e) => {
        if (menuRef.current === e.target) {
          setMenuBar(false);
        }
      }}
      className="w-full h-[100px] flex flex-row justify-between items-center relative"
    >
      <h1 className="text-2xl font-bold text-[#3fba45]">
        <Link href={"/"}>Mahesh</Link>
      </h1>

      <ul
        className={`w-3/4 hidden xl:flex xl:flex-row justify-evenly items-center`}
      >
        <li className="text-white text-lg font-normal hover:text-black px-5 py-3 hover:bg-green-600  hover:border rounded-3xl transition-all duration-300">
          <Link href={"#service"}>
            Service
          </Link>
        </li>
        <li className="text-white text-lg font-normal hover:text-black px-5 py-3 hover:bg-green-600  hover:border rounded-3xl transition-all duration-300">
          <Link href={"#projects"}>Projects</Link>
        </li>
        <li className="text-white text-lg font-normal hover:text-black px-5 py-3 hover:bg-green-600  hover:border rounded-3xl transition-all duration-300">
          <Link href={"#skills"}>Skills</Link>
        </li>
        <li className="text-white text-lg font-normal hover:text-black px-5 py-3 hover:bg-green-600  hover:border rounded-3xl transition-all duration-300">
          <Link href={"#testimonials"}>Testimonials</Link>
        </li>
        {/* <li className="text-white text-lg font-normal hover:text-black px-5 py-3 hover:bg-green-600  hover:border rounded-3xl transition-all duration-300">
          <Link href={"#aboutme"}>About Me</Link>
        </li> */}
        <li className="text-white text-lg font-normal hover:text-black px-5 py-3 hover:bg-green-600  hover:border rounded-3xl transition-all duration-300">
          <Link href={"#contactme"}>Contact Me</Link>
        </li>
      </ul>
      <button className="xl:hidden transition-all duration-1000 ease-in-out transform">
        <Hamburger
          toggled={menubar}
          toggle={() => setMenuBar(!menubar)}
          color="green"
        />
      </button>

      <ul
        className={`w-full fixed backdrop-blur-none top-[100px] left-0 flex flex-col justify-evenly items-center bg-black-100 overflow-hidden z-[100] transition-all duration-500 ease-in-out ${
          menubar ? "max-h-[50vh] opacity-100 scroll-" : "max-h-0 opacity-0"
        }`}
      >
        <li
          className={`text-white ${
            hash === "#service" ? "text-green-500 font-bold" : "text-white"
          } text-lg font-normal px-5 py-3 transition-all duration-300`}
        >
          <Link onClick={() => setMenuBar(false)} href={"#service"}>
            Service
          </Link>
        </li>
        <li
          className={`text-white ${
            hash === "#projects" ? "text-green-500 font-bold" : "text-white"
          } text-lg font-normal px-5 py-3 transition-all duration-300`}
        >
          <Link onClick={() => setMenuBar(false)} href={"#projects"}>
            Projects
          </Link>
        </li>
        <li
          className={`text-white ${
            hash === "#skills" ? "text-green-500 font-bold" : "text-white"
          } text-lg font-normal px-5 py-3 transition-all duration-300`}
        >
          <Link onClick={() => setMenuBar(false)} href={"#skills"}>
            Skills
          </Link>
        </li>
        <li
          className={`text-white ${
            hash === "#testimonials" ? "text-green-500 font-bold" : "text-white"
          } text-lg font-normal px-5 py-3 transition-all duration-300`}
        >
          <Link onClick={() => setMenuBar(false)} href={"#testimonials"}>
            Testimonials
          </Link>
        </li>
        {/* <li
          className={`text-white ${
            hash === "#aboutme" ? "text-green-500 font-bold" : "text-white"
          } text-lg font-normal px-5 py-3 transition-all duration-300`}
        >
          <Link onClick={() => setMenuBar(false)} href={"#aboutme"}>
            About Me
          </Link>
        </li> */}
        <li
          className={`text-white ${
            hash === "#contactme" ? "text-green-500 font-bold" : "text-white"
          } text-lg font-normal px-5 py-3 transition-all duration-300`}
        >
          <Link onClick={() => setMenuBar(false)} href={"#contactme"}>
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
