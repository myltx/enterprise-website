import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "科技企业 - 创新科技，引领未来",
  description:
    "我们致力于为客户提供高质量的产品和服务，帮助企业实现数字化转型，提升核心竞争力。",
  keywords: "科技,企业,产品,服务,数字化转型",
  authors: [{ name: "科技企业" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <PerformanceMonitor />
        {/* <Navbar /> */}
        <main className="pt-16">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
