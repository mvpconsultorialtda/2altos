"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Palette, Cpu, PrinterIcon, Package, Users, PenTool, FileText, HelpCircle } from "lucide-react"
import servicosData from "@/data/servicos.json"
import Navigation from "@/components/navigation"

// Função para mapear o nome do ícone para o componente do ícone
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Palette: <Palette size={80} className="text-orange-400" />,
    Cpu: <Cpu size={80} className="text-orange-400" />,
    Printer: <PrinterIcon size={80} className="text-orange-400" />,
    Package: <Package size={80} className="text-orange-400" />,
    Users: <Users size={80} className="text-orange-400" />,
    PenTool: <PenTool size={80} className="text-orange-400" />,
    FileText: <FileText size={80} className="text-orange-400" />,
    HelpCircle: <HelpCircle size={80} className="text-orange-400" />,
  }
  return iconMap[iconName] || <HelpCircle size={80} className="text-orange-400" />
}

export default function ServicosPage() {
  const { categorias, prestadores } = servicosData
  const [filteredPrestadores, setFilteredPrestadores] = useState(prestadores)
  const [activeCategoriaId, setActiveCategoriaId] = useState<number | null>(null)

  const handleCategoriaClick = (categoriaId: number) => {
    if (activeCategoriaId === categoriaId) {
      // Se clicar na mesma categoria, remove o filtro
      setActiveCategoriaId(null)
      setFilteredPrestadores(prestadores)
    } else {
      // Aplica o filtro da categoria selecionada
      setActiveCategoriaId(categoriaId)
      setFilteredPrestadores(prestadores.filter((prestador) => prestador.categoriaId === categoriaId))
    }
  }

  // Inicializar com todos os prestadores
  useEffect(() => {
    setFilteredPrestadores(prestadores)
  }, [prestadores])

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Serviços para Criadores</h1>
          <p className="text-white text-xl mb-8">
            Conecte-se com profissionais especializados em todas as etapas de criação de jogos de tabuleiro. Do conceito
            à produção final, encontre os melhores parceiros para seu projeto.
          </p>
        </div>

        {/* Categorias de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {categorias.map((categoria) => (
            <Card
              key={categoria.id}
              className={`${activeCategoriaId === categoria.id ? "bg-orange-600/50" : "bg-white/10"} backdrop-blur-sm border-none text-white text-center hover:bg-white/20 transition-colors cursor-pointer`}
              onClick={() => handleCategoriaClick(categoria.id)}
            >
              <CardHeader className="pb-2 flex flex-col items-center">
                <div className="mb-4 text-orange-400">{getIconComponent(categoria.icon)}</div>
                <CardTitle>{categoria.nome}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{categoria.descricao}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="link" className="text-white">
                  Ver Prestadores
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Prestadores Filtrados */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-serif mb-8 text-center">
            {activeCategoriaId
              ? `Prestadores de ${categorias.find((c) => c.id === activeCategoriaId)?.nome || "Serviços"}`
              : "Prestadores em Destaque"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPrestadores.length > 0 ? (
              filteredPrestadores
                .filter((p) => (activeCategoriaId ? true : p.destaque))
                .map((prestador) => (
                  <Card
                    key={prestador.id}
                    className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-b from-amber-700/50 to-amber-900/50 flex items-center justify-center">
                      {getIconComponent(categorias.find((c) => c.id === prestador.categoriaId)?.icon || "HelpCircle")}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{prestador.nome}</CardTitle>
                          <CardDescription className="text-white/80">{prestador.categoria}</CardDescription>
                        </div>
                        <div className="flex items-center bg-orange-600 px-2 py-1 rounded-full">
                          <Star size={16} className="text-yellow-300 mr-1 fill-yellow-300" />
                          <span className="text-sm">{prestador.avaliacao}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm">{prestador.descricao}</p>
                      <p className="text-xs mt-2 text-white/80">{prestador.numAvaliacoes} avaliações</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">Ver Perfil</Button>
                    </CardFooter>
                  </Card>
                ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-white text-xl">Nenhum prestador encontrado para esta categoria.</p>
              </div>
            )}
          </div>
        </div>

        {/* Como Funciona */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h2 className="text-white text-3xl font-serif mb-8 text-center">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-white text-xl mb-2">Encontre Profissionais</h3>
              <p className="text-white/80">
                Busque prestadores de serviços especializados em cada etapa da criação de jogos.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-white text-xl mb-2">Contrate e Colabore</h3>
              <p className="text-white/80">
                Negocie termos, estabeleça prazos e trabalhe em conjunto através da plataforma.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-white text-xl mb-2">Realize seu Projeto</h3>
              <p className="text-white/80">
                Transforme sua ideia em um jogo de tabuleiro completo com a ajuda dos melhores profissionais.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <h2 className="text-white text-3xl font-serif mb-4">É um Prestador de Serviços?</h2>
          <p className="text-white text-lg mb-6">
            Ofereça seus serviços na 2Altos e conecte-se com criadores de jogos de tabuleiro. Expanda seu portfólio e
            encontre novos clientes.
          </p>
          <Link
            href="/servicos/cadastro"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
          >
            Cadastrar Meus Serviços
          </Link>
        </div>
      </div>
    </main>
  )
}
