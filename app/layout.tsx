import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

export const metadata: Metadata = {
  title: 'janaskar - Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint, so there is no flash
            of the wrong one on load. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');" +
              "if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))" +
              "{document.documentElement.classList.add('dark')}}catch(e){}})()",
          }}
        />
      </head>
      <body className={`${varelaRound.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
