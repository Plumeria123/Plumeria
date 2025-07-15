import Link from "next/link"
import { Flower, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-background text-foreground border-t border-gray-800">
      <div className="container px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
            <img className="w-8" src="7_Plumeria_Export_Couleur_icon.png" alt="" />
            <span>Plumeria</span>
          </Link>
         
        </div>

        {/* Menu Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-primary mb-4">Menu</h3>
          <nav className="flex flex-col gap-2 text-center sm:text-left">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">Tél: 0691832300</p>
            <p className="text-sm text-muted-foreground">Email: hello@plumeria.ma</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold text-primary mb-4">Suivez-nous :</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Plumeria. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
