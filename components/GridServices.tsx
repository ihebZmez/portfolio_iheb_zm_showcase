"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { gridServicesItems } from "@/data";

const GridServices = () => {
  const t = useTranslations("GridServices");
  const [activeId, setActiveId] = useState(1);
  const active = gridServicesItems.find((s) => s.id === activeId);

  const idToKey: Record<number, string> = {
    1: 'webDevelopment',
    2: 'ecommerce',
    3: 'saas',
    4: 'maintenance',
    5: 'hosting',
    6: 'n8n'
  };

  const sectionTitleToKey: Record<string, string> = {
    "Introduction": "introduction",
    "Types de sites": "types",
    "Avantages": "advantages",
    "Responsive Design": "responsive",
    "Fonctionnalités": "features",
    "Intégrations": "integrations",
    "Services": "services",
    "Importance": "importance",
    "Infrastructure": "infrastructure",
    "Performance": "performance",
    "Overview": "overview",
    "Workflow Automation": "workflow",
    "Deployment Options": "deployment"
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Services Digitaux Complets
          </h2>
          <p className="text-gray-400 mt-3">
            Explorez mes solutions comme une expérience interactive
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10">

          {/* LEFT SIDEBAR (STICKY) */}
          <div className="md:col-span-4 sticky top-24 h-fit space-y-3">

            {gridServicesItems.map((item, index) => {
              const isActive = item.id === activeId;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  whileHover={{ scale: 1.03 }}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                  }}
                  className={`
                    cursor-pointer p-4 rounded-xl border
                    bg-gradient-to-br ${item.color}
                    transition-all
                    ${isActive ? "border-white/40" : "border-white/10"}
                  `}
                >

                  {/* ICON + TITLE */}
                  <div className="flex items-center gap-5 mb-1">
                    <Icon className="text-white" />
                    <h3 className="text-white font-semibold">
                      {t(`${idToKey[item.id]}.title`) || item.title}
                    </h3>
                  </div>

                  <div className="h-1 w-full bg-white/10 rounded mt-2">
                    <div
                      className="h-1 bg-purple-500 rounded transition-all"
                      style={{
                        width: isActive ? "100%" : "30%",
                      }}
                    />
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* RIGHT CONTENT (CASE STUDY MODE) */}
          <motion.div
            key={active?.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-10 text-white"
          >

            {/* CASE STUDY TITLE */}
            <h2 className="text-2xl font-bold mb-6 text-purple-300">
              Étude de cas : {active ? t(`${idToKey[active.id]}.title`) : ''}
            </h2>

            {/* SECTIONS */}
            <div className="space-y-8">

              {active?.sections.map((section, i) => (
                <div key={i}>

                  {/* TYPEWRITER HEADER */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    <Typewriter
                      words={[section.title]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={40}
                      deleteSpeed={0}
                      delaySpeed={1000}
                    />
                  </h3>

                  {/* CONTENT */}
                  <p className="text-gray-300 leading-relaxed">
                    {active && sectionTitleToKey[section.title] 
                      ? t(`${idToKey[active.id]}.sections.${sectionTitleToKey[section.title]}`) 
                      : section.content}
                  </p>

                </div>
              ))}

            </div>

            {/* CTA */}
            <button className="mt-10 w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition">
              Demander un devis
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GridServices;