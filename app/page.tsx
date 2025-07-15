import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 70% 20%, #006EAC 0%, transparent 50%), radial-gradient(circle at 30% 80%, #55C3BA 0%, transparent 50%)",
          }}
        ></div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl/none text-white drop-shadow-lg">
              Plumeria – L’Agence Design & Publicité Nº1 au Maroc pour les marques ambitieuses
            </h1>
            <p className="mx-auto max-w-[900px] text-lg md:text-xl text-gray-300">
              Nous accompagnons les marques audacieuses dans la création d’une identité visuelle forte et dans des
              campagnes publicitaires qui font vraiment la différence. Créativité, stratégie & excellence sont au cœur
              de chaque projet signé Plumeria.
            </p>
            <Button
              asChild
              className="mt-8 px-8 py-3 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Contactez-Nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Présentation */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-foreground">
        <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              L’agence design & publicité qui donne du pouvoir à votre image de marque
            </h2>
            <p className="text-lg text-gray-700">
              Plumeria, fondée par Meriam Boutiri, est une agence marocaine spécialisée dans le design graphique sur
              mesure et la publicité créative à fort impact.
            </p>
            <p className="text-lg text-gray-700">
              Nous ne faisons pas simplement de “jolis visuels”. Nous créons des identités puissantes, des contenus
              stratégiques et des campagnes qui transforment votre visibilité en résultats concrets.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
              Pourquoi choisir Plumeria ?
            </h3>
            <ul className="grid gap-4 text-lg text-gray-700">
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
              <Link href="/about">Voir plus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Nos Réalisations */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
            Nos Réalisations
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Découvrez quelques-uns de nos projets qui ont aidé nos clients à briller.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for gallery items */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Projet 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-primary">Nom du Projet 1</h3>
                <p className="text-sm text-gray-400">Catégorie</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Projet 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-primary">Nom du Projet 2</h3>
                <p className="text-sm text-gray-400">Catégorie</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Projet 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-primary">Nom du Projet 3</h3>
                <p className="text-sm text-gray-400">Catégorie</p>
              </div>
            </div>
          </div>
          <Button
            asChild
            className="mt-12 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link href="/realisations">Voir toutes les réalisations</Link>
          </Button>
        </div>
      </section>

      {/* Section 4: Nos Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
            Des services sur mesure pour révéler tout le potentiel de votre marque
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-gray-700 mb-12">
            Chez Plumeria, nous combinons la force du design graphique et l’efficacité de la publicité digitale pour
            créer une présence visuelle cohérente, élégante et performante. Notre équipe transforme vos idées en images
            fortes, vos valeurs en histoires captivantes, et vos objectifs en résultats mesurables.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">1. Pôle Design & Identité Visuelle:</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>
                  <span className="font-semibold text-accent">✓</span> Création de logo & charte graphique
                </li>
                <li>
                  <span className="font-semibold text-accent">✓</span> Flyers, brochures, cartes de visite
                </li>
                <li>
                  <span className="font-semibold text-accent">✓</span> Packaging & design produit
                </li>
                <li>
                  <span className="font-semibold text-accent">✓</span> Templates réseaux sociaux
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">2. Pôle Publicité & Stratégie:</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>
                  <span className="font-semibold text-accent">✓</span> Campagnes Meta Ads (Facebook/Instagram)
                </li>
                <li>
                  <span className="font-semibold text-accent">✓</span> Publicité Google Ads
                </li>
                <li>
                  <span className="font-semibold text-accent">✓</span> Contenu sponsorisé
                </li>
                <li>
                  <span className="font-semibold text-accent">✓</span> Conseil en storytelling digital
                </li>
              </ul>
            </div>
          </div>
          <Button
            asChild
            className="mt-12 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">Obtenir un devis</Link>
          </Button>
        </div>
      </section>

      {/* Section 5: Nos Partenaires */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
            Nos Partenaires
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Nous sommes fiers de collaborer avec des entreprises de premier plan.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {/* Placeholder for partner logos */}
            <Image
              src="/placeholder-logo.svg"
              width={120}
              height={60}
              alt="Partner Logo 1"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert" // Added invert for dark background
            />
            <Image
              src="/placeholder-logo.svg"
              width={120}
              height={60}
              alt="Partner Logo 2"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert"
            />
            <Image
              src="/placeholder-logo.svg"
              width={120}
              height={60}
              alt="Partner Logo 3"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert"
            />
            <Image
              src="/placeholder-logo.svg"
              width={120}
              height={60}
              alt="Partner Logo 4"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert"
            />
            <Image
              src="/placeholder-logo.svg"
              width={120}
              height={60}
              alt="Partner Logo 5"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert"
            />
          </div>
        </div>
      </section>

      {/* Section 6: Témoignages Clients */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
            Témoignages Clients
          </h2>
          <p className="text-lg text-gray-700 mb-12">Ce que nos clients disent de nous.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700 mb-4">
                &quot;Plumeria a transformé notre image. Nous avons gagné en professionnalisme et cohérence.&quot;
              </p>
              <p className="font-semibold text-primary">- Salma B. (MyCactusShop)</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700 mb-4">
                &quot;Très satisfait ! Les visuels boostent l’engagement sur les réseaux.&quot;
              </p>
              <p className="font-semibold text-primary">- Nabil E. (E-commerce)</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700 mb-4">
                &quot;Meriam a capté exactement ce que je voulais. Je reçois plus de demandes grâce à Instagram.&quot;
              </p>
              <p className="font-semibold text-primary">- Hajar K. (Coach)</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Allégée) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary text-center mb-8">
            Questions Fréquentes
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-gray-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                Types d’entreprises ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Nous travaillons avec tous types d&apos;entreprises (startups, e-commerçants, PME, etc.). Nous adaptons
                notre style et nos stratégies à votre univers et à vos objectifs spécifiques.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-gray-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                Délai pour une identité visuelle ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Le délai pour la création d&apos;une identité visuelle complète est généralement de 7 à 15 jours,
                incluant le brief initial, les phases de conception et les ajustements basés sur vos retours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-gray-800">
              <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                Logo seul possible ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Oui, il est possible de commander uniquement un logo. Cependant, pour une image de marque forte et
                cohérente, nous recommandons vivement une approche globale incluant le logo, les couleurs, les
                typographies et la charte graphique complète.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              <Link href="/faq">Voir toutes les FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Finale: CTA + Contact Rapide */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
        <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Prêt à faire briller votre marque ?
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Nous donnons vie à vos idées. Parlez-nous de votre projet, on s’occupe du reste !
            </p>
            <Button
              asChild
              className="mt-6 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0 bg-gray-800 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold text-primary mb-4">Contact Rapide</h3>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Votre email"
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Décrivez votre projet..."
                  rows={4}
                  className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
