"use client" // This component needs to be a client component to use hooks

import Link from "next/link"
import { Palette, Megaphone, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image" // Ensure Image is imported
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer" // Import the new hook
import AnimatedButton from "@/components/animated-button"

export default function ServicesPage() {
  const serviceSections = [
    {
      icon: Palette,
      title: "Design & Identité Visuelle",
      description:
        "Une identité forte est la base d’une marque durable. Nous créons un univers graphique stratégique qui reflète vos valeurs et captive votre audience. Du logo à la charte graphique complète, chaque élément est conçu pour l'impact.",
      features: [
        "Création de logo & charte graphique",
        "Flyers, brochures, cartes de visite",
        "Packaging (cosmétiques, e-commerce, etc.)",
        "Templates réseaux sociaux personnalisés",
      ],
      imageSrc: "/i1.jpg", // Placeholder image
      imageAlt: "Design & Visual Identity",
      buttonText: "Demander un devis Design",
    },
    {
      icon: Megaphone,
      title: "Publicité & Stratégie Digitale",
      description:
        "Un bon design capte l’attention. Une bonne publicité la transforme en action. Nous élaborons des stratégies digitales percutantes pour maximiser votre visibilité et générer des résultats concrets.",
      features: [
        "Campagnes Meta Ads (Facebook/Instagram)",
        "Publicité Google Ads (Search, Display, Shopping)",
        "Contenu sponsorisé & partenariats influenceurs",
        "Conseil en storytelling digital & stratégie de contenu",
      ],
      imageSrc: "/i2.jpg", // Placeholder image
      imageAlt: "Digital Advertising & Strategy",
      buttonText: "Demander un devis Publicité",
      imageOrderLast: true, // For desktop layout
    },
  ]
  // Refs for intersection observation for each section, with explicit types
  const [section1Ref, section1HasAnimated] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })
  const [section2Ref, section2HasAnimated] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })
  const [mobileCarouselRef, mobileCarouselHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  return (
    <div className="relative overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#55C3BA] to-[#006EAC] text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce [animation-delay:0s] [animation-duration:3s]"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse [animation-delay:1s] [animation-duration:4s]"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-spin [animation-delay:2s] [animation-duration:5s]"></div>
        <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-white/10 rounded-full animate-float [animation-delay:0.5s] [animation-duration:3.5s]"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse [animation-duration:6s] [animation-delay:1.5s]"></div>
      </div>
      <div className="text-center mb-16 opacity-0 animate-fade-in [animation-delay:0.2s] mx-auto px-16 max-w-6xl relative z-10">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg">
          Nos Services
        </h1>
        <p className="mx-auto max-w-[800px] text-lg text-white/90 mt-4">
          Découvrez comment Plumeria peut transformer votre présence visuelle et digitale.
        </p>
      </div>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {serviceSections.map((section, index) => (
          <section
            key={index}
            ref={index === 0 ? section1Ref : section2Ref} // Assign refs dynamically
            className={`mx-auto px-16 max-w-6xl grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mb-16 opacity-0 ${
              (index === 0 && section1HasAnimated) || (index === 1 && section2HasAnimated)
                ? `animate-fade-in [animation-delay:${0.4 + index * 0.2}s]`
                : ""
            } ${index === serviceSections.length - 1 ? "mb-0" : ""}`}
          >
            <div className={`space-y-6 ${section.imageOrderLast ? "lg:order-last" : ""}`}>
              <div className="flex items-center gap-4 text-white">
                {" "}
                {/* Changed to text-white */}
                <section.icon className="h-10 w-10 text-accent" /> {/* Icon color from accent */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{section.title}</h2>
              </div>
              <p className="text-lg text-white/90">{section.description}</p> {/* Changed to white/90 */}
              <ul className="space-y-2 text-lg text-white/90">
                {" "}
                {/* Changed to white/90 */}
                {section.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <AnimatedButton className="bg-accent hover:bg-accent/90 text-white shadow-lg transition-all duration-300">
                {" "}
                {/* Button uses accent */}
                <Link href="/contact">{section.buttonText}</Link>
              </AnimatedButton>
            </div>
            <div className={`flex justify-center ${section.imageOrderLast ? "lg:order-first" : ""}`}>
              <Image
                src={section.imageSrc || "/placeholder.svg"}
                width={600}
                height={400}
                alt={section.imageAlt}
                className="rounded-lg shadow-lg object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>
        ))}
      </div>
      {/* Mobile Carousel Layout */}
      <div
        ref={mobileCarouselRef}
        className={`md:hidden relative opacity-0 ${mobileCarouselHasAnimated ? "animate-fade-in [animation-delay:0.4s]" : ""}`}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 items-stretch">
            {serviceSections.map((section, index) => (
              <CarouselItem key={index} className="pl-4 basis-full">
                <div className="p-1 h-full">
                  <div className="bg-white/10 p-6 rounded-lg shadow-md h-full flex flex-col backdrop-blur-sm border border-white/20">
                    <Image
                      src={section.imageSrc || "/placeholder.svg"}
                      width={400}
                      height={200} // Adjusted height for mobile carousel
                      alt={section.imageAlt}
                      className="w-full h-48 object-cover rounded-t-lg mb-4" // Added mb-4 for spacing
                    />
                    <div className="flex items-center gap-3 text-white">
                      <section.icon className="h-8 w-8 text-accent" />
                      <h2 className="text-2xl font-bold tracking-tighter">{section.title}</h2>
                    </div>
                    <p className="text-base text-white/90 mt-4">{section.description}</p>
                    <ul className="space-y-1 text-base text-white/90 text-left mt-4 flex-grow">
                      {section.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <div className="flex justify-center mt-auto pt-4">
                      <AnimatedButton className="bg-accent hover:bg-accent/90 text-white shadow-lg transition-all duration-300">
                        <Link href="/contact">{section.buttonText}</Link>
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        
        </Carousel>
      </div>
    </div>
  )
}
