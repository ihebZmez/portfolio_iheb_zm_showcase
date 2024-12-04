"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Regular imports for server-safe components
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Skills from "@/components/Skills";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";

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

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
