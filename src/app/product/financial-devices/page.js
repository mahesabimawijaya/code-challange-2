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
          src={"/financial-device.webp"}
          fill={true}
          alt="it-service"
        />
        <div className="text-white absolute bottom-14 left-32 text-4xl font-semibold">
          Financial Solution Devices
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
              ATM & CRM including Services
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/atm.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              ATM monitoring & Distributiom file, Whitelist Solutions, Cash
              Management, Electronic Journal Reconciliation.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Electronic Data Capture
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/electronic-data.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              A technology system for digitally collecting and recording data in
              the banking industry involving a credit or debit card.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
