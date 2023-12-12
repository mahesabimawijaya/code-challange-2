import Link from "next/link";

export default function Hero() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[100%] z-[-1] h-[720px] object-cover object-center xl:h-[100%]"
      >
        <source src="asaba.mp4" type="video/mp4"></source>
      </video>
      <div className="bg-blue-700 tracking-wide w-full h-[760px] 2xl:h-[1300px] bg-opacity-40 absolute top-0 flex flex-col items-center justify-end text-white text-center">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-8xl mt-10 font-semibold leading-tight">
          Helping Business Partner to Accelerate <br></br> Business Innovation
        </div>
        <div className="text-sm w-60 mt-5 md:mt-10 md:w-1/2 lg:text-base xl:text-lg 2xl:text-3xl leading-loose">
          In this digital era, most businesses already try to adopt digital tech
          into their business flow—some success and most fail—but we can help
          you to achieve that with ease.
        </div>
        <button className="bg-white text-blue-700 text-sm py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-5 xl:py-3 xl:px-6 font-semibold rounded-xl mt-10 hover:bg-blue-700 hover:text-white duration-200 mb-[30%] md:mb-[20%] lg:mb-[15%] xl:mb-[10%] 2xl:mb-[15%] 2xl:text-3xl 2xl:py-5 2xl:px-10">
          <Link href={"/#contact"}>Contact Us</Link>
        </button>
        <div className="bg-white w-full h-[10%] rounded-t-full"></div>
      </div>
    </>
  );
}
