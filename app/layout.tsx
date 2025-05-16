import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { VisibilityProvider } from "./context/visibility-context"
import { AuthProvider } from "./context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "2Altos Games",
  description: "Plataforma de jogos de tabuleiro",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <VisibilityProvider>{children}</VisibilityProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
