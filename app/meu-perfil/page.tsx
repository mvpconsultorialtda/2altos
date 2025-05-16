"use client"

import { useAuth } from "@/app/context/auth-context"
import Navigation from "@/app/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Phone, MapPin, CreditCard, Shield, Bell, Edit } from "lucide-react"

export default function ProfilePage() {
  const { user } = useAuth()

  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
        <div className="container mx-auto px-4 py-8">
          <Navigation />
          <div className="text-center text-white py-12">
            <h1 className="text-3xl font-bold mb-4">Acesso Restrito</h1>
            <p>Você precisa estar logado para acessar esta página.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        <Navigation />

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-24 h-24 rounded-full border-4 border-orange-500"
                    />
                    <button className="absolute bottom-0 right-0 bg-orange-600 p-1 rounded-full">
                      <Edit className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  <CardTitle className="text-2xl">{user.name}</CardTitle>
                  <CardDescription className="text-white/80">Membro desde Abril 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-orange-400" />
                      <span className="text-white/80">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-orange-400" />
                      <span className="text-white/80">(71) 98765-4321</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-400" />
                      <span className="text-white/80">Salvador, Bahia</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Editar Perfil</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="w-full md:w-2/3">
              <Tabs defaultValue="conta" className="w-full">
                <TabsList className="grid grid-cols-3 bg-white/10 mb-6">
                  <TabsTrigger value="conta" className="text-white data-[state=active]:bg-orange-600">
                    Conta
                  </TabsTrigger>
                  <TabsTrigger value="seguranca" className="text-white data-[state=active]:bg-orange-600">
                    Segurança
                  </TabsTrigger>
                  <TabsTrigger value="notificacoes" className="text-white data-[state=active]:bg-orange-600">
                    Notificações
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="conta">
                  <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2" /> Informações Pessoais
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input
                            id="name"
                            defaultValue={user.name}
                            className="bg-white/20 border-white/30 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue={user.email}
                            className="bg-white/20 border-white/30 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            defaultValue="(71) 98765-4321"
                            className="bg-white/20 border-white/30 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">Cidade</Label>
                          <Input id="city" defaultValue="Salvador" className="bg-white/20 border-white/30 text-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">Estado</Label>
                          <Input id="state" defaultValue="Bahia" className="bg-white/20 border-white/30 text-white" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-orange-600 hover:bg-orange-700">Salvar Alterações</Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-none text-white mt-6">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" /> Métodos de Pagamento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-blue-600 p-2 rounded mr-3">
                              <CreditCard className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium">Visa terminando em 4321</p>
                              <p className="text-sm text-white/70">Expira em 05/2025</p>
                            </div>
                          </div>
                          <Button variant="ghost" className="text-white hover:bg-white/10">
                            Editar
                          </Button>
                        </div>
                        <Button className="w-full bg-white/10 hover:bg-white/20 text-white">
                          + Adicionar Novo Método de Pagamento
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="seguranca">
                  <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 mr-2" /> Segurança da Conta
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Senha Atual</Label>
                        <Input
                          id="current-password"
                          type="password"
                          placeholder="••••••••"
                          className="bg-white/20 border-white/30 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nova Senha</Label>
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="••••••••"
                          className="bg-white/20 border-white/30 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          className="bg-white/20 border-white/30 text-white"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-orange-600 hover:bg-orange-700">Atualizar Senha</Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-sm border-none text-white mt-6">
                    <CardHeader>
                      <CardTitle>Verificação em Duas Etapas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Autenticação em Duas Etapas</p>
                          <p className="text-sm text-white/70">Adicione uma camada extra de segurança à sua conta</p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-6 bg-orange-600 rounded-full p-1 cursor-pointer">
                            <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notificacoes">
                  <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Bell className="h-5 w-5 mr-2" /> Preferências de Notificação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Atualizações de Campanhas</p>
                            <p className="text-sm text-white/70">Receba notificações sobre campanhas que você apoiou</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-12 h-6 bg-orange-600 rounded-full p-1 cursor-pointer">
                              <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Novos Lançamentos</p>
                            <p className="text-sm text-white/70">Seja notificado quando novos jogos forem lançados</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-12 h-6 bg-orange-600 rounded-full p-1 cursor-pointer">
                              <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Promoções e Descontos</p>
                            <p className="text-sm text-white/70">Receba ofertas especiais e descontos exclusivos</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-12 h-6 bg-white/20 rounded-full p-1 cursor-pointer">
                              <div className="bg-white w-4 h-4 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Newsletter</p>
                            <p className="text-sm text-white/70">Receba nossa newsletter mensal com novidades</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-12 h-6 bg-orange-600 rounded-full p-1 cursor-pointer">
                              <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-orange-600 hover:bg-orange-700">Salvar Preferências</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <CardTitle>Campanhas Apoiadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7</div>
                <p className="text-white/70">Projetos apoiados</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <CardTitle>Jogos Adquiridos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-white/70">Jogos na coleção</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white">
              <CardHeader>
                <CardTitle>Recompensas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5</div>
                <p className="text-white/70">Recompensas desbloqueadas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
