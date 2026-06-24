// src/app/[locale]/page.tsx
"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";

// Regular imports for server-safe components
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Skills from "@/components/Skills";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import GridServices from "@/components/GridServices";

// Dynamic imports for components that might use browser APIs
const GridOptions = dynamic(() => import("@/components/GridOptions"), {
  ssr: false,
});

const GridPersonel = dynamic(() => import("@/components/GridPersonel"), {
  ssr: false,
});

const RecentProjectsSaaS = dynamic(() => import("@/components/RecentProjectsSaaS"), {
  ssr: false,
});

const RecentProjectsWeb = dynamic(() => import("@/components/RecentProjectsWeb"), {
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
  const locale = useLocale();
  const t = useTranslations('HomePage');

  // Get the base URL for canonical
  const baseUrl = "https://portfolio-iheb-zm.vercel.app";

  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <GridPersonel />
          <GridServices />
          <RecentProjectsSaaS />
          <RecentProjectsWeb />
          <Skills />
          <Clients />
          <GridOptions />
          <Experience />
          <Approach />
          <Footer />
        </div>
        <WhatsAppButton
          phoneNumber="+21653853155"
          message={t('whatsappMessage')}
        />
      </main>
    </>
  );
};

export default Home;