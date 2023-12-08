"use client";

import useSWR from "swr";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import Image from "next/image";
import StaticNavbar from "@/components/StaticNavbar";
import Footer from "@/components/Footer";

export default function Teams() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://randomuser.me/api/?results=8",
    fetcher
  );
  const position = [
    "Software Engineer",
    "Web Designer",
    "QA Engineer",
    "Project Manager",
    "Front End Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Tech Architect",
  ];

  if (error) return <Error />;
  if (isLoading) return <Loading />;

  return (
    <>
      <StaticNavbar />
      <div className="pt-16 flex flex-col w-screen h-screen overflow-x-hidden">
        <div className="text-3xl font-semibold text-center">Meet Our Teams</div>
        <div className="text-lg text-center">Best Programmers from Da West</div>
        <div className="flex w-full justify-center items-center mt-14 space-x-5 flex-wrap">
          {data.results.map((user, index) => {
            return (
              <div
                key={index}
                id="user-container"
                className="w-1/5 border rounded-t-full border-blue-700 h-80 flex flex-col py-8 px-2 items-center mb-5 group hover:bg-blue-800 duration-300 cursor-help"
              >
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    className="rounded-full"
                    src={user.picture.large}
                    fill={true}
                    alt="user"
                  />
                </div>
                <div
                  id="user-name"
                  className="font-semibold text-lg group-hover:text-white"
                >
                  {user.name.first} {user.name.last}
                </div>
                <div className="font-semibold text-slate-700 group-hover:text-white">
                  {position[index]}
                </div>
                <div className="text-sm group-hover:text-white">
                  {user.email}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
