import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function RealisationsPage() {
  const projects = Array.from({ length: 6 }).map((_, i) => ({
    name: `Projet ${i + 1}`,
    category: "Catégorie de projet",
    image: `${i+1}.jpg`,
  }))

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-8 text-center">
        Nos Réalisations
      </h1>
      <p className="mx-auto max-w-[800px] text-lg text-gray-300 mb-12 text-center">
        Découvrez notre portfolio de projets réussis qui témoignent de notre expertise en design et publicité.
      </p>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden group md:hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              width={400}
              height={300}
              alt={project.name}
              className="w-full h-48 object-cover md:group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl text-primary mb-1">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
              <Button variant="link" asChild className="mt-2 text-accent md:hover:text-primary">
                <Link href="#">Voir le projet</Link>
              </Button>
            </div>
          </div>
        ))}
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
            {projects.map((project, i) => (
              <CarouselItem key={i} className="pl-4 basis-full">
                <div className="p-1 h-full">
                  <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      width={400}
                      height={300}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex-grow">
                      <h3 className="font-semibold text-xl text-primary mb-1">{project.name}</h3>
                      <p className="text-sm text-gray-400">{project.category}</p>
                      <Button variant="link" asChild className="mt-2 text-accent">
                        <Link href="#">Voir le projet</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>

      <p className="text-gray-300 mt-12 text-lg text-center">
        Plus de projets à venir ! Restez connecté pour découvrir nos dernières créations.
      </p>
    </div>
  )
}
