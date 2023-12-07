import Image from "next/image";
import Marquee from "./Marquee";

export default function Trust() {
  return (
    <div
      id="trust"
      className="w-full h-auto pb-10 flex flex-col items-center mb-20"
    >
      <div id="who" className="flex flex-col mb-20 w-5/6 space-y-10">
        <div className="text-3xl font-semibold">Why Choose Us?</div>
        <div className="flex space-x-10">
          <div className="w-2/6">
            <Image
              className="rounded-xl"
              src={"/who-are-we.webp"}
              width={350}
              height={100}
              alt="office"
            />
          </div>
          <div className="text-justify w-4/6">
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
      <div className="mt-10 text-3xl text-blue-900 font-semibold mb-5">
        Trusted by <span className="text-red-600">100+</span> businesses in
        Indonesia
      </div>
      <div className="text-xl font-semibold mb-10">
        Hundreds of companies have entrusted their digital business on us
      </div>
      <Marquee />
      <button className="bg-blue-900 text-white font-semibold py-3 px-5 rounded-lg hover:opacity-80 active:opacity-60 duration-200 mt-16">
        View More ➜
      </button>
    </div>
  );
}
