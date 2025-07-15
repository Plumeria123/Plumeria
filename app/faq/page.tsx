import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
          Foire aux Questions
        </h1>
        <p className="mx-auto max-w-[800px] text-lg text-gray-300 mt-4">
          Trouvez les réponses à vos questions les plus fréquentes concernant nos services.
        </p>
      </div>

      <Accordion type="multiple" className="w-full max-w-4xl mx-auto">
        <AccordionItem value="item-1" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
            Quels types d’entreprises accompagnez-vous ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base">
            Nous accompagnons une large gamme d&apos;entreprises, des startups innovantes aux e-commerçants établis, en
            passant par les PME et les coachs indépendants. Notre approche est toujours sur mesure, et nous adaptons
            notre style et nos stratégies pour correspondre parfaitement à votre univers et à vos objectifs spécifiques.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
            Quel est le délai pour la création d&apos;une identité visuelle complète ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base">
            Le délai pour la création d&apos;une identité visuelle complète (logo, charte graphique, etc.) est
            généralement de 7 à 15 jours ouvrables. Ce processus inclut un brief détaillé, plusieurs phases de
            conception et des sessions d&apos;ajustement basées sur vos retours pour garantir un résultat qui vous
            satisfait pleinement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
            Est-il possible de commander uniquement un logo ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base">
            Oui, il est tout à fait possible de commander uniquement un logo. Cependant, pour construire une image de
            marque forte, cohérente et mémorable, nous recommandons vivement une approche globale qui inclut non
            seulement le logo, mais aussi la définition des couleurs, des typographies et une charte graphique complète.
            Cela assure une uniformité sur tous vos supports de communication.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
            Proposez-vous la gestion complète des réseaux sociaux ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base">
            Nous ne proposons pas de gestion complète des réseaux sociaux au quotidien. Notre expertise se concentre sur
            la création de templates personnalisés, de visuels percutants et de conseils stratégiques pour vous aider à
            optimiser votre présence. Nous vous donnons les outils et la direction pour que vous puissiez gérer vos
            plateformes avec succès.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
            Avez-vous une expertise en publicité pour l&apos;e-commerce ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base">
            Absolument ! Nous avons une solide expertise en publicité pour l&apos;e-commerce, notamment avec les
            campagnes Facebook Ads et Google Shopping. Notre objectif est de générer des ventes et d&apos;augmenter
            votre retour sur investissement publicitaire grâce à des stratégies ciblées et des créatifs optimisés.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
            Vos prestations sont-elles disponibles à distance ?
          </AccordionTrigger>
          <AccordionContent className="text-gray-300 text-base">
            Oui, toutes nos prestations sont disponibles à distance. Nous travaillons avec des clients partout au Maroc
            et à l&apos;international grâce à des outils de communication modernes (visioconférence, WhatsApp, email).
            La distance n&apos;est pas un obstacle à une collaboration efficace et créative.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
