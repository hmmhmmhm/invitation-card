import type { Metadata, Viewport } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "박성준 · 최지은 청첩장",
  description: "박성준 · 최지은의 결혼식에 초대합니다.",
  abstract: "박성준 · 최지은 청첩장",
  keywords: ["웨딩", "결혼식", "청첩장", "박성준", "최지은", "모바일 청첩장"],
  robots: "index, follow",
  referrer: "origin",
  openGraph: {
    title: "박성준 · 최지은 청첩장",
    siteName: "박성준 · 최지은 청첩장",
    description: "박성준 · 최지은의 결혼식에 초대합니다.",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://invitation-card-nine.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "모바일 청첩장",
      },
    ],
  },
  twitter: {
    title: "박성준 · 최지은 청첩장",
    card: "summary_large_image",
    description: "박성준 · 최지은의 결혼식에 초대합니다.",
    images: [
      {
        url: "https://invitation-card-nine.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "모바일 청첩장",
      },
    ],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  width: "device-width",
  themeColor: "#D57F7E",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script src="/sakura.min.js" strategy="beforeInteractive" />
        <Script
          src="/build/WeddingMarchBuildTest.loader.js"
          strategy="beforeInteractive"
        />
        <link rel="stylesheet" href="/sakura.min.css" />
      </head>

      <body className={nanumMyeongjo.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
