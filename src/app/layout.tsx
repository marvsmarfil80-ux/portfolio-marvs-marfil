import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marvs Marfil | Portfolio",
  description: "Portfolio of Marvs Marfil, BSIT student.",
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
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
          >
            Skip to content
          </a>
          <div className="mx-auto lg:flex lg:h-screen lg:max-w-[1900px] lg:gap-10 lg:px-8 xl:px-[8%] 2xl:px-[10%]">
            <Sidebar />
            <main
              id="main-content"
              tabIndex={-1}
              className="main-scroll min-w-0 lg:flex-1 lg:overflow-y-auto"
            >
              <div className="px-6 py-10 lg:px-10">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
