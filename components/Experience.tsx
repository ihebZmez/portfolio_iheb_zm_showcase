import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Add this import

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const openPDF = () => {
    // your PDFs is in the public/doc folder
    // window.open("/doc/2025_Iheb_Zmerli_Glob_ang_cv.pdf", "_blank");  // option for cv langue
    window.open(
      "/doc/Iheb Zmerli – Ang Full Stack Developer Resume.pdf",
      "_blank"
    );
  };

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Mon <span className="text-purple">experience professionnelle</span>
      </h1>
      <p className="text-center pt-14 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        Si vous souhaitez voir plus de détails, comme un CV{" "}
        <motion.span
          className="text-purple cursor-pointer"
          onClick={openPDF}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: ["0%", "-25%", "0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          CLIQUE ICI
        </motion.span>
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={500}
                height={500}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 md:text-lg mt-3 font-semibold">
                  {card.desc}
                </p>
                <p className="text-start text-yellow-600 md:text-base mt-3 font-semibold">
                  {card.tasks_desc.split(" | ").map((task, index, array) => (
                    <React.Fragment key={index}>
                      {task}
                      {index < array.length - 1 && (
                        <span className="text-white"> | </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
