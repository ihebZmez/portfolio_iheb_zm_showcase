import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Iheb Zmerli - Développeur Full Stack & Solutions Digitales en Tunisie",
  description:
    "Développeur full stack expert en Tunisie. Solutions de comptabilité, facturation, RH, audit et développement web. Logiciels sur mesure pour entreprises tunisiennes.",
  keywords:
    "développeur full stack, Tunisie, comptabilité, facturation, RH, audit, développement web, logiciels, entreprise, digital",
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
    locale: "fr_TN",
    url: "https://portfolio-iheb-zm.vercel.app",
    title:
      "Iheb Zmerli - Développeur Full Stack & Solutions Digitales en Tunisie",
    description:
      "Développeur full stack expert en Tunisie. Solutions de comptabilité, facturation, RH, audit et développement web. Logiciels sur mesure pour entreprises tunisiennes.",
    siteName: "Iheb Zmerli Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Iheb Zmerli - Développeur Full Stack & Solutions Digitales en Tunisie",
    description:
      "Développeur full stack expert en Tunisie. Solutions de comptabilité, facturation, RH, audit et développement web.",
  },
  alternates: {
    canonical: "https://portfolio-iheb-zm.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/I-Zm.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
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
