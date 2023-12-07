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
        <source
          src="https://sandbox.minio.asaba.co.id/asaba/banner/7f47fe42-ea1e-49a6-8a01-666a988603bd.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=asaba%2F20231206%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231206T122936Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2b8ff72c83c61e09de2f4c3eacee2115c394003f2d59c338af4283b1d8fa7990"
          type="video/mp4"
        ></source>
      </video>
      <div className="bg-blue-700 tracking-wide w-full h-[760px] bg-opacity-40 absolute top-0 flex flex-col items-center justify-end text-white text-center">
        <div className="text-5xl mt-10 font-semibold leading-tight">
          Helping Business Partner to Accelerate <br></br> Business Innovation
        </div>
        <div className="mt-10 leading-loose">
          In this digital era, most businesses already try to adopt digital tech
          into their<br></br>business flow—some success and most fail—but we can
          help you to achieve that<br></br>with ease.
        </div>
        <button className="bg-white text-blue-700 py-3 px-5 font-semibold rounded-xl mt-10 hover:bg-blue-700 hover:text-white duration-200 mb-[10%]">
          Contact Us
        </button>
        <div className="bg-white w-full h-[10%] rounded-t-full"></div>
      </div>
    </>
  );
}
