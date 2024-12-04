"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Une Petite Sélection De{" "}
        <span className="text-purple">Projets Récents</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center w-full  max-w-9xl mx-auto gap-16 mt-20 p-4">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.linkName} href={item.linkProject}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" width={1000} height={1000} alt="bgimg" />
                </div>
                {/* 
                <Image
                  src={item.img}
                  alt="cover"
                  width={128}
                  height={128}
                  className="z-10 absolute bottom-0"
                />
                 */}
                <Image
                  src={item.img}
                  alt="blog thumbnail"
                  width={500}
                  height={500}
                  className="rounded-lg mb-10 object-cover absolute z-10 p-3 m-10"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-2">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-5"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-11 w-11 h-11 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        width={500}
                        height={500}
                        className="p-1"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.linkProject}
                    target={"_blank"}
                    className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-6 ring-1 ring-white/100 "
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Voir Site
                    </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
