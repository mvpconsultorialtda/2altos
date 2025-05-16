import AdminControls from "@/app/components/admin-controls"
import Navigation from "@/app/components/navigation"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-800 via-amber-700 to-amber-600">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-serif mb-6">
            Financie e encontre jogos de tabuleiro
          </h1>
          <p className="text-white text-xl md:text-2xl mb-12">
            Descubra novos jogos, apoie campanhas e adquira jogos unicos.
          </p>
          <Link
            href="/campanhas"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-xl font-medium px-12 py-4 rounded-full transition-colors"
          >
            Explorar Campanhas
          </Link>
        </div>

        {/* Game Characters - Usando tag img padrão com URL direta */}
        <div className="flex justify-center items-end mt-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/game-characters-DJJ6eNR3wTxAcXFnDRpJAtJa9gMt9P.png"
            alt="Game characters - wizard, knight and monster with treasure"
            className="w-full max-w-4xl"
          />
        </div>
      </div>

      <AdminControls />
    </main>
  )
}
