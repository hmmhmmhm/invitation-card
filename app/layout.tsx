import type { Metadata, Viewport } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "모바일 청첩장",
  description: "김철수와 김영희의 결혼식에 초대합니다.",
  abstract: "모바일 청첩장",
  keywords: ["웨딩", "결혼식", "청첩장"],
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
    <html lang="en">
      <head>
        <Script src="/sakura.min.js" strategy="beforeInteractive" />
        <link rel="stylesheet" href="/sakura.min.css" />
      </head>

      <body className={nanumMyeongjo.className}>{children}</body>
    </html>
  );
}
