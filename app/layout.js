import "./globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Script from 'next/script';

export const metadata = {
  title: "The Cricket Nerd | Nepal Cricket News, Matches, Players",
  description: "Stay updated with the latest news, matches, and player information from Nepal's cricket team."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6548353579308693" crossOrigin="anonymous"/>
        <meta name="google-adsense-account" content="ca-pub-6548353579308693" />
        <link rel="shortcut icon" href="/Images/Logo/The Cricket Nerd Page Icon.jpg" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SGWFKE9WSE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SGWFKE9WSE');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K7S7DHPF');
          `}
        </Script>

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.thecricketnerd.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="The Cricket Nerd | Nepal Cricket News, Matches, Players" />
        <meta property="og:description" content="Stay updated with the latest news, matches, and player information from Nepal's cricket team." />
        <meta property="og:image" content="https://www.thecricketnerd.com/Images/Logo/The Cricket Nerd Page Icon.jpg" />
        <meta property="og:url" content="https://www.thecricketnerd.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Cricket Nerd | Nepal Cricket News, Matches, Players" />
        <meta name="twitter:description" content="Stay updated with the latest news, matches, and player information from Nepal's cricket team." />
        <meta name="twitter:image" content="https://www.thecricketnerd.com/Images/Logo/The Cricket Nerd Page Icon.jpg" />
      </head>
      <body>
        <h1 className="hidden">The Cricket Nerd | Nepal Cricket News, Matches, Players</h1>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K7S7DHPF" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
