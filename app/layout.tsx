import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Arnab Dey - CS Student & Cybersecurity Researcher",
  description:
    "Computer Science student at BUET specializing in cybersecurity, adversarial machine learning, and full-stack development.",
  generator: "v0.app",
  keywords: ["Arnab Dey", "Computer Science", "Cybersecurity", "Machine Learning", "BUET", "Research"],
  authors: [{ name: "Arnab Dey" }],
  openGraph: {
    title: "Arnab Dey - CS Student & Cybersecurity Researcher",
    description:
      "Computer Science student at BUET specializing in cybersecurity, adversarial machine learning, and full-stack development.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
