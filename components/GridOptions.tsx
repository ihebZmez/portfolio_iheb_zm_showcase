"use client";

import { gridItemsOptions } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useTranslations } from "next-intl";

const GridOptions = () => {
  const t = useTranslations("GridOptions");
  const idToKey: Record<number, string> = {
    5: 'finance',
    3: 'skills',
    7: 'price',
    4: 'administration',
    8: 'security',
    9: 'formulate',
    10: 'quality',
    11: 'sales',
    12: 'help',
    6: 'contact'
  };

  const idToDescKey: Record<number, string> = {
    10: 'modeling',
    3: 'tools'
  };

  return (
    <section id="nicheBusiness">
      <BentoGrid className="w-full py-20">
        {gridItemsOptions.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={t(idToKey[item.id]) || item.title}
            description={idToDescKey[item.id] ? t(idToDescKey[item.id]) : item.description}
            // remove icon prop
            // remove original classname condition
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

export default GridOptions;
