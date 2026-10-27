import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { siteConfig } from "@/config/nav";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Marvs Marfil | Portfolio", template: "%s | Marvs Marfil" },
  description: siteConfig.description,
  robots: siteConfig.indexable
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Marvs Marfil | Portfolio",
    description: siteConfig.description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvs Marfil | Portfolio",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
          >
            Skip to content
          </a>
          <div className="mx-auto lg:flex lg:max-w-[1232px] lg:items-start lg:gap-0 lg:px-8">
            <Sidebar />
            <main
              id="main-content"
              tabIndex={-1}
              className="relative min-w-0 lg:flex-1"
            >
              <div className="px-6 pb-8 pt-12 lg:max-w-[880px] lg:px-10">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
