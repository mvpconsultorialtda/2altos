"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CampanhaCard from "@/app/components/campanha-card"
import AdminControls from "@/app/components/admin-controls"
import campanhasData from "@/data/campanhas.json"
import Navigation from "@/app/components/navigation"

export default function CampanhasPage() {
  const { campanhas } = campanhasData
  const [filteredCampanhas, setFilteredCampanhas] = useState(campanhas)
  const [activeFilter, setActiveFilter] = useState("todas")
  const [isLoading, setIsLoading] = useState(true)

  // Extrair categorias únicas
  const categorias = ["todas", ...Array.from(new Set(campanhas.map((campanha) => campanha.categoria.toLowerCase())))]

  const handleFilterChange = (filtro: string) => {
    setActiveFilter(filtro)

    if (filtro === "todas") {
      setFilteredCampanhas(campanhas)
    } else if (filtro === "populares") {
      // Ordenar por percentual de financiamento (decrescente)
      setFilteredCampanhas([...campanhas].sort((a, b) => b.percentual - a.percentual))
    } else if (filtro === "recentes") {
      // Ordenar por dias restantes (decrescente - assumindo que campanhas mais recentes têm mais dias)
      setFilteredCampanhas([...campanhas].sort((a, b) => b.diasRestantes - a.diasRestantes))
    } else if (filtro === "ultimos-dias") {
      // Ordenar por dias restantes (crescente)
      setFilteredCampanhas([...campanhas].sort((a, b) => a.diasRestantes - b.diasRestantes))
    } else {
      // Filtrar por categoria
      setFilteredCampanhas(campanhas.filter((campanha) => campanha.categoria.toLowerCase() === filtro))
    }
  }

  // Inicializar com todas as campanhas
  useEffect(() => {
    setFilteredCampanhas(campanhas)
    // Simular um pequeno atraso para garantir que o componente esteja pronto
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [campanhas])

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Campanhas de Financiamento</h1>
          <p className="text-white text-xl mb-8">
            Apoie criadores e ajude a transformar ideias inovadoras em jogos de tabuleiro reais. Financie projetos e
            receba recompensas exclusivas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              className={`${activeFilter === "todas" ? "bg-orange-600" : "bg-transparent border-white"} hover:bg-orange-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("todas")}
            >
              Todas as Campanhas
            </Button>
            <Button
              className={`${activeFilter === "populares" ? "bg-orange-600" : "bg-transparent border-white"} hover:bg-orange-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("populares")}
            >
              Mais Populares
            </Button>
            <Button
              className={`${activeFilter === "recentes" ? "bg-orange-600" : "bg-transparent border-white"} hover:bg-orange-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("recentes")}
            >
              Recém Lançadas
            </Button>
            <Button
              className={`${activeFilter === "ultimos-dias" ? "bg-orange-600" : "bg-transparent border-white"} hover:bg-orange-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("ultimos-dias")}
            >
              Últimos Dias
            </Button>
          </div>

          {/* Filtros por categoria */}
          {categorias.length > 1 && (
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categorias
                .filter((cat) => cat !== "todas")
                .map((categoria) => (
                  <Button
                    key={categoria}
                    className={`${activeFilter === categoria ? "bg-orange-600" : "bg-transparent border-white"} hover:bg-orange-700 text-white px-4 py-1 text-sm rounded-full`}
                    onClick={() => handleFilterChange(categoria)}
                  >
                    {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                  </Button>
                ))}
            </div>
          )}

          <Link
            href="/campanhas/criar"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
          >
            Criar Nova Campanha
          </Link>
        </div>

        {/* Campanhas Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredCampanhas.map((campanha) => (
              <CampanhaCard key={campanha.id} campanha={campanha} />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <h2 className="text-white text-3xl font-serif mb-4">Tem uma ideia de jogo?</h2>
          <p className="text-white text-lg mb-6">
            Transforme seu conceito em realidade com a ajuda da comunidade. Lance sua campanha e receba financiamento
            para produzir seu jogo de tabuleiro.
          </p>
          <Link
            href="/campanhas/criar"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
          >
            Iniciar Minha Campanha
          </Link>
        </div>
      </div>

      <AdminControls />
    </main>
  )
}
