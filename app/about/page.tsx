"use client" // This component needs to be a client component to use hooks

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer" // Import the hook
import AnimatedButton from "@/components/animated-button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel" // Import Carousel components

export default function AboutPage() {
  // Refs for intersection observation
  const [section1Ref, section1HasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [section2Ref, section2HasAnimated] = useIntersectionObserver({ threshold: 0.1 })

  const displayedProjects = [
    {
      name: "Identité visuelle mémorable",
      category: "Créons une image de marque qui se démarque et reste gravée.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Contenu social captivant",
      category: "Des visuels et messages qui engagent votre audience sur les réseaux.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Campagnes publicitaires performantes",
      category: "Des résultats concrets avec Meta Ads et Google Ads.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Stratégie créative alignée",
      category: "Des solutions créatives qui répondent directement à vos objectifs.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <>
      {/* Section 1: Introduction with animated background */}
      <section
        ref={section1Ref}
        className={`relative overflow-hidden p-6 md:p-10 lg:p-12
                   bg-gradient-to-br from-[#55C3BA] to-[#4AB3A8] text-white shadow-xl
                   opacity-0 ${section1HasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce [animation-delay:0s] [animation-duration:3s]"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce [animation-delay:1s] [animation-duration:4s]"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce [animation-delay:2s] [animation-duration:5s]"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-bounce [animation-delay:0.5s] [animation-duration:3.5s]"></div>
        </div>
        <div className="container px-4 md:px-6 mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 lg:gap-16 relative z-10">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-lg">
              L’agence design & publicité qui donne du pouvoir à votre image de marque
            </h1>
            <p className="text-lg text-white/90">
              Plumeria, fondée par Meriam Boutiri, est une agence marocaine spécialisée dans le design graphique sur
              mesure et la publicité créative à fort impact.
            </p>
            <p className="text-lg text-white/90">
              Nous ne faisons pas simplement de “jolis visuels”. Nous créons des identités puissantes, des contenus
              stratégiques et des campagnes qui transforment votre visibilité en résultats concrets.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white drop-shadow-lg">
              Pourquoi choisir Plumeria ?
            </h2>
            <ul className="grid gap-4 text-lg text-white/90">
              <li>
                <span className="font-semibold text-white">✓</span> Création 100% sur mesure
              </li>
              <li>
                <span className="font-semibold text-white">✓</span> Design moderne et tendance
              </li>
              <li>
                <span className="font-semibold text-white">✓</span> Accompagnement humain et créatif
              </li>
              <li>
                <span className="font-semibold text-white">✓</span> Réactivité et passion du détail
              </li>
            </ul>
            <AnimatedButton className="border-white text-white hover:bg-white hover:text-primary bg-transparent shadow-lg transition-all duration-300">
              <Link href="/contact">Contactez-Nous</Link>
            </AnimatedButton>
          </div>
        </div>
      </section>
      {/* Section 2: Our Promise with animated background */}
      <section
        ref={section2Ref}
        className={`relative overflow-hidden p-6 md:p-10 lg:p-12
                   bg-gradient-to-br from-[#4AB3A8] to-[#55C3BA] text-white shadow-xl
                   opacity-0 ${section1HasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-8 text-center drop-shadow-lg">
            Notre Promesse
          </h2>
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20">
              <CheckCircle className="h-8 w-8 text-white animate-pulse-slow" />
              <h3 className="text-xl font-semibold text-white">Identité visuelle mémorable</h3>
              <p className="text-white/80">Créons une image de marque qui se démarque et reste gravée.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20">
              <CheckCircle className="h-8 w-8 text-white animate-pulse-slow" />
              <h3 className="text-xl font-semibold text-white">Contenu social captivant</h3>
              <p className="text-white/80">Des visuels et messages qui engagent votre audience sur les réseaux.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20">
              <CheckCircle className="h-8 w-8 text-white animate-pulse-slow" />
              <h3 className="text-xl font-semibold text-white">Campagnes publicitaires performantes</h3>
              <p className="text-white/80">Des résultats concrets avec Meta Ads et Google Ads.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 border border-white/20">
              <CheckCircle className="h-8 w-8 text-white animate-pulse-slow" />
              <h3 className="text-xl font-semibold text-white">Stratégie créative alignée</h3>
              <p className="text-white/80">Des solutions créatives qui répondent directement à vos objectifs.</p>
            </div>
          </div>

          {/* Mobile Carousel Layout */}
          <div className="md:hidden relative">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 items-stretch">
                {displayedProjects.map((project, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <div className="p-1 h-full">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full flex flex-col border border-white/20">
                        <div className="p-4 flex-grow flex flex-col items-center text-center space-y-2">
                          <CheckCircle className="h-8 w-8 text-white animate-pulse-slow" />
                          <h3 className="font-semibold text-lg text-white">{project.name}</h3>
                          <p className="text-sm text-white/80">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}
