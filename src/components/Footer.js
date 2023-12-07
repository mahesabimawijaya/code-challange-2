import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div
        id="footer-top"
        className="w-full h-20 bg-[url('/footer-texture.avif')] mt-20 rounded-t-full border-t border-t-blue-900"
      ></div>
      <div
        id="footer"
        className="w-full h-96 bg-[url('/footer-texture.avif')] flex flex-col justify-between"
      >
        <div className="flex w-full">
          <div className="w-2/5 flex flex-col items-end pr-20">
            <div className="relative w-72 h-14">
              <Image
                src={"/asaba-innotech-logo.webp"}
                fill={true}
                alt="asaba-logo"
              />
            </div>
            <div className="relative w-72 h-16 mt-1">
              <Image src={"/footer_iso_2.webp"} fill={true} alt="asaba-logo" />
            </div>
          </div>
          <div className="w-3/5 flex flex-col">
            <div className="flex justify-evenly pt-4">
              <div className="flex flex-col">
                <div className="font-semibold text-blue-950 mb-3">
                  Product & Services
                </div>
                <div className="flex-flex-col space-y-2 text-sm text-blue-900">
                  <div>IT Service</div>
                  <div>Financial Device</div>
                  <div>Financial Service</div>
                  <div>Cyber Security</div>
                  <div>Digital Business</div>
                  <div>Digital Product</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-blue-950 mb-3">Company</div>
                <div className="flex-flex-col space-y-2 text-sm text-blue-900">
                  <div>About</div>
                  <div>Product & Services</div>
                  <div>Teams</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-blue-950 ml-7 mb-3">
                  Get In Touch
                </div>
                <div className="flex-flex-col space-y-4 text-sm text-blue-900">
                  <div className="flex space-x-2">
                    <div className="relative w-5 h-5">
                      <Image src={"/location.png"} fill={true} alt="location" />
                    </div>
                    <div className="w-60">
                      Ebenezer Building, Jl.Setiabudi Selatan No.1, Jakarta,
                      Indonesia 12920
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative w-5 h-5">
                      <Image
                        src={"/telephone.png"}
                        fill={true}
                        alt="location"
                      />
                    </div>
                    <div className="w-60">+62 21 5799 4700</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="relative w-5 h-5">
                      <Image src={"/mail.png"} fill={true} alt="location" />
                    </div>
                    <div className="w-60">admin@asaba.co.id</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full px-44 py-5 bg-white text-blue-950 text-sm ">
          © 2022 ASABA INNOTECH. All Right Reserved
        </div>
      </div>
    </>
  );
}
