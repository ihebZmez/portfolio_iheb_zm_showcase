"use client";

import React from "react";
<<<<<<< HEAD

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
=======
import Image from "next/image";

import {
  framework_skills,
  programmer_skills,
  companies,
  testimonials,
  database_skills,
  know_some_skills,
  tools_on_skills,
} from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
>>>>>>> all_content_add

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
<<<<<<< HEAD
        Mots aimables de
        <span className="text-purple">clients satisfaits</span>
=======
        Mots Aimables De <span className="text-purple">Clients Satisfaits</span>
>>>>>>> all_content_add
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
<<<<<<< HEAD
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
=======
                <Image
                  src={company.img}
                  alt={company.name}
                  width={20}
                  height={20}
                  className="md:w-10 w-5"
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={50}
>>>>>>> all_content_add
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
