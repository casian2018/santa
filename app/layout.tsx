"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "animate.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
  );
}

import { Providers } from "./providers";
