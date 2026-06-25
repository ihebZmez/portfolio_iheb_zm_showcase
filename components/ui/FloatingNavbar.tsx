"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "../LanguageSwitcher";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations("Navigation");

  const nameToKey: Record<string, string> = {
    "Accueil": "home",
    "À Propos": "about",
    "Services": "services",
    "Projets SaaS": "projectsSaaS",
    "Projets Web": "projectsWeb",
    "Compétences": "skills",
    "Témoignages": "testimonials",
    "Entreprises de Niche": "nicheBusiness",
    "Parcours": "journey",
    "Approche": "approach",
    "Contact": "contact",
  };

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed z-[5000] top-4 sm:top-6 md:top-10 inset-x-0 mx-auto",
          "px-3 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5",
          "rounded-lg border border-black/.1",
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          "items-center justify-between gap-2 sm:gap-4",
          "max-w-[95vw] sm:max-w-[90vw] md:max-w-fit",
          "md:min-w-[70vw] lg:min-w-fit",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 overflow-x-auto scrollbar-hide">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                "px-1.5 lg:px-2 py-1"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-xs lg:text-sm !cursor-pointer whitespace-nowrap">
                {t(nameToKey[navItem.name] || 'home')}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/70 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Logo/Home - Visible only on mobile */}
        <div className="md:hidden flex items-center">
          <Link
            href="#"
            className="text-white text-sm font-medium"
          >
            {t('home')}
          </Link>
        </div>

        {/* Language Switcher */}
        <div className="flex-shrink-0">
          <LanguageSwitcher />
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="md:hidden absolute top-full left-2 right-2 mt-2 bg-black-200/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[100]"
            >
              <div className="flex flex-col p-2 gap-1 max-h-[70vh] overflow-y-auto">
                {navItems.map((navItem: any, idx: number) => {
                  // Skip duplicate home link in mobile menu
                  if (navItem.name === "Accueil" && idx === 0) return null;
                  return (
                    <Link
                      key={`mobile-link=${idx}`}
                      href={navItem.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2.5 text-sm text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                    >
                      {t(nameToKey[navItem.name] || 'home')}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};