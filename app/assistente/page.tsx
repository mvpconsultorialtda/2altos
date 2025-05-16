import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Wand2, MessageSquare, Bot, Palette, Cpu, Zap, BookOpen } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AssistentePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex justify-center mb-4">
            <Bot className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-white text-5xl sm:text-6xl font-serif mb-6">Assistente de Jogos</h1>
          <p className="text-white text-xl mb-8">
            Seu companheiro inteligente para criação, aprendizado e diversão no mundo dos jogos de tabuleiro. Tire
            dúvidas, receba sugestões e aprimore suas experiências de jogo.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium px-8 py-3 rounded-full transition-colors">
            <Sparkles className="mr-2 h-5 w-5" /> Conversar com o Assistente
          </Button>
        </div>

        {/* Recursos do Assistente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <MessageSquare className="h-12 w-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Tire Dúvidas</h3>
              <p className="text-white/80 mb-4">
                Esclareça regras, mecânicas e estratégias de jogos. Pergunte sobre qualquer jogo e receba explicações
                claras e detalhadas. Nosso assistente tem conhecimento sobre milhares de jogos de tabuleiro e está
                sempre atualizado com os lançamentos mais recentes.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700">Fazer Perguntas</Button>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <Palette className="h-12 w-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Material Gráfico</h3>
              <p className="text-white/80 mb-4">
                Crie ilustrações, cartas, tabuleiros e componentes visuais para seu jogo. Nosso assistente gera material
                gráfico personalizado com base nas suas descrições, ajudando a dar vida visual ao seu projeto de jogo de
                tabuleiro.
              </p>
              <Link href="/assistente/material-grafico">
                <Button className="bg-orange-600 hover:bg-orange-700">Criar Material Gráfico</Button>
              </Link>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <Cpu className="h-12 w-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Construa Jogos</h3>
              <p className="text-white/80 mb-4">
                Converse com nosso chatbot especializado para desenvolver mecânicas, debater ideias, receber sugestões e
                balancear seu jogo. Um assistente dedicado que ajuda em todas as etapas do design de jogos, desde o
                conceito inicial até o refinamento final das regras.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700">Desenvolver Mecânicas</Button>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <Wand2 className="h-12 w-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-serif mb-2">Recomendações</h3>
              <p className="text-white/80 mb-4">
                Descubra novos jogos baseados em seus gostos e preferências. Recomendações personalizadas para expandir
                sua coleção, encontrar jogos similares aos seus favoritos ou explorar novos gêneros que combinam com seu
                perfil de jogador.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700">Descobrir Jogos</Button>
            </div>
          </Card>
        </div>

        {/* Demo Interativa */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-white text-3xl font-serif mb-8 text-center">Experimente o Assistente</h2>

          <div className="bg-white/5 rounded-lg p-6 mb-6">
            <div className="flex items-start mb-6">
              <div className="bg-orange-600 p-2 rounded-full mr-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white/10 rounded-lg p-4 max-w-3xl">
                <p className="text-white">
                  Olá! Sou o Assistente de Jogos da 2Altos. Como posso ajudar você hoje? Posso explicar regras, sugerir
                  jogos, ajudar com o design do seu jogo ou criar material gráfico para seu projeto.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-purple-600 p-2 rounded-full mr-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white/10 rounded-lg p-4 max-w-3xl">
                <p className="text-white">Quais são os melhores jogos para iniciantes que gostam de estratégia?</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-600 p-2 rounded-full mr-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="bg-white/10 rounded-lg p-4 max-w-3xl">
                <p className="text-white">
                  Ótima pergunta! Para iniciantes que gostam de estratégia, recomendo jogos como:
                </p>
                <ul className="list-disc list-inside text-white mt-2 space-y-1">
                  <li>Ticket to Ride - Um jogo de construção de rotas com regras simples, mas decisões estratégicas</li>
                  <li>Carcassonne - Colocação de peças com estratégia acessível e visual atraente</li>
                  <li>Splendor - Jogo de acumulação de recursos com mecânicas elegantes</li>
                  <li>Azul - Jogo abstrato de padrões com regras fáceis e profundidade estratégica</li>
                </ul>
                <p className="text-white mt-2">
                  Todos estes jogos têm regras relativamente simples de aprender, partidas de 30-60 minutos, e oferecem
                  decisões estratégicas sem sobrecarregar novos jogadores. Algum destes interessa você?
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Digite sua pergunta aqui..."
                  className="w-full px-4 py-3 pl-4 pr-12 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="absolute right-1 top-1 bg-orange-600 hover:bg-orange-700 rounded-full h-10 w-10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Planos */}
        <div className="mb-16">
          <h2 className="text-white text-3xl font-serif mb-8 text-center">Planos do Assistente</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription className="text-white/80">Para jogadores casuais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">Grátis</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>10 perguntas por dia</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Explicações de regras básicas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Recomendações de jogos</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Começar Grátis</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-b from-purple-900/80 to-purple-700/80 backdrop-blur-sm border-2 border-purple-400/50 text-white relative">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium">
                Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <CardDescription className="text-white/80">Para jogadores dedicados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">
                  R$ 19,90<span className="text-lg font-normal">/mês</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Perguntas ilimitadas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Explicações detalhadas de regras</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Desenvolvimento de mecânicas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>5 gerações de material gráfico/mês</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Assinar Agora</Button>
              </CardFooter>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Criador</CardTitle>
                <CardDescription className="text-white/80">Para desenvolvedores de jogos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-6">
                  R$ 49,90<span className="text-lg font-normal">/mês</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Todas as funcionalidades profissionais</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Consultoria de design de jogos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Balanceamento de mecânicas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>50 gerações de material gráfico/mês</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Contatar Vendas</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl">
          <h2 className="text-white text-3xl font-serif mb-6">O que Dizem Nossos Usuários</h2>
          <blockquote className="text-white text-lg italic mb-6">
            "O Assistente de Jogos da 2Altos transformou minhas noites de jogo. Sempre que surgem dúvidas sobre regras
            ou estratégias, ele está lá para ajudar. Recomendo para todos os entusiastas de jogos de tabuleiro!"
          </blockquote>
          <div className="font-medium">
            <p className="text-white">Carlos Mendes</p>
            <p className="text-white/70">Jogador e Colecionador</p>
          </div>
        </div>

        {/* Exemplos de Criações */}
        <div className="mb-16">
          <h2 className="text-white text-3xl font-serif mb-8 text-center">Exemplos de Criações</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <CardTitle>Cartas de Fantasia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-b from-orange-600/50 to-purple-700/50 aspect-[2/3] rounded-lg flex items-center justify-center">
                  <Wand2 size={80} className="text-white/40" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <CardTitle>Tabuleiro de Estratégia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-b from-blue-600/50 to-purple-700/50 aspect-video rounded-lg flex items-center justify-center">
                  <Zap size={80} className="text-white/40" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <CardTitle>Personagens de Aventura</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-b from-green-600/50 to-blue-700/50 aspect-square rounded-lg flex items-center justify-center">
                  <BookOpen size={80} className="text-white/40" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
