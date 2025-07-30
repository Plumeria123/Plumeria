"use client" // This component needs to be a client component to use hooks
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer" // Import the new hook

export default function FAQPage() {
  // Refs for intersection observation with explicit types
  const [titleRef, titleHasAnimated] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 })
  const [descriptionRef, descriptionHasAnimated] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 })
  const [accordionRef, accordionHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div className="relative overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#55C3BA] to-[#006EAC] text-white">
      {/* Animated background elements (fluid shapes only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-white/10 text-6xl animate-bounce [animation-duration:3s] [animation-delay:0s]">
          ?
        </div>
        <div className="absolute top-40 right-20 text-white/10 text-4xl animate-bounce [animation-duration:4s] [animation-delay:1s]">
          ?
        </div>
        <div className="absolute bottom-40 left-1/4 text-white/10 text-5xl animate-bounce [animation-duration:3.5s] [animation-delay:2s]">
          ?
        </div>
        <div className="absolute bottom-20 right-1/3 text-white/10 text-3xl animate-bounce [animation-duration:4.5s] [animation-delay:0.5s]">
          ?
        </div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse [animation-duration:6s] [animation-delay:1.5s]"></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h1
          ref={titleRef}
          className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg opacity-0 ${titleHasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
        >
          Foire aux Questions
        </h1>
        <p
          ref={descriptionRef}
          className={`mx-auto max-w-[800px] text-lg text-white/90 mt-4 opacity-0 ${descriptionHasAnimated ? "animate-fade-in [animation-delay:0.4s]" : ""}`}
        >
          Trouvez les réponses à vos questions les plus fréquentes concernant nos services.
        </p>
      </div>

      <div
        ref={accordionRef}
        className={`w-full max-w-4xl mx-auto opacity-0 ${accordionHasAnimated ? "animate-fade-in [animation-delay:0.6s]" : ""} relative z-10`}
      >
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
            <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline px-6 py-4">
              Quels types d’entreprises accompagnez-vous ?
            </AccordionTrigger>
            <AccordionContent className="text-white/90 text-base px-6 pb-4">
              Nous accompagnons une large gamme d&apos;entreprises, des startups innovantes aux e-commerçants établis,
              en passant par les PME et les coachs indépendants. Notre approche est toujours sur mesure, et nous
              adaptons notre style et nos stratégies pour correspondre parfaitement à votre univers et à vos objectifs
              spécifiques.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
            <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline px-6 py-4">
              Quel est le délai pour la création d&apos;une identité visuelle complète ?
            </AccordionTrigger>
            <AccordionContent className="text-white/90 text-base px-6 pb-4">
              Le délai pour la création d&apos;une identité visuelle complète (logo, charte graphique, etc.) est
              généralement de 7 à 15 jours ouvrables. Ce processus inclut un brief détaillé, plusieurs phases de
              conception et des sessions d&apos;ajustement basées sur vos retours pour garantir un résultat qui vous
              satisfait pleinement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
            <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline px-6 py-4">
              Est-il possible de commander uniquement un logo ?
            </AccordionTrigger>
            <AccordionContent className="text-white/90 text-base px-6 pb-4">
              Oui, il est tout à fait possible de commander uniquement un logo. Cependant, pour construire une image de
              marque forte, cohérente et mémorable, nous recommandons vivement une approche globale qui inclut non
              seulement le logo, mais aussi la définition des couleurs, des typographies et une charte graphique
              complète. Cela assure une uniformité sur tous vos supports de communication.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
            <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline px-6 py-4">
              Proposez-vous la gestion complète des réseaux sociaux ?
            </AccordionTrigger>
            <AccordionContent className="text-white/90 text-base px-6 pb-4">
              Nous ne proposons pas de gestion complète des réseaux sociaux au quotidien. Notre expertise se concentre
              sur la création de templates personnalisés, de visuels percutants et de conseils stratégiques pour vous
              aider à optimiser votre présence. Nous vous donnons les outils et la direction pour que vous puissiez
              gérer vos plateformes avec succès.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
            <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline px-6 py-4">
              Avez-vous une expertise en publicité pour l&apos;e-commerce ?
            </AccordionTrigger>
            <AccordionContent className="text-white/90 text-base px-6 pb-4">
              Absolument ! Nous avons une solide expertise en publicité pour l&apos;e-commerce, notamment avec les
              campagnes Facebook Ads et Google Shopping. Notre objectif est de générer des ventes et d&apos;augmenter
              votre retour sur investissement publicitaire grâce à des stratégies ciblées et des créatifs optimisés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
            <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline px-6 py-4">
              Vos prestations sont-elles disponibles à distance ?
            </AccordionTrigger>
            <AccordionContent className="text-white/90 text-base px-6 pb-4">
              Oui, toutes nos prestations sont disponibles à distance. Nous travaillons avec des clients partout au
              Maroc et à l&apos;international grâce à des outils de communication modernes (visioconférence, WhatsApp,
              email). La distance n&apos;est pas un obstacle à une collaboration efficace et créative.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
