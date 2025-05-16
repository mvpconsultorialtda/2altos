"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, ShoppingCart, Gamepad2, Swords, Rocket, Puzzle, Dice5, Wand2, Tractor } from "lucide-react"
import produtosData from "@/data/produtos.json"
import { Navigation } from "@/components/navigation"

// Adicione uma função para obter ícones com base na categoria do produto
const getProductIcon = (categoria: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Estratégia: <Swords size={80} className="text-orange-400" />,
    Aventura: <Rocket size={80} className="text-orange-400" />,
    Mistério: <Puzzle size={80} className="text-orange-400" />,
    Cartas: <Dice5 size={80} className="text-orange-400" />,
    Fantasia: <Wand2 size={80} className="text-orange-400" />,
    Família: <Tractor size={80} className="text-orange-400" />,
  }
  return iconMap[categoria] || <Gamepad2 size={80} className="text-orange-400" />
}

export default function LojaPage() {
  const { produtos } = produtosData
  const [filteredProdutos, setFilteredProdutos] = useState(produtos)
  const [activeFilter, setActiveFilter] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")

  // Extrair categorias únicas
  const categorias = ["todos", ...Array.from(new Set(produtos.map((produto) => produto.categoria.toLowerCase())))]

  const handleFilterChange = (filtro: string) => {
    setActiveFilter(filtro)
    applyFilters(filtro, searchTerm)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    applyFilters(activeFilter, term)
  }

  const applyFilters = (categoria: string, termo: string) => {
    let filtered = [...produtos]

    // Aplicar filtro de categoria
    if (categoria !== "todos") {
      filtered = filtered.filter((produto) => produto.categoria.toLowerCase() === categoria)
    }

    // Aplicar filtro de busca
    if (termo) {
      const termLower = termo.toLowerCase()
      filtered = filtered.filter(
        (produto) =>
          produto.titulo.toLowerCase().includes(termLower) ||
          produto.descricao.toLowerCase().includes(termLower) ||
          produto.criador.toLowerCase().includes(termLower),
      )
    }

    setFilteredProdutos(filtered)
  }

  // Inicializar com todos os produtos
  useEffect(() => {
    setFilteredProdutos(produtos)
  }, [produtos])

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Loja de Jogos</h1>
          <p className="text-white text-xl mb-8">
            Descubra jogos de tabuleiro únicos criados por desenvolvedores independentes. Compre, venda ou troque jogos
            usando nossa plataforma.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Buscar jogos..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 pl-12 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute left-4 top-3.5 text-white/70" size={20} />
            </div>
            <Button className="bg-white/20 hover:bg-white/30 text-white rounded-full px-6">
              <Filter size={20} className="mr-2" /> Filtros
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
              <ShoppingCart size={20} className="mr-2" /> Carrinho
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              className={`${activeFilter === "todos" ? "bg-orange-600" : "bg-transparent border-white"} hover:bg-orange-700 text-white px-6 py-2 rounded-full`}
              onClick={() => handleFilterChange("todos")}
            >
              Todos os Jogos
            </Button>
            {categorias
              .filter((cat) => cat !== "todos")
              .map((categoria) => (
                <Button
                  key={categoria}
                  className={`${activeFilter === categoria ? "bg-orange-600" : "bg-transparent border-white"} hover:bg-orange-700 text-white px-6 py-2 rounded-full`}
                  onClick={() => handleFilterChange(categoria)}
                >
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </Button>
              ))}
          </div>
        </div>

        {/* Jogos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProdutos.length > 0 ? (
            filteredProdutos.map((produto) => (
              <Card key={produto.id} className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
                <div className="h-48 bg-gradient-to-b from-amber-700/50 to-amber-900/50 flex items-center justify-center">
                  {getProductIcon(produto.categoria)}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{produto.titulo}</CardTitle>
                  <CardDescription className="text-white/80">por {produto.criador}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{produto.preco}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-300 mr-1">★</span>
                      <span>
                        {produto.avaliacao} ({produto.numAvaliacoes})
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700">Comprar</Button>
                  <Button variant="outline" className="bg-transparent border-white hover:bg-white/10">
                    <ShoppingCart size={20} />
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-white text-xl">Nenhum produto encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <h2 className="text-white text-3xl font-serif mb-4">Venda seus jogos na 2Altos</h2>
          <p className="text-white text-lg mb-6">
            Tem jogos que não usa mais? Venda ou troque com outros entusiastas. Ou registre seu jogo autoral para vender
            na nossa plataforma.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/meus-jogos/vender"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
            >
              Vender Meu Jogo
            </Link>
            <Link
              href="/meus-jogos/registrar"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
            >
              Registrar Jogo Autoral
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
