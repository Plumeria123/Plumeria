"use client" // This component needs to be a client component to use hooks
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer" // Import the new hook
import { AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import AnimatedButton from "@/components/animated-button"
import { useEffect, useState } from "react"
import { TypewriterEffect } from "@/components/typing-animation"
import { motion,AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote: "Plumeria a transformé notre image. Nous avons gagné en professionnalisme et cohérence.",
    author: "Salma B. (MyCactusShop)",
  },
  {
    quote: "Très satisfait ! Les visuels boostent l'engagement sur les réseaux.",
    author: "Nabil E. (E-commerce)",
  },
  {
    quote: "Meriam a capté exactement ce que je voulais. Je reçois plus de demandes grâce à Instagram.",
    author: "Hajar K. (Coach)",
  },
]

const servicePoles = [
  {
    title: "1. Pôle Design & Identité Visuelle:",
    features: [
      "Création de logo & charte graphique",
      "Flyers, brochures, cartes de visite",
      "Packaging & design produit",
      "Templates réseaux sociaux",
    ],
  },
  {
    title: "2. Pôle Publicité & Stratégie:",
    features: [
      "Campagnes Meta Ads (Facebook/Instagram)",
      "Publicité Google Ads",
      "Contenu sponsorisé",
      "Conseil en storytelling digital",
    ],
  },
]

const projects = [
  {
    name: "Nom du Projet 1",
    category: "Catégorie",
    image: "1.jpg",
  },
  {
    name: "Nom du Projet 2",
    category: "Catégorie",
    image: "2.jpg",
  },
  {
    name: "Nom du Projet 3",
    category: "Catégorie",
    image: "3.jpg",
  },
  {
    name: "Nom du Projet 4", // This and subsequent projects will not be displayed
    category: "Catégorie",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Nom du Projet 5",
    category: "Catégorie",
    image: "/placeholder.svg?height=300&width=400",
  },
]


