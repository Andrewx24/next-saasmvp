import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"


import Header from "@/components/header"



import AuthProvider from "@/components/auth-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple SaaS Starter Kit",
  description: "A minimalist starter kit for building SaaS applications with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
      <script
  defer
  data-website-id="6792889b7db4bb4d52cc3dbb"
  data-domain="next-saasmvp.vercel.app"
  src="https://datafa.st/js/script.js">
</script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
        {children}
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
