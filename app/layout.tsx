import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Africhain - DAO-Powered Web3 Accelerator for African Builders",
  description:
    "DAO-governed accelerator and launchpad for African Web3 startups. Built on TAC ecosystem, providing tools, funding, mentorship, and community support to launch scalable decentralized products.",
  keywords: ["web3", "dao", "accelerator", "launchpad", "africa", "blockchain", "tac", "ton", "defi", "startup"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
