import Image from "next/image";

export default function Review() {
  return (
    <>
      <div className="flex flex-col py-20 w-full">
        <div className="text-xl font-semibold text-center lg:text-3xl">
          What They Said
        </div>
        <div
          id="review-list"
          className="flex flex-col items-center space-y-5 mt-10 lg:flex lg:flex-row lg:flex-wrap lg:space-x-5 lg:justify-center lg:space-y-0"
        >
          <div
            id="review card"
            className="w-80 h-24 lg:w-96 border rounded-l-full rounded-r-full px-3 flex shadow-xl lg:mb-8 xl:mb-0"
          >
            <div id="review-left" className="w-1/4 flex items-center">
              <div className="relative w-full h-[70px] lg:h-[85px] ">
                <Image
                  className="rounded-full object-cover object-right"
                  src={"/pp1.webp"}
                  fill={true}
                  alt="pp1"
                />
              </div>
            </div>
            <div
              id="review-right"
              className="w-3/4 flex flex-col justify-center space-y-1 px-3"
            >
              <div className="font-semibold text-xs lg:text-base">
                Anthony Khalimov
              </div>
              <div className="text-xs lg:text-sm">
                Probably the best IT Service out there.
              </div>
            </div>
          </div>
          <div
            id="review card"
            className="w-80 h-24 lg:w-96 border rounded-l-full rounded-r-full px-3 flex shadow-xl"
          >
            <div id="review-left" className="w-1/4 flex items-center">
              <div className="relative w-full h-[70px] lg:h-[85px]">
                <Image
                  className="rounded-full object-cover object-right"
                  src={"/pp2.jpeg"}
                  fill={true}
                  alt="pp1"
                />
              </div>
            </div>
            <div
              id="review-right"
              className="w-3/4 flex flex-col justify-center space-y-1 px-3"
            >
              <div className="font-semibold text-xs lg:text-base">
                Skibidi Martinez
              </div>
              <div className="text-xs lg:text-sm">Two words, no mistake.</div>
            </div>
          </div>
          <div
            id="review card"
            className="w-80 h-24 lg:w-96 border rounded-l-full rounded-r-full px-3 flex shadow-xl"
          >
            <div id="review-left" className="w-1/4 flex items-center">
              <div className="relative w-full h-[70px] lg:h-[85px]">
                <Image
                  className="rounded-full object-cover"
                  src={"/pp3.jpg"}
                  fill={true}
                  alt="pp1"
                />
              </div>
            </div>
            <div
              id="review-right"
              className="w-3/4 flex flex-col justify-center space-y-1 px-3"
            >
              <div className="font-semibold text-xs lg:text-base">
                Felix Lengyel
              </div>
              <div className="text-xs lg:text-sm">Geus mantep lah ieu mah.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
