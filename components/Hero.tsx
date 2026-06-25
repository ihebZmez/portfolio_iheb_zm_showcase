import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className="section-padding-top pb-10 sm:pb-16 md:pb-20 pt-20 sm:pt-28 md:pt-36">
      {/* Spotlights - Responsive positioning */}
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

      {/* Grid background - Responsive sizing */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative mt-10 sm:mt-16 md:my-20 z-10">
        <div className="max-w-[95vw] sm:max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center padding-responsive">
          
          {/* Tagline - Responsive text */}
          <p className="uppercase tracking-widest text-xxs sm:text-xs text-center text-blue-100 max-w-150 mb-4 sm:mb-6">
            {t('tagline')}
          </p>

          {/* Main headline - Responsive text sizes */}
          <h1 className="text-center heading-clamp font-bold text-white mb-4 sm:mb-6">
            <TextGenerateEffect
              words={t('headline')}
              className="text-center leading-tight sm:leading-normal"
            />
          </h1>

          {/* Who do you help? + Business problem - Responsive spacing */}
          <div className="space-y-3 sm:space-y-4 text-center margin-responsive">
            <p className="text-responsive-lg text-gray-300 px-2">
              <span className="text-purple font-semibold">{t('helpPrefix')}</span>
              <span className="text-gray-300">{t('helpTarget')}</span>
            </p>
            <p className="text-responsive text-gray-400 px-2">
              {t('problemText')}
              <span className="text-white font-medium">{t('problem1')}</span>
              {t('problemText2')}
              <span className="text-white font-medium">{t('problem2')}</span>
              {t('problemText3')}
              <span className="text-white font-medium">{t('problem3')}</span>
            </p>
          </div>

          {/* Solution + Trust indicators - Responsive padding and text */}
          <div className="bg-white/5 backdrop-blur-sm card-responsive mb-6 sm:mb-8 w-full">
            <p className="text-center text-gray-200 mb-3 sm:mb-4 text-responsive px-2">
              {t('solutionText')}
              <span className="text-purple font-semibold">{t('solutionHighlight')}</span> 
              {t('solutionSuffix')}
            </p>
            
            {/* Trust badges - Responsive wrapping */}
            <div className="flex-wrap-responsive">
              <span className="px-2 sm:px-3 py-1 bg-purple/20 rounded-full text-purple whitespace-nowrap text-xxs sm:text-sm">
                {t('badge1')}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-purple/20 rounded-full text-purple whitespace-nowrap text-xxs sm:text-sm">
                {t('badge2')}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-purple/20 rounded-full text-purple whitespace-nowrap text-xxs sm:text-sm">
                {t('badge3')}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-purple/20 rounded-full text-purple whitespace-nowrap text-xxs sm:text-sm">
                {t('badge4')}
              </span>
            </div>
          </div>

          {/* CTA Button - Responsive sizing */}
          <div className="transform hover:scale-105 transition-transform duration-200 touch-friendly">
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
    </div>
  );
};

export default Hero;