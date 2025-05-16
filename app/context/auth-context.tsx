"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  avatar: string
  location?: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  // Simulando um usuário logado
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Simular carregamento do usuário ao montar o componente
  useEffect(() => {
    // Simular um usuário já logado
    const mockUser = {
      id: "user-123",
      name: "Carlos Santos",
      email: "carlos.santos@gmail.com",
      avatar: "/diverse-avatars.png",
      location: "Salvador, Bahia",
    }

    setUser(mockUser)
    setIsAuthenticated(true)
  }, [])

  const logout = () => {
    // Em uma implementação real, você faria uma chamada para invalidar a sessão no servidor
    setUser(null)
    setIsAuthenticated(false)
    // Redirecionar para a página inicial após logout
    window.location.href = "/"
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