export default function HomePage() {
  const displayedProjects = projects.slice(0, 3)

  // Refs for intersection observation, now returning hasAnimated
  const [section2Ref, section2HasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [section3Ref, section3HasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [section4Ref, section4HasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [section5Ref, section5HasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [section6Ref, section6HasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [faqRef, faqHasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [ctaRef, ctaHasAnimated] = useIntersectionObserver({ threshold: 0.1 })
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({ success: null, message: "" });

  // Clear message after 5 seconds
  useEffect(() => {
    if (submissionStatus.success !== null) {
      const timer = setTimeout(() => {
        setSubmissionStatus({ success: null, message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  async function handleSubmit(e:any) {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      
      email: form.email.value,
      
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmissionStatus({
          success: true,
          message: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
        });
        form.reset();
      } else {
        setSubmissionStatus({
          success: false,
          message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par email.",
        });
      }
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: "Erreur de connexion. Vérifiez votre réseau et réessayez.",
      });
    }
  }
 
  return (
    <>
      {/* Section 1: Hero (animates on load) */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-[#55C3BA] via-gray-400 to-gray-100 text-white relative overflow-hidden opacity-0 animate-fade-in [animation-delay:0.2s]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce [animation-delay:0s] [animation-duration:3s]"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce [animation-delay:1s] [animation-duration:4s]"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce [animation-delay:2s] [animation-duration:5s]"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-bounce [animation-delay:0.5s] [animation-duration:3.5s]"></div>
        </div>

        {/* Animated Wave Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white" className="animate-pulse">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z;
                        M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z;
                        M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              />
            </path>
          </svg>
        </div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 70% 20%, #006EAC 0%, transparent 50%), radial-gradient(circle at 30% 80%, #55C3BA 0%, transparent 50%)",
          }}
        ></div>
        <div className="container md:px-6 text-center relative z-10 mx-auto px-16 max-w-6xl">
          <div className="space-y-6">
         <TypewriterEffect
        baseText="Plumeria – L'Agence "
        wordsToAnimate={["Design", "publicité"]}
        typingSpeed={100}
        erasingSpeed={50}
        delayBetweenActions={1000}
      />
            

           <p className="mx-auto max-w-[900px] text-lg md:text-xl text-gray-300 opacity-0 animate-fade-in [animation-delay:4.3s]">
  Nous accompagnons les marques audacieuses dans la création d'une identité visuelle forte et dans des
  campagnes publicitaires qui font vraiment la différence. Créativité, stratégie & excellence sont au cœur
  de chaque projet signé Plumeria.
</p>

            <div className="flex justify-center">
              <AnimatedButton className="mt-8 px-8 py-3 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300">
                <Link href="/contact">Contactez-Nous</Link>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Présentation */}
      <section
        ref={section2Ref}
        className={`w-full py-12 md:py-24 lg:py-32 bg-white text-foreground opacity-0 ${section2HasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        <div className="container md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16 mx-auto px-16 max-w-6xl">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              L'agence design & publicité qui donne du pouvoir à votre image de marque
            </h2>
            <p className="text-lg text-gray-700">
              Plumeria, fondée par Meriam Boutiri, est une agence marocaine spécialisée dans le design graphique sur
              mesure et la publicité créative à fort impact.
            </p>
            <p className="text-lg text-gray-700">
              Nous ne faisons pas simplement de "jolis visuels". Nous créons des identités puissantes, des contenus
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
            <AnimatedButton className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent">
              <Link href="/about">Voir plus</Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Section 3: Nos Réalisations */}
      <section
        ref={section3Ref}
        className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#55C3BA] to-[#4AB3A8] text-white relative overflow-hidden opacity-0 ${section3HasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-8 h-8 border-2 border-white/20 rotate-45 animate-spin [animation-duration:8s]"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-pulse [animation-duration:3s]"></div>
          <div className="absolute bottom-40 left-20 w-10 h-10 border-2 border-white/20 animate-bounce [animation-duration:4s]"></div>
          <div className="absolute bottom-20 right-40 w-12 h-12 border-2 border-white/20 rotate-45 animate-spin [animation-duration:6s]"></div>
          <div className="absolute top-60 left-1/2 w-4 h-4 bg-white/20 rounded-full animate-ping [animation-duration:2s]"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse [animation-duration:4s]">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-white/20 rounded-sm"></div>
            ))}
          </div>
        </div>

        <div className="container md:px-6 text-center mx-auto px-16 max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-8 drop-shadow-lg">
            Nos Réalisations
          </h2>
          <p className="text-lg text-white/90 mb-12">
            Découvrez quelques-uns de nos projets qui ont aidé nos clients à briller.
          </p>
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform md:hover:scale-105 transition-all duration-300 hover:bg-white/20 border border-white/20"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  width={400}
                  height={300}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-white">{project.name}</h3>
                  <p className="text-sm text-white/80">{project.category}</p>
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
                {displayedProjects.map((project, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <div className="p-1 h-full">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full flex flex-col border border-white/20">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          width={400}
                          height={300}
                          alt={project.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex-grow">
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

          <div className="flex justify-center">
            <AnimatedButton className="mt-12 bg-white/20 hover:bg-white/30 text-white shadow-lg transition-all duration-300 md:hover:scale-105 backdrop-blur-sm border border-white/30">
              <Link href="/realisations">Voir toutes les réalisations</Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Section 4: Nos Services */}
      <section
        ref={section4Ref}
        className={`w-full py-12 md:py-24 lg:py-32 bg-white text-foreground opacity-0 ${section4HasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        <div className="container md:px-6 text-center mx-auto px-16 max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
            Des services sur mesure pour révéler tout le potentiel de votre marque
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-gray-700 mb-12">
            Chez Plumeria, nous combinons la force du design graphique et l'efficacité de la publicité digitale pour
            créer une présence visuelle cohérente, élégante et performante. Notre équipe transforme vos idées en images
            fortes, vos valeurs en histoires captivantes, et vos objectifs en résultats mesurables.
          </p>
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePoles.map((pole, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-lg shadow-md text-left transform md:hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{pole.title}</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  {pole.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="font-semibold text-accent">✓</span> {feature}
                    </li>
                  ))}
                </ul>
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
                {servicePoles.map((pole, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <div className="p-1 h-full">
                      <div className="bg-gray-100 p-8 rounded-lg shadow-md text-left h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-primary mb-4">{pole.title}</h3>
                        <ul className="space-y-2 text-lg text-gray-700">
                          {pole.features.map((feature, idx) => (
                            <li key={idx}>
                              <span className="font-semibold text-accent">✓</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white">
                <ChevronLeft className="w-5 h-5" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white">
                <ChevronRight className="w-5 h-5" />
              </CarouselNext>
            </Carousel>
          </div>

          <div className="flex justify-center">
            <AnimatedButton className="mt-12 bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 md:hover:scale-105">
              <Link href="/contact">Obtenir un devis</Link>
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Section 5: Nos Partenaires */}
      <section
        ref={section5Ref}
        className={`w-full py-12 md:py-24 lg:py-32 bg-gray-200 text-white opacity-0 ${section5HasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        <div className="container md:px-6 text-center mx-auto px-16 max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
            Nos Partenaires
          </h2>
          <p className="text-lg text-black mb-12">
            Nous sommes fiers de collaborer avec des entreprises de premier plan.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {/* Placeholder for partner logos */}
            <Image
              src="aws.svg"
              width={120}
              height={60}
              alt="Partner Logo 1"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert" // Added invert for dark background
            />
            <Image
              src="prestashop-logo.svg"
              width={120}
              height={60}
              alt="Partner Logo 2"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert"
            />
            <Image
              src="gc-p-.svg"
              width={120}
              height={60}
              alt="Partner Logo 3"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert"
            />
            <Image
              src="a.svg"
              width={120}
              height={60}
              alt="Partner Logo 4"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert"
            />
            <Image
              src="shfy-p-.svg"
              width={120}
              height={60}
              alt="Partner Logo 5"
              className="mx-auto opacity-70 hover:opacity-100 transition-opacity invert"
            />
          </div>
        </div>
      </section>

      {/* Section 6: Témoignages Clients */}
      <section
        ref={section6Ref}
        className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white text-foreground relative overflow-hidden opacity-0 ${section6HasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        {/* Floating Quote Marks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-accent/20 text-8xl font-serif animate-bounce [animation-duration:4s] [animation-delay:0s]">
            "
          </div>
          <div className="absolute top-40 right-20 text-primary/20 text-6xl font-serif animate-bounce [animation-duration:5s] [animation-delay:1s]">
            "
          </div>
          <div className="absolute bottom-40 left-1/4 text-accent/20 text-7xl font-serif animate-bounce [animation-duration:3.5s] [animation-delay:2s]">
            "
          </div>
          <div className="absolute bottom-20 right-1/3 text-primary/20 text-5xl font-serif animate-bounce [animation-duration:4.5s] [animation-delay:0.5s]">
            "
          </div>
        </div>

        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-400/30 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                fontSize: `${12 + Math.random() * 8}px`,
              }}
            >
              ⭐
            </div>
          ))}
        </div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-red-400/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
                fontSize: `${16 + Math.random() * 12}px`,
              }}
            >
              💝
            </div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-32 right-32 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse [animation-duration:6s]"></div>
        <div className="absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse [animation-duration:4s] [animation-delay:2s]"></div>

        <div className="container md:px-6 text-center mx-auto px-16 max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8 relative">
            Témoignages Clients
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
          </h2>
          <p className="text-lg text-gray-700 mb-12">Ce que nos clients disent de nous.</p>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-ropacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm -z-10"></div>

                {/* Quote icon */}
                <div className="absolute top-4 left-4 text-accent/30 text-3xl font-serif">"</div>

                {/* Star rating animation */}
                <div className="flex justify-center mb-4 space-x-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className="text-yellow-400 animate-bounce"
                      style={{
                        animationDelay: `${starIndex * 0.1}s`,
                        animationDuration: "2s",
                      }}
                    >
                      ⭐
                    </div>
                  ))}
                </div>

                <p className="italic text-gray-700 mb-6 text-lg leading-relaxed relative z-10">
                  {'"'}
                  {testimonial.quote}
                  {'"'}
                </p>
                <p className="font-semibold text-primary text-lg relative z-10">- {testimonial.author}</p>

                {/* Floating sparkles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {Array.from({ length: 6 }).map((_, sparkleIndex) => (
                    <div
                      key={sparkleIndex}
                      className="absolute text-accent/40 animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${sparkleIndex * 0.2}s`,
                        animationDuration: "1.5s",
                      }}
                    >
                      ✨
                    </div>
                  ))}
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
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full">
                    <div className="p-1 h-full">
                      <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 h-full flex flex-col justify-center relative overflow-hidden">
                        {/* Quote icon */}
                        <div className="absolute top-4 left-4 text-accent/30 text-3xl font-serif">"</div>

                        {/* Star rating */}
                        <div className="flex justify-center mb-4 space-x-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <div
                              key={starIndex}
                              className="text-yellow-400 animate-bounce"
                              style={{
                                animationDelay: `${starIndex * 0.1}s`,
                                animationDuration: "2s",
                              }}
                            >
                              ⭐
                            </div>
                          ))}
                        </div>

                        <p className="italic text-gray-700 mb-6 text-lg leading-relaxed">
                          {'"'}
                          {testimonial.quote}
                          {'"'}
                        </p>
                        <p className="font-semibold text-primary text-lg">- {testimonial.author}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Call to action */}
       
        </div>
      </section>

      {/* FAQ (Allégée) */}
      <section
        ref={faqRef}
        className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#55C3BA] via-[#4AB3A8] to-[#55C3BA] text-white relative overflow-hidden opacity-0 ${faqHasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Question Marks */}
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
        </div>

        <div className="container md:px-6 mx-auto px-16 max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center mb-8 drop-shadow-lg">
            Questions Fréquentes
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
              <AccordionTrigger className="text-sm font-semibold text-white hover:no-underline px-6 py-4">
                Types d'entreprises ?
              </AccordionTrigger>
              <AccordionContent className="text-white/90 text-base px-6 pb-4">
                Nous travaillons avec tous types d&apos;entreprises (startups, e-commerçants, PME, etc.). Nous adaptons
                notre style et nos stratégies à votre univers et à vos objectifs spécifiques.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
              <AccordionTrigger className="text-sm font-semibold text-white hover:no-underline px-6 py-4">
                Délai pour une identité visuelle ?
              </AccordionTrigger>
              <AccordionContent className="text-white/90 text-base px-6 pb-4">
                Le délai pour la création d&apos;une identité visuelle complète est généralement de 7 à 15 jours,
                incluant le brief initial, les phases de conception et les ajustements basés sur vos retours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/20 bg-white/10 rounded-lg mb-4 backdrop-blur-sm">
              <AccordionTrigger className="text-sm font-semibold text-white hover:no-underline px-6 py-4">
                Logo seul possible ?
              </AccordionTrigger>
              <AccordionContent className="text-white/90 text-base px-6 pb-4">
                Oui, il est possible de commander uniquement un logo. Cependant, pour une image de marque forte et
                cohérente, nous recommandons vivement une approche globale incluant le logo, les couleurs, les
                typographies et la charte graphique complète.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-8">
            <div className="flex justify-center">
              <AnimatedButton className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30">
                <Link href="/faq">Voir toutes les FAQs</Link>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Section Finale: CTA + Contact Rapide */}
      <section
        ref={ctaRef}
        className={`w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#55C3BA] to-[#006EAC] text-white relative overflow-hidden opacity-0 ${ctaHasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
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

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse [animation-duration:4s]"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse [animation-duration:3s] [animation-delay:1s]"></div>

        <div className="container  md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mx-auto px-16 max-w-6xl relative z-10">
          <div className="space-y-4 text-center lg:text-left ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-lg">
              Prêt à faire briller votre marque ?
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Nous donnons vie à vos idées. Parlez-nous de votre projet, on s'occupe du reste !
            </p>
            <div className="hidden  md:block">
              <AnimatedButton className="mt-6 bg-white/20 hover:bg-white/30 text-white shadow-lg backdrop-blur-sm border border-white/30">
                <Link href="/contact">Demander un devis</Link>
              </AnimatedButton>
            </div>
            <div className="md:hidden relative flex justify-center">
              <AnimatedButton className="mt-6 bg-white/20 hover:bg-white/30 text-white shadow-lg backdrop-blur-sm border border-white/30">
                <Link href="/contact">Demander un devis</Link>
              </AnimatedButton>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg text-white border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Rapide</h3>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/90">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  className="flex h-10 w-full rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/90">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  className="flex h-10 w-full rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet..."
                  rows={4}
                  className="flex min-h-[80px] w-full rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
              </div>
              <AnimatedButton className="w-full bg-white/20 hover:bg-white/30 text-white shadow-lg backdrop-blur-sm border border-white/30">
                Envoyer
              </AnimatedButton>
               {/* Animated status message */}
                  <AnimatePresence>
                    {submissionStatus.success !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 rounded-md border ${
                          submissionStatus.success
                            ? "bg-green-50 border-green-200 text-green-700"
                            : "bg-red-50 border-red-200 text-red-700"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          {submissionStatus.success ? (
                            <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                          )}
                          <p className="text-sm">{submissionStatus.message}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
