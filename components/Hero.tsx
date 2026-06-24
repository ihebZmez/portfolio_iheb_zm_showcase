import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          {/* Tagline */}
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-150 mb-6">
            {t('tagline')}
          </p>

          {/* Main headline - What do you do? */}
          <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <TextGenerateEffect
              words={t('headline')}
              className="text-center"
            />
          </h1>

          {/* Who do you help? + Business problem */}
          <div className="space-y-4 text-center mb-8">
            <p className="text-xl md:text-2xl text-gray-300">
              <span className="text-purple font-semibold">{t('helpPrefix')}</span>{t('helpTarget')}
            </p>
            <p className="text-lg md:text-xl text-gray-400">
              {t('problemText')}<span className="text-white font-medium">{t('problem1')}</span>
              {t('problemText2')}<span className="text-white font-medium">{t('problem2')}</span>
              {t('problemText3')}<span className="text-white font-medium">{t('problem3')}</span>
            </p>
          </div>

          {/* Solution + Trust indicators */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 w-full">
            <p className="text-center text-gray-200 mb-4">
              {t('solutionText')}<span className="text-purple font-semibold">{t('solutionHighlight')}</span> 
              {t('solutionSuffix')}
            </p>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-purple/20 rounded-full text-purple">{t('badge1')}</span>
              <span className="px-3 py-1 bg-purple/20 rounded-full text-purple">{t('badge2')}</span>
              <span className="px-3 py-1 bg-purple/20 rounded-full text-purple">{t('badge3')}</span>
              <span className="px-3 py-1 bg-purple/20 rounded-full text-purple">{t('badge4')}</span>
            </div>
          </div>

          {/* CTA Button */}
          <a href="#work">
            <MagicButton
              title={t('cta')}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;