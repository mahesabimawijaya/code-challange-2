import Image from "next/image";

export default function Product() {
  return (
    <div
      id="home-product"
      className="flex flex-col w-full items-center mt-10 pb-20"
    >
      <div className="text-4xl font-semibold mb-20">Product & Services</div>
      <div className="flex w-full px-20 justify-center space-x-20">
        <div
          id="home-product-card"
          className=" flex flex-col w-1/4 h-72 group cursor-pointer shadow-2xl"
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
          className=" flex flex-col w-1/4 h-72 group cursor-pointer shadow-2xl"
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
          className=" flex flex-col w-1/4 h-72 group cursor-pointer shadow-2xl"
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
      <div className="flex w-full px-20 justify-center space-x-20 mt-16">
        <div
          id="home-product-card"
          className=" flex flex-col w-1/4 h-72 group cursor-pointer shadow-2xl"
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
          className=" flex flex-col w-1/4 h-72 group cursor-pointer shadow-2xl"
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
          className=" flex flex-col w-1/4 h-72 group cursor-pointer shadow-2xl"
        >
          <div className="w-full h-5/6 relative grayscale group-hover:grayscale-0 duration-300">
            <Image
              className="object-cover object-center rounded-t-xl"
              src={"/digital-product.jpg"}
              fill={true}
              alt="it-service"
            />
          </div>
          <div className="bg-blue-950 h-1/6 rounded-b-xl flex items-center pl-8 text-white font-semibold group-hover:bg-blue-700 duration-300">
            Digital Product Development
          </div>
        </div>
      </div>
    </div>
  );
}