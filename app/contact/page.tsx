"use client" // This component needs to be a client component to use hooks
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Mail, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer" // Import the new hook
import AnimatedButton from "@/components/animated-button"
import { useEffect, useState } from "react"
import { motion,AnimatePresence } from "framer-motion"

export default function ContactPage() {
  // Refs for intersection observation with explicit types
  const [titleRef, titleHasAnimated] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 })
  const [descriptionRef, descriptionHasAnimated] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 })
  const [formRef, formHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [contactMethodsRef, contactMethodsHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
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
    <div className="relative overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#55C3BA] to-[#006EAC] text-white">
      {/* Animated background elements (fluid shapes only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce [animation-delay:0s] [animation-duration:3s]"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse [animation-delay:1s] [animation-duration:4s]"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-spin [animation-delay:2s] [animation-duration:5s]"></div>
        <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-white/10 rounded-full animate-float [animation-delay:0.5s] [animation-duration:3.5s]"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse [animation-duration:6s] [animation-delay:1.5s]"></div>
      </div>

      <section className="text-center mb-16 relative z-10">
        <h1
          ref={titleRef}
          className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg mx-auto px-16 max-w-6xl opacity-0 ${titleHasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
        >
          Contactez-nous
        </h1>
        <h2
          ref={descriptionRef}
          className={`mx-auto max-w-[800px] text-lg md:text-xl text-white/90 mt-4 opacity-0 ${descriptionHasAnimated ? "animate-fade-in [animation-delay:0.4s]" : ""}`}
        >
          Un projet, une question ou une idée ? Parlons-en dès maintenant.
        </h2>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mx-auto px-16 max-w-6xl relative z-10">
        <div
          ref={formRef}
          className={`bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl text-white border border-white/20 opacity-0 ${formHasAnimated ? "animate-fade-in [animation-delay:0.6s]" : ""}`}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-white/90">
                Nom Complet
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Votre nom et prénom"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-accent"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-white/90">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Votre adresse email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-accent"
              />
            </div>
          
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-white/90">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Décrivez votre projet..."
                rows={6}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-accent"
              />
            </div>
            <AnimatedButton className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg transition-all duration-300">
              Envoyer le message
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
        <div
          ref={contactMethodsRef}
          className={`space-y-8 text-center lg:text-left opacity-0 ${contactMethodsHasAnimated ? "animate-fade-in [animation-delay:0.8s]" : ""}`}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Autres moyens de nous contacter</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="tel:+212691832300"
              className="flex flex-col items-center lg:items-start p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group shadow-md border border-white/20"
            >
              <Phone className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-white">Appeler maintenant</span>
              <span className="text-white/80 text-sm">0691832300</span>
            </Link>
            <Link
              href="https://wa.me/212691832300"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center lg:items-start p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group shadow-md border border-white/20"
            >
              <MessageCircle className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-white">WhatsApp</span>
              <span className="text-white/80 text-sm">Discutez avec nous</span>
            </Link>
            <Link
              href="mailto:hello@plumeria.ma"
              className="flex flex-col items-center sm:col-span-2 lg:col-span-1 lg:items-start p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group shadow-md border border-white/20"
            >
              <Mail className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-white">Envoyer un email</span>
              <span className="text-white/80 text-sm">hello@plumeria.ma</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
