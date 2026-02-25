import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vergleichsheld24.de"),
  title: {
    default: "Vergleichsheld24 – Versicherungen clever vergleichen & sparen",
    template: "%s | Vergleichsheld24",
  },
  description:
    "Finde die besten Versicherungen im Vergleich. Kfz, Haftpflicht, Hausrat, Kranken & mehr – kostenlos vergleichen, sofort sparen. Über 100 Anbieter im Überblick.",
  keywords: [
    "Versicherung vergleichen",
    "Kfz Versicherung",
    "Haftpflichtversicherung",
    "Hausratversicherung",
    "günstige Versicherung",
    "Versicherungsvergleich",
    "Versicherung online abschließen",
  ],
  authors: [{ name: "Vergleichsheld24" }],
  creator: "Vergleichsheld24",
  publisher: "Vergleichsheld24",
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
    locale: "de_DE",
    url: "https://www.vergleichsheld24.de",
    siteName: "Vergleichsheld24",
    title: "Vergleichsheld24 – Versicherungen clever vergleichen & sparen",
    description:
      "Kostenlos Versicherungen vergleichen. Über 100 Anbieter, faire Vergleiche, sofortige Ersparnis.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vergleichsheld24 – Versicherungsvergleich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vergleichsheld24 – Versicherungen vergleichen",
    description: "Finde die besten Versicherungen im direkten Vergleich.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.vergleichsheld24.de",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Google Consent Mode v2 – Default (vor allen anderen Scripts!) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ====================================================
            GOOGLE ADSENSE
            Ersetze "ca-pub-XXXXXXXXXXXXXXXX" mit deiner Publisher-ID
            nach der AdSense-Genehmigung
        ==================================================== */}
        {/* 
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        */}

        {/* Structured Data – Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vergleichsheld24",
              url: "https://www.vergleichsheld24.de",
              logo: "https://www.vergleichsheld24.de/logo.png",
              description:
                "Kostenloser Versicherungsvergleich für Kfz, Haftpflicht, Hausrat und mehr.",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        <CookieBanner />

        {/* Scroll Animation Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observer = new IntersectionObserver(
                (entries) => entries.forEach(e => {
                  if (e.isIntersecting) e.target.classList.add('visible');
                }),
                { threshold: 0.1 }
              );
              document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
            `,
          }}
        />
      </body>
    </html>
  );
}
