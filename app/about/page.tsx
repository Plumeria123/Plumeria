"use client" // This component needs to be a client component to use hooks

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer" // Import the hook

export default function AboutPage() {
  // Refs for intersection observation
  const [section1Ref, section1HasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [section2Ref, section2HasAnimated] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background2 text-foreground">
        <section
          ref={section1Ref}
          className={`grid gap-10 lg:grid-cols-2 lg:gap-16 mb-16 opacity-0 ${section1HasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
        >
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              L’agence design & publicité qui donne du pouvoir à votre image de marque
            </h1>
            <p className="text-lg text-gray-300">
              Plumeria, fondée par Meriam Boutiri, est une agence marocaine spécialisée dans le design graphique sur
              mesure et la publicité créative à fort impact.
            </p>
            <p className="text-lg text-gray-300">
              Nous ne faisons pas simplement de “jolis visuels”. Nous créons des identités puissantes, des contenus
              stratégiques et des campagnes qui transforment votre visibilité en résultats concrets.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
              Pourquoi choisir Plumeria ?
            </h2>
            <ul className="grid gap-4 text-lg text-gray-300">
              <li>
                <span className="font-semibold text-accent">✓</span> Création 100% sur mesure
              </li>
              <li>
                <span className="font-semibold text-accent">✓</span> Design moderne et tendance
              </li>
              <li>
                <span className="font-semibold text-accent">✓</span> Accompagnement humain et créatif
              </li>
              <li>
                <span className="font-semibold text-accent">✓</span> Réactivité et passion du détail
              </li>
            </ul>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              <Link href="/contact">Contactez-Nous</Link>
            </Button>
          </div>
        </section>
        <section
          ref={section2Ref}
          className={`bg-gray-900 p-8 rounded-lg shadow-md text-white opacity-0 ${section2HasAnimated ? "animate-fade-in [animation-delay:0.4s]" : ""}`}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8 text-center">
            Notre Promesse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-semibold text-primary">Identité visuelle mémorable</h3>
              <p className="text-gray-400">Créons une image de marque qui se démarque et reste gravée.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-semibold text-primary">Contenu social captivant</h3>
              <p className="text-gray-400">Des visuels et messages qui engagent votre audience sur les réseaux.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-semibold text-primary">Campagnes publicitaires performantes</h3>
              <p className="text-gray-400">Des résultats concrets avec Meta Ads et Google Ads.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-semibold text-primary">Stratégie créative alignée</h3>
              <p className="text-gray-400">Des solutions créatives qui répondent directement à vos objectifs.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
