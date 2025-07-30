"use client" // This component needs to be a client component to use hooks
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer" // Import the new hook
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function RealisationsPage() {
  const projects = Array.from({ length: 6 }).map((_, i) => ({
    name: `Projet ${i + 1}`,
    category: "Catégorie de projet",
    image: `${i + 1}.jpg`, // Keeping original image source as requested
  }))
  // Refs for intersection observation with explicit types
  const [desktopGridRef, desktopGridHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [mobileCarouselRef, mobileCarouselHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [footerTextRef, footerTextHasAnimated] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 })

  return (
    <div className="relative overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#55C3BA] to-[#006EAC] text-white">
      {/* Animated background elements (fluid shapes only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce [animation-delay:0s] [animation-duration:3s]"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse [animation-delay:1s] [animation-duration:4s]"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-spin [animation-delay:2s] [animation-duration:5s]"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float [animation-delay:0.5s] [animation-duration:3.5s]"></div>
        <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white/10 rounded-full blur-xl animate-pulse [animation-duration:6s] [animation-delay:1.5s]"></div>
      </div>

      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg mb-8 text-center opacity-0 animate-fade-in [animation-delay:0.2s] relative z-10">
        Nos Réalisations
      </h1>
      <p className="mx-auto max-w-[800px] text-lg text-white/90 mb-12 text-center opacity-0 animate-fade-in [animation-delay:0.4s] relative z-10">
        Découvrez notre portfolio de projets réussis qui témoignent de notre expertise en design et publicité.
      </p>

      {/* Desktop Grid Layout */}
      <div
        ref={desktopGridRef}
        className={`hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-16 max-w-6xl opacity-0 ${desktopGridHasAnimated ? "animate-fade-in [animation-delay:0.6s]" : ""}`}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden group transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl border border-white/20 z-10"
          >
            <Image
              src={project.image || "/placeholder.svg"} // Keeping original image source
              width={400}
              height={300}
              alt={project.name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay for project details */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
              <h3 className="font-semibold text-xl text-white mb-1">{project.name}</h3>
              <p className="text-sm text-white/80">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel Layout */}
      <div
        ref={mobileCarouselRef}
        className={`md:hidden relative opacity-0 ${mobileCarouselHasAnimated ? "animate-fade-in [animation-delay:0.6s]" : ""}`}
      >
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
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden h-full flex flex-col border border-white/20 z-10">
                    <Image
                      src={project.image || "/placeholder.svg"} // Keeping original image source
                      width={400}
                      height={300}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    {/* Overlay for project details on mobile (always visible or on tap) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4">
                      <h3 className="font-semibold text-xl text-white mb-1">{project.name}</h3>
                      <p className="text-sm text-white/80">{project.category}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
        </Carousel>
      </div>

      <p
        ref={footerTextRef}
        className={`text-white/90 mt-12 text-lg text-center opacity-0 ${footerTextHasAnimated ? "animate-fade-in [animation-delay:0.8s]" : ""}`}
      >
        Plus de projets à venir ! Restez connecté pour découvrir nos dernières créations.
      </p>
    </div>
  )
}
