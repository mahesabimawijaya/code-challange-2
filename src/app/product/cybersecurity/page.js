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
          src={"/cyber-security.jpg"}
          fill={true}
          alt="it-service"
        />
        <div className="text-white absolute bottom-14 left-32 text-4xl font-semibold">
          Cybersecurity
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
              Vulneralbility Assessment
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image
                src={"/vulneralbility-assesment.webp"}
                fill={true}
                alt="sass"
              />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Our review of your application weaknesses, including the needed
              remedy to prevent any unnecessary action in the future.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Penetration Testing
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/penetration-testing.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Penetration Test offers a simulation of cyber attack to evaluate
              the security of our client’s system.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              ISO & Security Consulting
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/iso.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Evaluate the speed, responsibility and stability of your computer,
              network, or software to identify performance-bottlenecks.
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
              Performance Testing
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/performance-testing.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Evaluate the speed, responsibility and stability of your computer,
              network, or software to identify performance-bottlenecks.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Digital Forensic
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/digital-forensic.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Defend and analyze attacks on your application to gain knowledge
              on how to imrpove your application.
            </div>
          </div>
          <div
            id="solution-card"
            className="w-1/4 h-72 border flex flex-col items-center rounded-xl shadow-2xl"
          >
            <div className="font-semibold text-lg bg-blue-800 text-white w-full flex justify-center items-center rounded-t-xl h-10">
              Security Operation Center
            </div>
            <div className="relative w-24 h-24 mt-5">
              <Image src={"/security-operation.webp"} fill={true} alt="sass" />
            </div>
            <div className="mt-5 px-5 text-center text-[15px]">
              Supervise and protect your application with our 24/7 protection
              service. We prevent, monitor, detect, analyze, and respond to your
              security incidents
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
