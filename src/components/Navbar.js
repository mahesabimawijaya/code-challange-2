"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const changeBackground = () => {
    const nav = document.getElementById("navbar");
    const navr = document.getElementById("navbar-r");
    if (window.scrollY >= 64) {
      nav.classList.add("bg-white");
      navr.classList.remove("text-white");
      navr.classList.add("text-blue-900");
    } else {
      nav.classList.remove("bg-white");
      navr.classList.remove("text-blue-900");
      navr.classList.add("text-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <div
      id="navbar"
      className="flex h-16 w-full items-center fixed justify-between navbar-fixed-top z-[2] duration-300"
    >
      <div id="navbar-left">
        <div className="relative w-28 h-5 md:w-40 md:h-7 lg:w-48 lg:h-9">
          <Link href={"/"}>
            <Image
              className="ml-5 md:ml-14"
              src={"/asaba-innotech-logo.webp"}
              fill={true}
              alt="asaba-logo"
            />
          </Link>
        </div>
      </div>
      <div id="navbar-right">
        <div
          id="navbar-r"
          className="flex items-center text-white mr-5 sm:mr-36 space-x-3 text-[10px] md:text-[12px] md:mr-10 md:space-x-6 lg:space-x-10 xl:space-x-12 xl:text-sm font-semibold"
        >
          <Link href={"/"}>
            <div className="hover:text-red-700">Home</div>
          </Link>
          <Link href={"/about"}>
            <div className="hover:text-red-700">About Us</div>
          </Link>
          <Link href={"/product"}>
            <div className="hover:text-red-700">Product & Services</div>
          </Link>
          <Link href={"/teams"}>
            <div className="hover:text-red-700">Teams</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
