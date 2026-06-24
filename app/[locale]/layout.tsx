// src/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from "next/font/google";
import Script from "next/script";
import { routing } from "@/i18n/routing";

import "../globals.css";
import { ThemeProvider } from "../provider";

const inter = Inter({ subsets: ["latin"] });

// Generate metadata dynamically based on locale
export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'HomePage' });

  const localeMap: Record<string, string> = {
    fr: 'fr_TN',
    en: 'en_US',
    ar: 'ar_TN'
  };

  const currentLocaleStr = localeMap[locale] || 'fr_TN';

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: "Iheb Zmerli" }],
    creator: "Iheb Zmerli",
    publisher: "Iheb Zmerli",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: currentLocaleStr,
      url: `https://portfolio-iheb-zm.vercel.app/${locale}`,
      title: t('title'),
      description: t('description'),
      siteName: "Iheb Zmerli Portfolio",
      alternateLocale: routing.locales.filter(l => l !== locale),
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      canonical: `https://portfolio-iheb-zm.vercel.app/${locale}`,
      languages: {
        'fr': 'https://portfolio-iheb-zm.vercel.app/fr',
        'en': 'https://portfolio-iheb-zm.vercel.app/en',
        'ar': 'https://portfolio-iheb-zm.vercel.app/ar',
        'x-default': 'https://portfolio-iheb-zm.vercel.app/fr',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  // Determine RTL for Arabic
  const isRTL = locale === 'ar';

  return (
    <html 
      lang={locale} 
      dir={isRTL ? 'rtl' : 'ltr'} 
      suppressHydrationWarning
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MWGW2FL7BG"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MWGW2FL7BG');
          `}
        </Script>
        
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="MjUjqo5MP1kfsYfRKhF6OTb1f6IOSi_RCgtX_Ls6GSU"
        />
        
        {/* Hreflang tags for SEO */}
        {routing.locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://portfolio-iheb-zm.vercel.app/${l}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://portfolio-iheb-zm.vercel.app/fr"
        />

        {/* Favicon */}
        <link rel="icon" href="/I-Zm.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>

        {/* Tawk.to Script */}
        <Script id="tawkto-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/683efa04dbbab1190c33454e/1isr018bc';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}