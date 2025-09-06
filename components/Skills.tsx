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
    <section id="skills" className="py-10 md:py-20">
      <h1 className="heading text-2xl md:text-3xl lg:text-4xl mb-8">
        MES <span className="text-purple">Compétences</span>
      </h1>

      <div className="flex flex-col items-center w-full">
        <div className="w-full min-h-[500px] md:min-h-[600px] px-4 md:px-6 rounded-md flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* Skills Categories Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Framework Skills */}
            <div className="skill-category">
              <h4 className="skill-heading">
                Outils de <span className="text-purple">Framework</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={framework_skills} />
              </div>
            </div>

            {/* Programming Languages */}
            <div className="skill-category">
              <h4 className="skill-heading">
                Langage de <span className="text-purple">Programmation</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={programmer_skills} />
              </div>
            </div>

            {/* Technologies */}
            <div className="skill-category">
              <h4 className="skill-heading">
                Mes <span className="text-purple">Connaissances</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={know_some_skills} />
              </div>
            </div>

            {/* Databases */}
            <div className="skill-category">
              <h4 className="skill-heading">
                Bases de <span className="text-purple">Données</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={database_skills} />
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <h4 className="skill-heading">
                Gestion <span className="text-purple">Dépendances</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={tools_on_skills} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
