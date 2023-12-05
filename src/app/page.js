import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[100%] z-[-1] h-[720px] object-cover object-center xl:h-[100%]"
      >
        <source
          src="https://sandbox.minio.asaba.co.id/asaba/banner/7f47fe42-ea1e-49a6-8a01-666a988603bd.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=asaba%2F20231205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231205T000714Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0bc2ee9b964ee2e4e57b7a3a06b1a47719747021bcffdcc7e1737ea6f260b4cb"
          type="video/mp4"
        ></source>
      </video>
      <div className="bg-blue-700 tracking-wide w-full h-[760px] bg-opacity-40 absolute top-0 flex flex-col items-center justify-center text-white text-center">
        <div className="text-5xl mt-10 font-semibold leading-tight">
          Helping Business Partner to Accelerate <br></br> Business Inovation
        </div>
        <div className="mt-10 leading-loose">
          In this digital era, most businesses already try to adopt digital tech
          into their<br></br>business flow—some success and most fail—but we can
          help you to achieve that<br></br>with ease.
        </div>
        <button className="bg-white text-blue-700 py-3 px-5 font-semibold rounded-xl mt-10 hover:bg-blue-700 hover:text-white duration-200 ">
          Contact Us
        </button>
      </div>
      <div
        id="trust"
        className="w-full h-auto pb-10 flex flex-col items-center"
      >
        <div className="mt-16 text-3xl text-blue-900 font-semibold mb-5">
          Trusted by <span className="text-red-600">100+</span> businesses in
          Indonesia
        </div>
        <div className="text-xl font-semibold mb-5">
          Hundreds of companies have entrusted their digital business on us
        </div>
        <Marquee />
        <button className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-70 duration-200 mt-10">
          View More ➜
        </button>
      </div>
    </>
  );
}
