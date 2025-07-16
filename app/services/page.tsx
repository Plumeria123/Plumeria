import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette, Megaphone } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
      imageSrc: "i1.jpg",
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
      imageSrc: "i2.jpg",
      imageAlt: "Digital Advertising & Strategy",
      buttonText: "Demander un devis Publicité",
      imageOrderLast: true, // For desktop layout
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">Nos Services</h1>
        <p className="mx-auto max-w-[800px] text-lg text-gray-300 mt-4">
          Découvrez comment Plumeria peut transformer votre présence visuelle et digitale.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {serviceSections.map((section, index) => (
          <section
            key={index}
            className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mb-16 ${
              index === serviceSections.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className={`space-y-6 ${section.imageOrderLast ? "lg:order-last" : ""}`}>
              <div className="flex items-center gap-4 text-primary">
                <section.icon className="h-10 w-10" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{section.title}</h2>
              </div>
              <p className="text-lg text-gray-300">{section.description}</p>
              <ul className="space-y-2 text-lg text-gray-300">
                {section.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">{section.buttonText}</Link>
              </Button>
            </div>
            <div className={`flex justify-center ${section.imageOrderLast ? "lg:order-first" : ""}`}>
              <Image
                src={section.imageSrc || "/placeholder.svg"}
                width={600}
                height={400}
                alt={section.imageAlt}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </section>
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
            {serviceSections.map((section, index) => (
              <CarouselItem key={index} className="pl-4 basis-full">
                <div className="p-1 h-full">
                  <div className="bg-black p-6 rounded-lg shadow-md h-full flex flex-col">
                    <div className="flex items-center gap-3 text-primary">
                      {" "}
                      {/* Removed justify-center */}
                      <section.icon className="h-8 w-8" />
                      <h2 className="text-2xl font-bold tracking-tighter">{section.title}</h2>{" "}
                      {/* Removed text-center */}
                    </div>
                    <p className="text-base text-white-700 mt-4">{section.description}</p> {/* Removed text-center */}
                    <ul className="space-y-1 text-base text-white-700 text-left mt-4">
                      {section.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <div className="flex justify-center mt-auto pt-4">
                      <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                        <Link href="/contact">{section.buttonText}</Link>
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
    </div>
  )
}
