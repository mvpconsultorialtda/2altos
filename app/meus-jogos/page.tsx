import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Edit, BarChart, ShoppingBag, Users, Gamepad2, Swords, Puzzle } from "lucide-react"

export default function MeusJogosPage() {
  // Dados de exemplo para jogos do usuário
  const meusJogos = [
    {
      id: 1,
      titulo: "Aventuras na Floresta Encantada",
      status: "Publicado",
      vendas: 128,
      avaliacao: 4.7,
      ultimaAtualizacao: "12/04/2023",
      imagem: "/placeholder-wvx5h.png",
    },
    {
      id: 2,
      titulo: "Conquistadores do Espaço",
      status: "Em Desenvolvimento",
      progresso: 75,
      ultimaAtualizacao: "28/04/2023",
      imagem: "/placeholder-62yx1.png",
    },
    {
      id: 3,
      titulo: "Mistérios da Mansão Antiga",
      status: "Rascunho",
      progresso: 30,
      ultimaAtualizacao: "05/05/2023",
      imagem: "/placeholder-44fed.png",
    },
  ]

  // Dados de exemplo para campanhas do usuário
  const minhasCampanhas = [
    {
      id: 1,
      titulo: "Aventuras na Floresta Encantada - Expansão",
      status: "Ativa",
      meta: "R$ 25.000",
      arrecadado: "R$ 18.750",
      percentual: 75,
      diasRestantes: 12,
      apoiadores: 142,
      imagem: "/placeholder-ggbf0.png",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row justify-between items-center mb-16">
          <Link href="/" className="text-white text-5xl font-serif font-bold">
            2Altos
          </Link>
          <div className="flex gap-6 md:gap-8 mt-4 md:mt-0">
            <Link href="/campanhas" className="text-white text-xl hover:underline">
              Campanhas
            </Link>
            <Link href="/loja" className="text-white text-xl hover:underline">
              Loja
            </Link>
            <Link href="/lojas" className="text-white text-xl hover:underline">
              Lojas
            </Link>
            <Link href="/servicos" className="text-white text-xl hover:underline">
              Serviços
            </Link>
            <Link href="/meus-jogos" className="text-white text-xl hover:underline underline">
              Meus Jogos
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Meus Jogos</h1>
          <p className="text-white text-xl mb-8">
            Gerencie seus jogos, acompanhe o desenvolvimento, monitore vendas e crie novas campanhas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/meus-jogos/criar"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
            >
              <PlusCircle className="inline-block mr-2 h-5 w-5" />
              Criar Novo Jogo
            </Link>
            <Link
              href="/campanhas/criar"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
            >
              <PlusCircle className="inline-block mr-2 h-5 w-5" />
              Iniciar Campanha
            </Link>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="meus-jogos" className="mb-12">
          <TabsList className="bg-white/10 border-b border-white/20 w-full justify-start rounded-none p-0">
            <TabsTrigger
              value="meus-jogos"
              className="text-white data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-orange-500 px-6 py-3"
            >
              Meus Jogos
            </TabsTrigger>
            <TabsTrigger
              value="minhas-campanhas"
              className="text-white data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-orange-500 px-6 py-3"
            >
              Minhas Campanhas
            </TabsTrigger>
            <TabsTrigger
              value="estatisticas"
              className="text-white data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-t-lg rounded-b-none border-b-2 border-transparent data-[state=active]:border-orange-500 px-6 py-3"
            >
              Estatísticas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="meus-jogos" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meusJogos.map((jogo) => (
                <Card key={jogo.id} className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
                  <div className="h-48 bg-gradient-to-b from-amber-700/50 to-amber-900/50 flex items-center justify-center">
                    {jogo.id === 1 ? (
                      <Gamepad2 size={80} className="text-orange-400" />
                    ) : jogo.id === 2 ? (
                      <Swords size={80} className="text-orange-400" />
                    ) : (
                      <Puzzle size={80} className="text-orange-400" />
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{jogo.titulo}</CardTitle>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          jogo.status === "Publicado"
                            ? "bg-green-600"
                            : jogo.status === "Em Desenvolvimento"
                              ? "bg-blue-600"
                              : "bg-yellow-600"
                        }`}
                      >
                        {jogo.status}
                      </div>
                    </div>
                    <CardDescription className="text-white/80">
                      Última atualização: {jogo.ultimaAtualizacao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    {jogo.status === "Publicado" ? (
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <ShoppingBag className="h-4 w-4 mr-1" />
                          <span>{jogo.vendas} vendas</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-300 mr-1">★</span>
                          <span>{jogo.avaliacao}</span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progresso</span>
                          <span>{jogo.progresso}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${jogo.progresso}%` }}></div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                      <Edit className="h-4 w-4 mr-2" /> Editar
                    </Button>
                    {jogo.status === "Publicado" && (
                      <Button variant="outline" className="flex-1 bg-transparent border-white hover:bg-white/10">
                        <BarChart className="h-4 w-4 mr-2" /> Análise
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}

              {/* Card para adicionar novo jogo */}
              <Card className="bg-white/5 backdrop-blur-sm border-dashed border-2 border-white/30 text-white flex flex-col items-center justify-center h-[400px]">
                <CardContent className="flex flex-col items-center justify-center h-full">
                  <PlusCircle className="h-16 w-16 text-white/70 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Criar Novo Jogo</h3>
                  <p className="text-white/70 text-center mb-6">Comece a desenvolver seu próximo jogo de tabuleiro</p>
                  <Link href="/meus-jogos/criar">
                    <Button className="bg-green-600 hover:bg-green-700">Começar Agora</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="minhas-campanhas" className="pt-6">
            {minhasCampanhas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {minhasCampanhas.map((campanha) => (
                  <Card
                    key={campanha.id}
                    className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-b from-amber-700/50 to-amber-900/50 flex items-center justify-center">
                      <Gamepad2 size={80} className="text-orange-400" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{campanha.titulo}</CardTitle>
                        <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-600">{campanha.status}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{campanha.arrecadado}</span>
                          <span>{campanha.meta}</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{ width: `${campanha.percentual}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{campanha.apoiadores} apoiadores</span>
                        </div>
                        <span>{campanha.diasRestantes} dias restantes</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                        <Edit className="h-4 w-4 mr-2" /> Gerenciar
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent border-white hover:bg-white/10">
                        <BarChart className="h-4 w-4 mr-2" /> Análise
                      </Button>
                    </CardFooter>
                  </Card>
                ))}

                {/* Card para adicionar nova campanha */}
                <Card className="bg-white/5 backdrop-blur-sm border-dashed border-2 border-white/30 text-white flex flex-col items-center justify-center h-[400px]">
                  <CardContent className="flex flex-col items-center justify-center h-full">
                    <PlusCircle className="h-16 w-16 text-white/70 mb-4" />
                    <h3 className="text-xl font-medium mb-2">Iniciar Nova Campanha</h3>
                    <p className="text-white/70 text-center mb-6">
                      Crie uma campanha de financiamento para seu próximo jogo
                    </p>
                    <Link href="/campanhas/criar">
                      <Button className="bg-green-600 hover:bg-green-700">Começar Agora</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center bg-white/5 backdrop-blur-sm p-12 rounded-xl">
                <h3 className="text-white text-2xl font-medium mb-4">Você ainda não tem campanhas</h3>
                <p className="text-white/70 mb-8">
                  Inicie uma campanha de financiamento para seu jogo e receba apoio da comunidade.
                </p>
                <Link href="/campanhas/criar">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <PlusCircle className="h-5 w-5 mr-2" /> Iniciar Minha Primeira Campanha
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="estatisticas" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Total de Vendas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">128</div>
                  <p className="text-white/70 text-sm">+12% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Receita Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">R$ 12.480</div>
                  <p className="text-white/70 text-sm">+15% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Avaliação Média</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold flex items-center">
                    4.7 <span className="text-yellow-300 ml-2">★</span>
                  </div>
                  <p className="text-white/70 text-sm">Baseado em 45 avaliações</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white mb-8">
              <CardHeader>
                <CardTitle>Vendas Mensais</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <p className="text-white/70">Gráfico de vendas mensais seria exibido aqui</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                <CardHeader>
                  <CardTitle>Jogos Mais Vendidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                          1
                        </div>
                        <span>Aventuras na Floresta Encantada</span>
                      </div>
                      <span>128 vendas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                <CardHeader>
                  <CardTitle>Avaliações Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                          <span className="text-yellow-300 mr-1">★★★★★</span>
                          <span className="ml-2">João Silva</span>
                        </div>
                        <span className="text-white/70 text-sm">2 dias atrás</span>
                      </div>
                      <p className="text-sm text-white/80">
                        Jogo incrível! As mecânicas são bem equilibradas e as ilustrações são lindas.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                          <span className="text-yellow-300 mr-1">★★★★</span>
                          <span className="ml-2">Maria Oliveira</span>
                        </div>
                        <span className="text-white/70 text-sm">5 dias atrás</span>
                      </div>
                      <p className="text-sm text-white/80">
                        Muito divertido, mas algumas regras poderiam ser mais claras.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
