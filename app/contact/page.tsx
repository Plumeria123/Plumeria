import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">Contactez-nous</h1>
        <h2 className="mx-auto max-w-[800px] text-lg md:text-xl text-gray-300 mt-4">
          Un projet, une question ou une idée ? Parlons-en dès maintenant.
        </h2>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
          <h3 className="text-2xl font-bold text-primary mb-6">Envoyez-nous un message</h3>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Nom Complet
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Votre nom et prénom"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Votre adresse email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                Sujet
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="Sujet de votre message"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Décrivez votre projet..."
                rows={6}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-primary"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Envoyer le message
            </Button>
          </form>
        </div>

        <div className="space-y-8 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-primary mb-4">Autres moyens de nous contacter</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="tel:+212691832300"
              className="flex flex-col items-center lg:items-start p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <Phone className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-primary">Appeler maintenant</span>
              <span className="text-gray-400 text-sm">0691832300</span>
            </Link>
            <Link
              href="https://wa.me/212691832300"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center lg:items-start p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <MessageCircle className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-primary">WhatsApp</span>
              <span className="text-gray-400 text-sm">Discutez avec nous</span>
            </Link>
            <Link
              href="mailto:hello@plumeria.ma"
              className="flex flex-col items-center sm:col-span-2 lg:col-span-1 lg:items-start p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <Mail className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-primary">Envoyer un email</span>
              <span className="text-gray-400 text-sm">hello@plumeria.ma</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
