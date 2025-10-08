"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import Head from "next/head";

// Regular imports for server-safe components
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Skills from "@/components/Skills";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import GridServices from "@/components/GridServices";

// Dynamic imports for components that might use browser APIs
const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});

const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  {
    ssr: false,
  }
);

const WhatsAppButton = dynamic(
  () =>
    import("@/components/ui/WhatsAppButton").then((mod) => mod.WhatsAppButton),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Iheb Zmerli - Développeur Full Stack & Solutions Digitales en Tunisie
        </title>
        <meta
          name="description"
          content="Développeur full stack expert en Tunisie. Solutions de comptabilité, facturation, RH, audit et développement web. Logiciels sur mesure pour entreprises tunisiennes."
        />
        <meta
          name="keywords"
          content="développeur full stack, Tunisie, comptabilité, facturation, RH, audit, développement web, logiciels, entreprise, digital, portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://portfolio-iheb-zm.vercel.app" />
      </Head>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          {/* TODO remove comments if you out of job */}
          {/* <GridServices /> */}
          <Grid />
          {/* TODO remove comments if you out of job */}
          {/* <RecentProjects /> */}
          <Clients />
          <Skills />
          <Experience />
          <Approach />
          <Footer />
        </div>
        <WhatsAppButton
          phoneNumber="+21653853155"
          message="Bonjour ! Je suis intéressé(e) par vos services. Pouvons-nous en discuter?"
        />
      </main>
    </>
  );
};

export default Home;
