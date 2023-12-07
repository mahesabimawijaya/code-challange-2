import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center font-mono">
      <div className="text-4xl font-semibold text-red-700">
        Data Failed to Load
      </div>
      <div className="font-semibold text-xl mt-3">
        There is error either on the API or source code
      </div>
      <Link href={"/"}>
        <button className="py-2 px-4 font-semibold text-white bg-blue-900 mt-5 rounded-xl font-sans">
          Back to Home
        </button>
      </Link>
      <div className="relative w-1/3 h-2/3 flex items-end">
        <Image src={"/sad.jpg"} fill={true} alt="sad" />
      </div>
    </div>
  );
}
