"use client";

import { gridItemsPersonel } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useTranslations } from "next-intl";

const GridPersonel = () => {
  const t = useTranslations("GridPersonel");
  const idToKey: Record<number, string> = {
    1: 'communication',
    2: 'timezone'
  };

  return (
    <section id="about" className="section-padding overflow-hidden">
      <BentoGrid className="w-full py-10 sm:py-16 md:py-20">
        {gridItemsPersonel.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={t(idToKey[item.id]) || item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default GridPersonel;