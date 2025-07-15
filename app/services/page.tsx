import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette, Megaphone } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">Nos Services</h1>
        <p className="mx-auto max-w-[800px] text-lg text-gray-300 mt-4">
          Découvrez comment Plumeria peut transformer votre présence visuelle et digitale.
        </p>
      </div>

      {/* Section 1: Design & Identité Visuelle */}
      <section className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-primary">
            <Palette className="h-10 w-10" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Design & Identité Visuelle</h2>
          </div>
          <p className="text-lg text-gray-300">
            Une identité forte est la base d’une marque durable. Nous créons un univers graphique stratégique qui
            reflète vos valeurs et captive votre audience. Du logo à la charte graphique complète, chaque élément est
            conçu pour l&apos;impact.
          </p>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>• Création de logo & charte graphique</li>
            <li>• Flyers, brochures, cartes de visite</li>
            <li>• Packaging (cosmétiques, e-commerce, etc.)</li>
            <li>• Templates réseaux sociaux personnalisés</li>
          </ul>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">Demander un devis Design</Link>
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            width={600}
            height={400}
            alt="Design & Visual Identity"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Section 2: Publicité & Stratégie Digitale */}
      <section className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-primary">
            <Megaphone className="h-10 w-10" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Publicité & Stratégie Digitale</h2>
          </div>
          <p className="text-lg text-gray-300">
            Un bon design capte l’attention. Une bonne publicité la transforme en action. Nous élaborons des stratégies
            digitales percutantes pour maximiser votre visibilité et générer des résultats concrets.
          </p>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>• Campagnes Meta Ads (Facebook/Instagram)</li>
            <li>• Publicité Google Ads (Search, Display, Shopping)</li>
            <li>• Contenu sponsorisé & partenariats influenceurs</li>
            <li>• Conseil en storytelling digital & stratégie de contenu</li>
          </ul>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">Demander un devis Publicité</Link>
          </Button>
        </div>
        <div className="flex justify-center lg:order-last">
          <Image
            src="/placeholder.svg?height=400&width=600"
            width={600}
            height={400}
            alt="Digital Advertising & Strategy"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
    </div>
  )
}
