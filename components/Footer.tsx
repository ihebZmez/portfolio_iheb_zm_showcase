import { FaLocationArrow } from "react-icons/fa6";

import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1920}
          height={1080}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t('heading1')}
          <span className="text-purple">{t('heading2')}</span>{t('heading3')}
          <span className="text-purple">{t('heading4')} ?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t('desc')}
        </p>
        <a href="mailto:ihebzmerli@gmail.com">
          <MagicButton
            title={t('cta')}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {t('copyright')} <span className="text-purple">IH</span> Zm
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <Image src={info.img} alt="icons" width={500} height={500} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
