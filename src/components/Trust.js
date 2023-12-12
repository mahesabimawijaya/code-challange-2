import Image from "next/image";
import Marquee from "./Marquee";

export default function Trust() {
  return (
    <div
      id="trust"
      className="w-full h-auto pb-10 flex flex-col items-center mb-20"
    >
      <div id="who" className="flex flex-col mb-20 w-5/6 space-y-10">
        <div className="mt-20 text-xl text-center md:text-3xl md:mt-9 lg:text-start xl:mt-0 font-semibold">
          Why Choose Us?
        </div>
        <div className="flex flex-col items-center md:flex md:flex-row md:space-x-10 lg:items-start">
          <div className="relative w-60 h-32 md:w-72 md:h-40 lg:w-72 lg:h-44 xl:w-96 xl:h-56">
            <Image
              className="rounded-xl"
              src={"/who-are-we.webp"}
              fill={true}
              alt="office"
            />
          </div>
          <div className="text-justify text-sm mt-10 md:mt-0 lg:text-base 2xl:text-xl w-4/6">
            PT. ASABA Digital Innotech berdiri pada tahun 1990 dengan misi
            menciptakan nilai bisnis bagi pelanggan melalui pemberian solusi
            atas kompleksnya masalah integrasi sistem yang dihadapi dalam era
            serba teknologi dewasa ini. PT. ASABA Digital Innotech
            memformulasikan solusi inovatif dan menyajikan kerangka model yang
            mengombinasikan sumber daya manusia, teknologi, serta fungsi bisnis
            .
          </div>
        </div>
      </div>
      <div className="mt-10 text-xl text-center mb-2 md:text-3xl text-blue-900 font-semibold md:mb-5">
        Trusted by <span className="text-red-600">100+</span> businesses in
        Indonesia
      </div>
      <div className="text-center md:text-xl font-semibold mb-10">
        Hundreds of companies have entrusted their digital business on us
      </div>
      <Marquee />
    </div>
  );
}
