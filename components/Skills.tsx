import React from "react";
import { useTranslations } from "next-intl";

import {
  programmer_skills,
  framework_skills,
  database_skills,
  tools_on_skills,
  know_some_skills,
} from "@/data";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const Skills = () => {
  const t = useTranslations('Skills');

  return (
    <section id="skills" className="py-10 md:py-20">
      <h1 className="heading text-2xl md:text-3xl lg:text-4xl mb-8">
        {t('heading')} <span className="text-purple">{t('headingPurple')}</span>
      </h1>

      <div className="flex flex-col items-center w-full">
        <div className="w-full min-h-[500px] md:min-h-[600px] px-4 md:px-6 rounded-md flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* Skills Categories Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Framework Skills */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t('frameworks')} <span className="text-purple">{t('frameworksPurple')}</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={framework_skills} />
              </div>
            </div>

            {/* Programming Languages */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t('programming')} <span className="text-purple">{t('programmingPurple')}</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={programmer_skills} />
              </div>
            </div>

            {/* Technologies */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t('knowledge')} <span className="text-purple">{t('knowledgePurple')}</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={know_some_skills} />
              </div>
            </div>

            {/* Databases */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t('databases')} <span className="text-purple">{t('databasesPurple')}</span>
              </h4>
              <div className="skill-content">
                <AnimatedTooltip items={database_skills} />
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category">
              <h4 className="skill-heading">
                {t('tools')} <span className="text-purple">{t('toolsPurple')}</span>
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