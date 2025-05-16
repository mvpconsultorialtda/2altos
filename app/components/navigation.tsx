"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/app/context/auth-context"
import UserMenu from "@/app/components/user-menu"
import { Bell, ShoppingCart } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center mb-16">
      <Link href="/" className="text-white text-5xl font-serif font-bold">
        2Altos
      </Link>
      <div className="flex items-center gap-6 md:gap-8 mt-4 md:mt-0">
        <div className="flex gap-6 md:gap-8">
          <Link
            href="/campanhas"
            className={`text-white text-xl hover:underline ${pathname === "/campanhas" ? "underline" : ""}`}
          >
            Campanhas
          </Link>
          <Link
            href="/loja"
            className={`text-white text-xl hover:underline ${pathname === "/loja" ? "underline" : ""}`}
          >
            Loja
          </Link>
          <Link
            href="/servicos"
            className={`text-white text-xl hover:underline ${pathname === "/servicos" ? "underline" : ""}`}
          >
            Serviços
          </Link>
          <Link
            href="/assistente"
            className={`text-white text-xl hover:underline ${pathname === "/assistente" ? "underline" : ""}`}
          >
            Assistente
          </Link>
        </div>

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <button className="relative bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            <button className="relative bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
              <Bell className="h-5 w-5 text-white" />
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                5
              </span>
            </button>
            <UserMenu />
          </div>
        ) : (
          <Link href="/login" className="text-white text-xl hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
