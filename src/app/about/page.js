import Footer from "@/components/Footer";
import StaticNavbar from "@/components/StaticNavbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <StaticNavbar />
      <div className="flex flex-col items-center w-full pt-14">
        <div className="relative w-full h-40">
          <Image
            className="object-cover object-bottom grayscale"
            src={"/about.jpeg"}
            fill={true}
            alt="it-service"
          />
          <div className="text-white absolute bottom-10 left-24 text-4xl font-semibold">
            About Us
          </div>
        </div>
        <div className="flex w-full justify-center md:justify-start text-xl md:text-3xl font-semibold my-10 md:pl-24 2xl:pl-72">
          <div>Introduction</div>
        </div>
        <div className=" flex flex-col items-center md:items-start space-y-16 md:space-y-0 md:flex md:flex-row w-full md:px-24 md:space-x-24 2xl:space-x-72 2xl:px-72">
          <div className="w-1/2 text-justify">
            PT. ASABA Digital Innotech berdiri pada tahun 1990 dengan misi
            menciptakan nilai bisnis bagi pelanggan melalui pemberian solusi
            atas kompleksnya masalah integrasi sistem yang dihadapi dalam era
            serba teknologi dewasa ini
            <br></br>
            <br></br>
            PT. ASABA Digital Innotech memformulasikan solusi inovatif dan
            menyajikan kerangka model yang mengombinasikan sumber daya manusia,
            teknologi, serta fungsi bisnis .<br></br>
            <br></br>
            Tahun 2023, PT. Asaba Computer Centre resmi mengumumkan bahwa
            merubah nama perusahaan menjadi ASABA INNOTECH (PT. ASABA Digital
            Innotech). Perusahaan kami telah bertransformasi model bisnis dari
            Konsultan IT menjadi Platform Bisnis Digital
          </div>
          <div className="relative w-52 md:w-1/3 h-32 md:h-36 lg:h-44 xl:h-64 2xl:w-1/5 2xl:ml-20">
            <Image src={"/who-are-we.webp"} fill={true} alt="intro" />
          </div>
        </div>
        <div className="flex flex-col space-y-10 lg:space-y-0 md:px-20 lg:flex lg:flex-row w-full lg:px-0 xl:px-20 my-20 justify-center lg:space-x-5  xl:space-x-20">
          <div
            id="vm-container"
            className="lg:w-5/12 h-44 lg:h-52 border rounded flex flex-col shadow-xl"
          >
            <div className="text-xl lg:text-2xl font-semibold pl-10 py-1 pr-3 bg-blue-900 w-1/3 mt-5 rounded-r-full text-white">
              Vision
            </div>
            <div className="text-sm md:text-base mt-5 px-5 text-justify">
              Become a global and trusted digital transformation partner,
              providing services to enable business partner to accelerate
              business innovation and win the competition in new economic
              paradigm.
            </div>
          </div>
          <div
            id="vm-container"
            className="lg:w-5/12 h-44 lg:h-52 border rounded flex flex-col shadow-xl"
          >
            <div className="text-xl xl:text-2xl font-semibold pl-10 py-1 pr-3 bg-red-900 w-1/3 mt-5 rounded-r-full text-white">
              Mission
            </div>
            <div className=" text-sm md:text-base mt-5 px-5 text-justify">
              Democratizes quality, secure, and reliable services to enable the
              adoption of digital technology for all business partners quickly,
              easily, and effectively.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
