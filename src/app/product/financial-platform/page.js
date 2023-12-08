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
          src={"/financial-service.jpg"}
          fill={true}
          alt="it-service"
        />
        <div className="text-white absolute bottom-14 left-32 text-4xl font-semibold">
          Financial Services Platform
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
              Digital Banking Platform
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/digital-banking.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Technology infrastructure of financial service providers to offer
              banking services to their customers through digital channels.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Electronic Payment Gateway
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/electronic-payment.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Our Solution, can directly connect external devices and integrate
              with electronic and mobile payments.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Fraud Management System
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/fraud-management.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Payment service providers need to mitigate fraud risk, analyse
              each transaction in real-time and monitor fraud across all their
              channels.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
