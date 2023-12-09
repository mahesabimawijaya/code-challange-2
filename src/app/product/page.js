import Footer from "@/components/Footer";
import StaticNavbar from "@/components/StaticNavbar";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <>
      <StaticNavbar />
      <div className="pt-16 flex flex-col items-center">
        <div className="text-xl lg:text-3xl font-semibold">
          <span className="text-red-800">Product</span> &{" "}
          <span className="text-blue-800">Services</span>
        </div>
        <div
          id="product-list"
          className="flex flex-col space-y-8 mt-10 lg:mt-20 px-3 md:px-20 lg:px-48 w-full mb-20"
        >
          <Link href={"/product/it-service"}>
            <div
              id="product-container"
              className="flex space-x-8 w-full h-28 lg:h-32 rounded-xl border shadow-xl bg-blue-900 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
            >
              <div className="relative h-full w-1/5">
                <Image
                  className="object-cover object-center rounded-l-xl"
                  src={"/it-service.webp"}
                  fill={true}
                  alt="it-service"
                />
              </div>
              <div className="flex flex-col py-8 justify-center space-y-2 w-4/5">
                <div className="font-semibold text-xl lg:text-2xl font-sans">
                  IT Service
                </div>
                <div className="text-sm lg:text-base">
                  Technology and services such as Modern Workspace
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/product/financial-devices"}>
            <div
              id="product-container"
              className="flex space-x-8 w-full h-28 lg:h-32 rounded-xl border shadow-xl bg-blue-900 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
            >
              <div className="relative h-full w-1/5">
                <Image
                  className="object-cover object-center rounded-l-xl"
                  src={"/financial-device.webp"}
                  fill={true}
                  alt="it-service"
                />
              </div>
              <div className="flex flex-col py-8 justify-center space-y-2 w-4/5">
                <div className="font-semibold text-xl lg:text-2xl font-sans">
                  Financial Solution Devices
                </div>
                <div className="text-sm lg:text-base">
                  A technology system for digitally collecting and recording
                  data in the banking industry
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/product/financial-platform"}>
            <div
              id="product-container"
              className="flex space-x-8 w-full h-28 lg:h-32 rounded-xl border shadow-xl bg-blue-900 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
            >
              <div className="relative h-full w-1/5">
                <Image
                  className="object-cover object-center rounded-l-xl"
                  src={"/financial-service.jpg"}
                  fill={true}
                  alt="it-service"
                />
              </div>
              <div className="flex flex-col py-8 justify-center space-y-2 w-4/5">
                <div className="font-semibold text-xl lg:text-2xl font-sans">
                  Financial Services Platform
                </div>
                <div className="text-sm lg:text-base">
                  Technology infrastructure of financial service providers to
                  offer banking services to their customers through digital
                  channels
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/product/cybersecurity"}>
            <div
              id="product-container"
              className="flex space-x-8 w-full h-28 lg:h-32 rounded-xl border shadow-xl bg-blue-900 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
            >
              <div className="relative h-full w-1/5">
                <Image
                  className="object-cover object-center rounded-l-xl"
                  src={"/cyber-security.jpg"}
                  fill={true}
                  alt="it-service"
                />
              </div>
              <div className="flex flex-col py-8 justify-center space-y-2 w-4/5">
                <div className="font-semibold text-xl lg:text-2xl font-sans">
                  Cybersecurity
                </div>
                <div className="text-sm lg:text-base">
                  Our review of your application weaknesses, including the
                  needed remedy to prevent any unnecessary action in the future.
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/product/digital-platform"}>
            <div
              id="product-container"
              className="flex space-x-8 w-full h-28 lg:h-32 rounded-xl border shadow-xl bg-blue-900 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
            >
              <div className="relative h-full w-1/5">
                <Image
                  className="object-cover object-center rounded-l-xl"
                  src={"/digital-business.jpeg"}
                  fill={true}
                  alt="it-service"
                />
              </div>
              <div className="flex flex-col py-8 justify-center space-y-2 w-4/5">
                <div className="font-semibold text-xl lg:text-2xl font-sans">
                  Digital Business Platform
                </div>
                <div className="text-sm lg:text-base">
                  Solution for access to a wide range of creative applications
                  and services.
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/product/digital-development"}>
            <div
              id="product-container"
              className="flex space-x-8 w-full h-28 lg:h-32 rounded-xl border shadow-xl bg-blue-900 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
            >
              <div className="relative h-full w-1/5">
                <Image
                  className="object-cover object-center rounded-l-xl"
                  src={"/digital-product.jpg"}
                  fill={true}
                  alt="it-service"
                />
              </div>
              <div className="flex flex-col py-8 justify-center space-y-2 w-4/5">
                <div className="font-semibold text-xl lg:text-2xl font-sans">
                  Digital Product Development
                </div>
                <div className="text-sm lg:text-base">
                  The process of creating and developing a website from scratch
                  to becoming a ready-to-use website.
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}
