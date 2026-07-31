import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://procrick.com"),
  title: "ProCrick – Turn Cricket Knowledge into TrophyToken",
  description:
    "Build dream teams, join skill-based contests, watch live scores, and win TrophyToken (💎), our Web3 native token. The #1 fantasy cricket platform for true cricket fans.",
  keywords: "fantasy cricket, cricket contests, cricket prizes, TrophyToken, web3 token rewards, dream team cricket, live cricket scores",
  openGraph: {
    title: "ProCrick – Win TrophyToken with Your Cricket Knowledge",
    description: "Fantasy cricket. Live scores. TrophyToken rewards. Join thousands of winners today.",
    url: "https://procrick.com",
    siteName: "ProCrick",
    type: "website",
  },
  verification: {
    other: {
      "facebook-domain-verification": "a1oqrx97s864tiqdckscj92gidrghs",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebasNeue.variable} ${dmSans.variable} font-body bg-navy-950 text-white antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZTK6TV4BHY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZTK6TV4BHY');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
