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
        <Image
          className="ml-10"
          src={"/asaba-innotech-logo.webp"}
          width={180}
          height={20}
          alt="asaba-logo"
        />
      </div>
      <div id="navbar-right">
        <div
          id="navbar-r"
          className="flex items-center text-white mr-10 space-x-12 text-sm font-semibold"
        >
          <div>Home</div>
          <div>About Us</div>
          <div>Product & Services</div>
          <Link href={"/teams"}>
            <div>Teams</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
