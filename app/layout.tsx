import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_CONFIG } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`,
  description: "Turn your outdated building intercom into a smart system with Buzz Me Up. No landlord permission needed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}