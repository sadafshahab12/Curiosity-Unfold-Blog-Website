import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import { BlogProvider } from "./context/Context";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Curiosity Unfold",
  description: "Curiosity Unfold is your gateway to exploring fascinating ideas, insights, and discoveries that spark your curiosity and broaden your perspective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/favicon.ico.jpg" type="image/jpg"/>
        </head>
        <body className={`${poppins.className} antialiased`}>
          <BlogProvider>
            <Navbar />

            {children}
            <Footer />
          </BlogProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
