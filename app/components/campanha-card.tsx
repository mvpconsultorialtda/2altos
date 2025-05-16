"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageOff } from "lucide-react"
import { useVisibility } from "@/app/context/visibility-context"

interface CampanhaCardProps {
  campanha: {
    id: number
    titulo: string
    criador: string
    meta: string
    arrecadado: string
    percentual: number
    diasRestantes: number
    imagem: string
    descricao: string
    categoria: string
  }
}

export default function CampanhaCard({ campanha }: CampanhaCardProps) {
  const [showExpandedImage, setShowExpandedImage] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(campanha.imagem)
  const { showTimeRemaining } = useVisibility()

  // Reset error state when image source changes
  useEffect(() => {
    setImageError(false)
    setImageSrc(campanha.imagem)
  }, [campanha.imagem])

  const handleMouseEnter = () => {
    setShowExpandedImage(true)
  }

  const handleMouseLeave = () => {
    setShowExpandedImage(false)
  }

  const handleImageError = () => {
    console.error(`Erro ao carregar imagem: ${imageSrc}`)
    setImageError(true)

    // Tenta usar um placeholder com o nome da campanha
    setImageSrc(`/placeholder.svg?height=200&width=350&query=${encodeURIComponent(campanha.titulo)}`)
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-none text-white overflow-hidden relative">
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {imageError ? (
          <div className="w-full h-48 bg-white/10 flex flex-col items-center justify-center">
            <ImageOff className="h-12 w-12 text-white/50 mb-2" />
            <p className="text-white/70 text-sm">{campanha.titulo}</p>
          </div>
        ) : (
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={campanha.titulo}
            className="w-full h-48 object-contain bg-white/10"
            onError={handleImageError}
          />
        )}

        {showExpandedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setShowExpandedImage(false)}
          >
            <div
              className="relative bg-amber-900/90 backdrop-blur-md p-4 rounded-lg shadow-xl border border-amber-500 max-w-2xl max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center"
                onClick={() => setShowExpandedImage(false)}
              >
                ✕
              </button>
              {imageError ? (
                <div className="w-full h-[50vh] flex flex-col items-center justify-center">
                  <ImageOff className="h-16 w-16 text-white/50 mb-4" />
                  <p className="text-white/70">Não foi possível carregar a imagem</p>
                </div>
              ) : (
                <img
                  src={imageSrc || "/placeholder.svg"}
                  alt={campanha.titulo}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={handleImageError}
                />
              )}
              <h3 className="text-white text-xl mt-2">{campanha.titulo}</h3>
            </div>
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{campanha.titulo}</CardTitle>
        <CardDescription className="text-white/80">por {campanha.criador}</CardDescription>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>{campanha.arrecadado}</span>
            <span>{campanha.meta}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${campanha.percentual}%` }}></div>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <span>{campanha.percentual}% financiado</span>
          {/* Temporariamente removido: {showTimeRemaining && <span>{campanha.diasRestantes} dias restantes</span>} */}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-orange-600 hover:bg-orange-700">Apoiar Projeto</Button>
      </CardFooter>
    </Card>
  )
}
