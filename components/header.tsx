"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Menu, Flower } from "lucide-react"

export default function Header() {
  return (
    <header className=" flex h-20 w-full items-center px-4 md:px-20 bg-background2 text-foreground shadow-sm border-b border-gray-800">
      <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary">
        <img className="w-7" src="7_Plumeria_Export_Couleur_icon.png" alt="Plumeria icon" />{" "}
        {/* Using placeholder for image */}
        <span>Plumeria</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          Accueil
        </Link>
        <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          À propos
        </Link>
        <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="/realisations" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          Réalisations
        </Link>
        <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          Blog
        </Link>
        <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>
      <Button asChild className="ml-6 hidden lg:inline-flex bg-primary hover:bg-primary/90 text-white">
        <Link href="/contact">Demander un devis</Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto lg:hidden bg-transparent border-foreground text-foreground hover:bg-gray-800"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-background2 text-foreground border-r border-gray-800">
          <SheetClose asChild>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary mb-6">
              <Flower className="h-6 w-6" />
              <span>Plumeria</span>
            </Link>
          </SheetClose>
          <div className="grid gap-4 py-6">
            <SheetClose asChild>
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold text-foreground hover:text-primary"
              >
                Accueil
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/about"
                className="flex w-full items-center py-2 text-lg font-semibold text-foreground hover:text-primary"
              >
                À propos
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/services"
                className="flex w-full items-center py-2 text-lg font-semibold text-foreground hover:text-primary"
              >
                Services
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/realisations"
                className="flex w-full items-center py-2 text-lg font-semibold text-foreground hover:text-primary"
              >
                Réalisations
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/blog"
                className="flex w-full items-center py-2 text-lg font-semibold text-foreground hover:text-primary"
              >
                Blog
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/contact"
                className="flex w-full items-center py-2 text-lg font-semibold text-foreground hover:text-primary"
              >
                Contact
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
