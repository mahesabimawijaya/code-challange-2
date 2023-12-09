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
          src={"/digital-business.jpeg"}
          fill={true}
          alt="it-service"
        />
        <div className="text-white absolute bottom-14 left-32 text-3xl lg:text-4xl font-semibold">
          Digital Business Platform
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
            className="lg:w-1/4 h-auto pb-3 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold xl:text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Visitor Management System
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/visitor-management.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              The feature allows you to view meeting details such as location of
              your meeting, get automatically notification from host and map
              building to help you get direction.
            </div>
          </div>
          <div
            id="solution-card"
            className="lg:w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Modern Workspace
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/modern-workspace.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Microsoft Teams is the hub for teamwork in Microsoft 365.
            </div>
          </div>
          <div
            id="solution-card"
            className="lg:w-1/4 h-auto pb-3 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Creative Cloud
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/creative-cloud.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Solution for access to a wide range of creative applications and
              services, including graphic design, video editing, animation, and
              web development programs.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
