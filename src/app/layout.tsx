import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "bengali"],
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "বাজার দর - বাংলাদেশের বাজারের সর্বশেষ দাম এবং তথ্য।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      data-theme="light"
      lang="bn"
      className={`${hindSiliguri.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-gray-100">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
