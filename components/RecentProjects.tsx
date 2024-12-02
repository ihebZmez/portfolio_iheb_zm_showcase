"use client";

import { FaLocationArrow } from "react-icons/fa6";
<<<<<<< HEAD

=======
import Image from "next/image";
>>>>>>> all_content_add
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
<<<<<<< HEAD
        Une petite sélection de{" "}
        <span className="text-purple">projets récents</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
=======
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
>>>>>>> all_content_add
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
<<<<<<< HEAD
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
=======
                  <Image src="/bg.png" width={20} height={20} alt="bgimg" />
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
                  width={20}
                  height={20}
                  className="rounded-lg mb-10 object-cover absolute z-10 p-3 m-10"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-2">
>>>>>>> all_content_add
                {item.title}
              </h1>

              <p
<<<<<<< HEAD
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
=======
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-5"
>>>>>>> all_content_add
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
<<<<<<< HEAD
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
=======
                      className="border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-11 w-11 h-11 flex justify-center items-center"
>>>>>>> all_content_add
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
<<<<<<< HEAD
                      <img src={icon} alt="icon5" className="p-2" />
=======
                      <Image
                        src={icon}
                        alt="icon5"
                        width={20}
                        height={20}
                        className="p-1"
                      />
>>>>>>> all_content_add
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
<<<<<<< HEAD
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
=======
                  <a
                    href={item.linkProject}
                    target={"_blank"}
                    className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-6 ring-1 ring-white/100 "
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Voir Site
                    </p>
                  </a>
>>>>>>> all_content_add
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
