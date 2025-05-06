"use client"

import type React from "react"

import { Inter, Playfair_Display } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence } from "framer-motion"
import { PageLoader } from "@/widgets/page-loader"

import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PageLoader />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
