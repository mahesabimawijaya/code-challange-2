import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        id="footer-top"
        className="w-full h-20 bg-[url('/footer-texture.avif')] mt-20 rounded-t-full border-t border-t-blue-900 overflow-x-hidden"
      ></div>
      <div
        id="footer"
        className="w-full h-auto md:h-96 bg-[url('/footer-texture.avif')] flex flex-col justify-between"
      >
        <div className="flex flex-col space-y-4 md:flex md:flex-row w-full">
          <div className="md:w-2/5 items-center flex flex-col lg:items-end lg:pr-20">
            <div className="relative md:w-60 md:h-11 lg:w-72 lg:h-14">
              <Image
                src={"/asaba-innotech-logo.webp"}
                fill={true}
                alt="asaba-logo"
              />
            </div>
            <div className="relative md:w-60 md:h-11 lg:w-72 lg:h-16 mt-1">
              <Image src={"/footer_iso_2.webp"} fill={true} alt="asaba-logo" />
            </div>
          </div>
          <div className="md:w-3/5 flex flex-col">
            <div className="flex flex-col space-y-5 md:space-y-0 text-center md:text-start items-center md:items-start md:flex md:flex-row md:justify-evenly pt-4 md:pt-0">
              <div className="flex flex-col">
                <div className="font-semibold text-blue-950 mb-3">
                  Product & Services
                </div>
                <div className="flex-flex-col text-sm text-blue-900">
                  <Link href={"/product/it-service"}>
                    <div className="mb-2">IT Service</div>
                  </Link>
                  <Link href={"/product/financial-devices"}>
                    <div className="mb-2">Financial Device</div>
                  </Link>
                  <Link href={"/product/financial-platform"}>
                    <div className="mb-2">Financial Service</div>
                  </Link>
                  <Link href={"/product/cybersecurity"}>
                    <div className="mb-2">Cyber Security</div>
                  </Link>
                  <Link href={"/product/digital-platform"}>
                    <div className="mb-2">Digital Business</div>
                  </Link>
                  <Link href={"/product/digital-development"}>
                    <div>Digital Product</div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-blue-950 mb-3">Company</div>
                <div className="flex-flex-col text-sm text-blue-900">
                  <Link href={"/about"}>
                    <div className="mb-2">About</div>
                  </Link>
                  <Link href={"/product"}>
                    <div className="mb-2">Product & Services</div>
                  </Link>
                  <Link href={"/teams"}>
                    <div>Teams</div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  id="contact"
                  className="font-semibold text-blue-950 md:ml-7 mb-3"
                >
                  Get In Touch
                </div>
                <div className="flex-flex-col space-y-4 text-sm text-blue-900 mr-7 md:mr-0">
                  <div className="flex space-x-2">
                    <div className="relative w-5 h-5">
                      <Image src={"/location.png"} fill={true} alt="location" />
                    </div>
                    <div className="w-60">
                      Ebenezer Building, Jl.Setiabudi Selatan No.1, Jakarta,
                      Indonesia 12920
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative w-5 h-5">
                      <Image
                        src={"/telephone.png"}
                        fill={true}
                        alt="location"
                      />
                    </div>
                    <div className="w-60">+62 21 5799 4700</div>
                  </div>
                  <div className="flex space-x-2 ">
                    <div className="relative w-5 h-5">
                      <Image src={"/mail.png"} fill={true} alt="location" />
                    </div>
                    <div className="w-60 mb-10">admin@asaba.co.id</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center md:px-44 py-5 bg-white text-blue-950 text-sm ">
          © 2022 ASABA INNOTECH. All Right Reserved
        </div>
      </div>
    </>
  );
}
