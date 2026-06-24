// src/hooks/useTranslationHelper.ts
'use client';

import { useTranslations } from 'next-intl';

export const useTranslationHelper = () => {
  const t = useTranslations();
  
  // Helper function to get translated text with fallback
  const getTranslatedText = (key: string, fallback?: string) => {
    try {
      return t(key);
    } catch {
      return fallback || key;
    }
  };
  
  return { getTranslatedText };
};