import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div
      id="home-product"
      className="flex flex-col w-full items-center mt-10 pb-20"
    >
      <div className="text-2xl md:text-4xl font-semibold mb-20">
        Product & Services
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 items-center lg:flex lg:flex-row lg:space-x-10 w-full px-20 justify-center">
        <div
          id="home-product-card"
          className=" flex flex-col w-72 md:w-80 lg:w-72 xl:1/4 h-72 group cursor-pointer shadow-2xl"
        >
          <div className="w-full h-5/6 relative grayscale group-hover:grayscale-0 duration-300">
            <Image
              className="object-cover object-left rounded-t-xl"
              src={"/it-service.webp"}
              fill={true}
              alt="it-service"
            />
          </div>
          <div className="bg-blue-950 h-1/6 rounded-b-xl flex items-center pl-8 text-white font-semibold group-hover:bg-blue-700 duration-300">
            IT Services
          </div>
        </div>

        <div
          id="home-product-card"
          className=" flex flex-col w-72 md:w-80 md:mb-10 lg:w-72 xl:w-1/4 h-72 group cursor-pointer shadow-2xl"
        >
          <div className="w-full h-5/6 relative grayscale group-hover:grayscale-0 duration-300">
            <Image
              className="object-cover object-left rounded-t-xl"
              src={"/financial-device.webp"}
              fill={true}
              alt="it-service"
            />
          </div>
          <div className="bg-blue-950 h-1/6 rounded-b-xl flex items-center pl-8 text-white font-semibold group-hover:bg-blue-700 duration-300">
            Financial Solution Device
          </div>
        </div>
        <div
          id="home-product-card"
          className=" flex flex-col w-72 md:w-80 lg:w-72 xl:w-1/4 h-72 group cursor-pointer shadow-2xl"
        >
          <div className="w-full h-5/6 relative grayscale group-hover:grayscale-0 duration-300">
            <Image
              className="object-cover object-left rounded-t-xl"
              src={"/financial-service.jpg"}
              fill={true}
              alt="it-service"
            />
          </div>
          <div className="bg-blue-950 h-1/6 rounded-b-xl flex items-center pl-8 text-white font-semibold group-hover:bg-blue-700 duration-300">
            Financial Service Platform
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 items-center lg:flex lg:flex-row w-full px-20 justify-center lg:space-x-10 mt-16">
        <div
          id="home-product-card"
          className=" flex flex-col w-72 md:w-80 lg:w-72 xl:w-1/4 h-72 group cursor-pointer shadow-2xl"
        >
          <div className="w-full h-5/6 relative grayscale group-hover:grayscale-0 duration-300">
            <Image
              className="object-cover object-left rounded-t-xl"
              src={"/cyber-security.jpg"}
              fill={true}
              alt="it-service"
            />
          </div>
          <div className="bg-blue-950 h-1/6 rounded-b-xl flex items-center pl-8 text-white font-semibold group-hover:bg-blue-700 duration-300">
            Cyber Security
          </div>
        </div>
        <div
          id="home-product-card"
          className=" flex flex-col w-72 md:w-80 lg:w-72 xl:w-1/4 h-72 group cursor-pointer shadow-2xl"
        >
          <div className="w-full h-5/6 relative grayscale group-hover:grayscale-0 duration-300">
            <Image
              className="object-cover object-center rounded-t-xl"
              src={"/digital-business.jpeg"}
              fill={true}
              alt="it-service"
            />
          </div>
          <div className="bg-blue-950 h-1/6 rounded-b-xl flex items-center pl-8 text-white font-semibold group-hover:bg-blue-700 duration-300">
            Digital Business Platform
          </div>
        </div>
        <div
          id="home-product-card"
          className=" flex flex-col w-72 md:w-80 lg:w-72 xl:w-1/4 h-72 group cursor-pointer shadow-2xl"
        >
          <div className="w-full h-5/6 relative grayscale group-hover:grayscale-0 duration-300">
            <Image
              className="object-cover object-center rounded-t-xl"
              src={"/digital-product.jpg"}
              fill={true}
              alt="it-service"
            />
          </div>
          <div className="bg-blue-950 h-1/6 rounded-b-xl flex items-center pl-8 lg:pl-5 text-white font-semibold group-hover:bg-blue-700 duration-300">
            Digital Product Development
          </div>
        </div>
      </div>
      <Link href={"/product"}>
        <button className="py-2 px-4 text-sm bg-blue-900 text-white font-semibold md:py-2 md:px-4 lg:py-3 lg:px-5 md:text-base rounded-lg hover:opacity-80 active:opacity-60 duration-200 mt-16">
          View More ➜
        </button>
      </Link>
    </div>
  );
}
