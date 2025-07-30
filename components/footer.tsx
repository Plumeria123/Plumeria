import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image" // Import Image component

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-white text-foreground relative overflow-hidden border-t border-gray-200">
      {/* Animated background elements - adjusted for white background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gray-200/30 rounded-full animate-pulse [animation-duration:5s] [animation-delay:0s]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gray-200/30 rounded-full animate-pulse [animation-duration:4s] [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gray-200/30 rounded-full animate-pulse [animation-duration:6s] [animation-delay:2s]"></div>
      </div>

      <div className="container md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-16 max-w-6xl relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4 group">
            <Image
              className="w-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              src="/7_Plumeria_Export_Couleur_icon.png"
              alt="Plumeria Logo"
              width={32}
              height={32}
            />
            <span className="transition-colors duration-300 group-hover:text-accent">Plumeria</span>
          </Link>
          <p className="text-sm text-gray-700 text-center sm:text-left">
            L'agence qui donne du pouvoir à votre image de marque.
          </p>
        </div>
        {/* Menu Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-primary mb-4">Menu</h3>
          <nav className="flex flex-col gap-2 text-center sm:text-left">
            <Link
              href="/"
              className="text-sm text-gray-700 hover:text-primary hover:underline transition-all duration-300 hover:translate-x-1"
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-700 hover:text-primary hover:underline transition-all duration-300 hover:translate-x-1"
            >
              À propos
            </Link>
            <Link
              href="/services"
              className="text-sm text-gray-700 hover:text-primary hover:underline transition-all duration-300 hover:translate-x-1"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-700 hover:text-primary hover:underline transition-all duration-300 hover:translate-x-1"
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-sm text-gray-700 hover:text-primary hover:underline transition-all duration-300 hover:translate-x-1"
            >
              FAQ
            </Link>
          </nav>
        </div>
        {/* Contact Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <p className="text-sm text-gray-700">Tél: 0691832300</p>
            <p className="text-sm text-gray-700">Email: hello@plumeria.ma</p>
          </div>
        </div>
        {/* Social Media Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-primary mb-4">Suivez-nous :</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook" className="group">
              <Facebook className="h-6 w-6 text-primary group-hover:text-accent transition-all duration-300 group-hover:scale-125 group-hover:rotate-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="group">
              <Instagram className="h-6 w-6 text-primary group-hover:text-accent transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-8 text-center relative z-10">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Plumeria. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
