import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Вкус Хлеба | Домашняя выпечка",
  description: "Вкусная домашняя выпечка и хлеб в Казахстане",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'