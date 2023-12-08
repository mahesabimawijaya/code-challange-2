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
          src={"/it-service.webp"}
          fill={true}
          alt="it-service"
        />
        <div className="text-white absolute bottom-14 left-32 text-4xl font-semibold">
          IT Service
        </div>
      </div>
      <div className="flex flex-col items-center px-10 w-full pb-20">
        <div className="text-3xl font-semibold mt-10">Our Solution</div>
        <div
          id="solution-list"
          className="flex w-full mt-14 justify-center space-x-14"
        >
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Software as Services(SasS)
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/sass.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Technology and services such as Modern Workspace Productivity,
              creative solutions.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Platform as Services(PasS)
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/pass.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              To enhance your business we can provide solution to build and
              develop platform.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Infrastructure as Services(IasS)
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/iaas.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Data center backup disaster recovery.
            </div>
          </div>
        </div>
        <div
          id="solution-list"
          className="flex w-full mt-14 justify-center space-x-14"
        >
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Security as Services(SeasS)
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/seas.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px] pb-3">
              We provide SOC (security operation center), vulnerability
              assessment, penetration & performance testing and digital
              forensic.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
