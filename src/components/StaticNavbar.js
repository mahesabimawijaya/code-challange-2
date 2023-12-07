import Image from "next/image";
import Link from "next/link";

export default function StaticNavbar() {
  return (
    <div className="flex bg-white text-blue-900 h-16 w-full items-center fixed justify-between navbar-fixed-top z-[2] duration-300">
      <div>
        <Image
          className="ml-10"
          src={"/asaba-innotech-logo.webp"}
          width={180}
          height={20}
          alt="asaba-logo"
        />
      </div>
      <div>
        <div className="flex items-center mr-10 space-x-12 text-sm font-semibold">
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
