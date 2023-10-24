import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";
import { cookies } from "next/headers";
import { Profile } from "@/components/Profile";
import { SignIn } from "@/components/SignIn";
import { Hero } from "@/components/Hero";
import { Copyright } from "@/components/Copyright";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai",
});

export const metadata: Metadata = {
  title: "Spacetime",
  description:
    "Estudo de desenvolvimento Next.js, Tailwind e Typescript, de uma capsula do tempo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has("token");

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}
      >
        <main className="grid min-h-screen grid-cols-2 ">
          {/* left */}
          <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/30 bg-[url(../assets/bg-stars.svg)] bg-cover ">
            {/* blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full" />
            {/* stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes " />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          {/* right */}
          <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
