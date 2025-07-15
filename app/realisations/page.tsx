import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RealisationsPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-8 text-center">
        Nos Réalisations
      </h1>
      <p className="mx-auto max-w-[800px] text-lg text-gray-300 mb-12 text-center">
        Découvrez notre portfolio de projets réussis qui témoignent de notre expertise en design et publicité.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={`/placeholder.svg?height=300&width=400&text=Projet%20${i + 1}`}
              width={400}
              height={300}
              alt={`Projet ${i + 1}`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl text-primary mb-1">Projet {i + 1}</h3>
              <p className="text-sm text-gray-400">Catégorie de projet</p>
              <Button variant="link" asChild className="mt-2 text-accent hover:text-primary">
                <Link href="#">Voir le projet</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-300 mt-12 text-lg text-center">
        Plus de projets à venir ! Restez connecté pour découvrir nos dernières créations.
      </p>
    </div>
  )
}
