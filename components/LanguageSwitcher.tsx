// src/components/LanguageSwitcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('LanguageSwitcher');
  const [isOpen, setIsOpen] = useState(false);

  const languageNames: Record<string, string> = {
    fr: t('french'),
    en: t('english'),
    ar: t('arabic'),
  };

  const languageFlags: Record<string, string> = {
    fr: '🇫🇷',
    en: '🇬🇧',
    ar: '🇸🇦',
  };

  const switchLanguage = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 border border-white/10"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4 text-white/70" />
        <span className="text-sm text-white/90">{languageFlags[locale]}</span>
        <ChevronDown 
          className={`w-4 h-4 text-white/70 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 bg-black-200/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-[160px] z-50"
          >
            {routing.locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLanguage(l)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-white/5 transition-colors duration-150 ${
                  l === locale ? 'bg-white/10 text-purple-400' : 'text-white/80'
                }`}
              >
                <span className="text-lg">{languageFlags[l]}</span>
                <span className="text-sm">{languageNames[l]}</span>
                {l === locale && (
                  <span className="ml-auto text-purple-400 text-xs">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;