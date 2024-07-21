import React from "react";

import {
  programmer_skills,
  framework_skills,
  testimonials,
  database_skills,
  tools_on_skills,
  know_some_skills,
} from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const Skills = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        ALL MY <span className="text-purple">Skills</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[35rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          {/* Known FrameWork */}
          <div className="pb-10 pt-11 px-2 w-full">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              <h4 className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
                Outils de <span className="text-purple">Framework</span>
              </h4>
              <AnimatedTooltip items={framework_skills} />
            </div>
          </div>

          {/* Known Programme */}
          <div className="pb-5 px-2 w-full">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              <h4 className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
                Langage de <span className="text-purple">Programmation</span>
              </h4>
              <AnimatedTooltip items={programmer_skills} />
            </div>
          </div>

          {/* Known Technologie */}
          <div className="pb-5 px-2 w-full">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              <h4 className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
                Mes <span className="text-purple">Connaissances</span>
              </h4>
              <AnimatedTooltip items={know_some_skills} />
            </div>
          </div>

          {/* Known DataBases */}
          <div className="pb-5 px-2 w-full">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              <h4 className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
                Bases de <span className="text-purple">Données</span>
              </h4>
              <AnimatedTooltip items={database_skills} />
            </div>
          </div>

          {/* Known Tools */}
          <div className="pb-10 px-2 w-full">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
              <h4 className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
                Gestion
                <span className="text-purple">Dépendances</span>
              </h4>
              <AnimatedTooltip items={tools_on_skills} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
