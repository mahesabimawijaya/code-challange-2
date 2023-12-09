import Footer from "@/components/Footer";
import StaticNavbar from "@/components/StaticNavbar";
import Image from "next/image";

export default function IT() {
  return (
    <div className="overflow-y-hidden">
      <StaticNavbar />
      <div className="relative w-full h-96">
        <Image
          className="object-cover blur-[3px]"
          src={"/digital-product.jpg"}
          fill={true}
          alt="it-service"
        />
        <div className="text-white absolute bottom-14 left-32 text-3xl lg:text-4xl font-semibold">
          Digital Product Development
        </div>
      </div>
      <div className="flex flex-col items-center px-10 w-full pb-20">
        <div className="text-3xl font-semibold mt-10">Our Solution</div>
        <div
          id="solution-list"
          className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row w-full mt-14 justify-center lg:space-x-14"
        >
          <div
            id="solution-card"
            className="lg:w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Website Development
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/website-development.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              The process of creating and developing a website from scratch to
              becoming a ready-to-use website.
            </div>
          </div>
          <div
            id="solution-card"
            className="lg:w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Mobile Apps
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/mobile-apps.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Designed to meet the efficiency needs of advertising customers and
              prospective business customers using mobile applications.
            </div>
          </div>
          <div
            id="solution-card"
            className="lg:w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold xl:text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Internet of Things Solution
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/iot.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Technology solutions for devices or objects connected to the
              internet to communicate and exchange data with each other.
            </div>
          </div>
        </div>
        <div
          id="solution-list"
          className="flex flex-col lg:flex-row w-full mt-14 justify-center lg:space-x-14"
        >
          <div
            id="solution-card"
            className="lg:w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              UI / UX Design
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/uiux.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px] pb-3">
              Creating a better user experience in using digital products or
              services.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
