import Image from "next/image";
import Link from "next/link";

export default function StaticNavbar() {
  return (
    <div className="flex bg-white text-blue-900 h-16 w-full items-center fixed justify-between navbar-fixed-top z-[2] duration-300">
      <Link href={"/"}>
        <div className="relative w-28 h-5 md:w-40 md:h-7 lg:w-48 lg:h-9">
          <Image
            className="ml-5 md:ml-14"
            src={"/asaba-innotech-logo.webp"}
            fill={true}
            alt="asaba-logo"
          />
        </div>
      </Link>
      <div>
        <div
          id="static-navbar"
          className="flex items-center mr-5 sm:mr-36 space-x-3 text-[10px] md:text-[12px] md:mr-10 md:space-x-6 lg:space-x-10 xl:space-x-12 xl:text-sm font-semibold"
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
