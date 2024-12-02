import { FaLocationArrow } from "react-icons/fa6";

<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> all_content_add
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
<<<<<<< HEAD
        <img
          src="/footer-grid.svg"
          alt="grid"
=======
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={128}
          height={128}
>>>>>>> all_content_add
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
<<<<<<< HEAD
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
=======
          Prêt à faire passer votre présence{" "}
          <span className="text-purple">numérique</span> au niveau{" "}
          <span className="text-purple">supérieur </span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi aujourd&apos;hui et discutons de la manière dont je peux
          vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:ihebzmerli@gmail.com">
          <MagicButton
            title="Laisse-moi t'aider à augmenter tes revenus"
>>>>>>> all_content_add
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
<<<<<<< HEAD
          Copyright © 2024 Adrian Hajdin
=======
          Droits © 2024 <span className="text-purple">IH</span> Zm
>>>>>>> all_content_add
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
<<<<<<< HEAD
              <img src={info.img} alt="icons" width={20} height={20} />
=======
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </a>
>>>>>>> all_content_add
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
