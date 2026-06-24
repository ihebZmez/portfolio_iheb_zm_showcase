"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

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

const Clients = () => {
  const t = useTranslations("Testimonials");
  const nameToKey: Record<string, string> = {
    "Ali KANZARI": "ali",
    "Anis MSAHLI": "anis",
    "Mohamed AYARI": "mohamed",
    "Karem BELKHIRIA": "karem",
    "Feres FOUDHAILI": "feres"
  };

  const translatedTestimonials = testimonials.map(item => ({
    ...item,
    quote: nameToKey[item.name] ? t(`${nameToKey[item.name]}.quote`) : item.quote,
    title: nameToKey[item.name] ? t(`${nameToKey[item.name]}.title`) : item.title
  }));

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {t('heading') || 'Mots Aimables De'} <span className="text-purple">{t('headingPurple') || 'Clients Satisfaits'}</span>
      </h1>

      <div className="flex flex-col items-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <div className="min-h-[40vh] h-fit rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={translatedTestimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] gap-1 sm:gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  width={20}
                  height={20}
                  className="w-4 sm:w-6 md:w-8 lg:w-10"
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={50}
                  className="w-16 sm:w-20 md:w-24 lg:w-32"
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
