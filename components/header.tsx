"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import AnimatedButton from "./animated-button"

export default function Header() {
  return (
   <header className="fixed top-0 left-0 right-0 z-50 flex h-20 w-full items-center px-4 md:px-20 bg-white text-foreground shadow-lg backdrop-blur-md">
      {/* Animated background elements (kept for subtle effect on white) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-accent/5 animate-gradient-shift"></div>{" "}
        {/* Reduced opacity */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gray-200/30 rounded-full blur-xl animate-pulse [animation-duration:4s] [animation-delay:0.5s]"></div>{" "}
        {/* Changed to gray for white background */}
      </div>

      <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary relative z-10 group">
        <Image
          className="w-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          src="/7_Plumeria_Export_Couleur_icon.png"
          alt="Plumeria icon"
          width={28}
          height={28}
        />
        <span className="transition-colors duration-300 group-hover:text-accent">Plumeria</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6 relative z-10">
        <Link
          href="/"
          className="text-sm font-medium text-primary hover:text-accent transition-all duration-300 hover:scale-105"
        >
          Accueil
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-primary hover:text-accent transition-all duration-300 hover:scale-105"
        >
          À propos
        </Link>
        <Link
          href="/services"
          className="text-sm font-medium text-primary hover:text-accent transition-all duration-300 hover:scale-105"
        >
          Services
        </Link>
        <Link
          href="/realisations"
          className="text-sm font-medium text-primary hover:text-accent transition-all duration-300 hover:scale-105"
        >
          Réalisations
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium text-primary hover:text-accent transition-all duration-300 hover:scale-105"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-primary hover:text-accent transition-all duration-300 hover:scale-105"
        >
          Contact
        </Link>
      </nav>
      <AnimatedButton
      
        className="ml-8 hidden px-6 py-3 lg:inline-flex bg-gradient-to-r from-primary to-accent  text-white shadow-lg relative z-10"
      >
        <Link href="/contact">Demander un devis</Link>
      </AnimatedButton>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto lg:hidden bg-transparent border-black text-black hover:bg-gray-100 relative z-10"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-gradient-to-br bg-white text-[#006EAC] border-r border-transparent"
        >
          <SheetClose asChild>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-[#006EAC] mb-6">
              <Image
                className="w-7"
                src="/7_Plumeria_Export_Couleur_icon.png"
                alt="Plumeria icon"
                width={28}
                height={28}
              />
              <span>Plumeria</span>
            </Link>
          </SheetClose>
          <div className="grid gap-4 py-6">
            <SheetClose asChild>
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold text-[#006EAC] hover:text-[#55C3BA] transition-colors"
              >
                Accueil
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/about"
                className="flex w-full items-center py-2 text-lg font-semibold text-[#006EAC] hover:text-[#55C3BA] transition-colors"
              >
                À propos
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/services"
                className="flex w-full items-center py-2 text-lg font-semibold text-[#006EAC] hover:text-[#55C3BA] transition-colors"
              >
                Services
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/realisations"
                className="flex w-full items-center py-2 text-lg font-semibold text-[#006EAC] hover:text-[#55C3BA] transition-colors"
              >
                Réalisations
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/blog"
                className="flex w-full items-center py-2 text-lg font-semibold text-[#006EAC] hover:text-[#55C3BA] transition-colors"
              >
                Blog
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/contact"
                className="flex w-full items-center py-2 text-lg font-semibold text-[#006EAC] hover:text-[#55C3BA] transition-colors"
              >
                Contact
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Button
                asChild
                className="w-full mt-4 bg-white/20 hover:bg-white/30 text-[#006EAC] backdrop-blur-sm border border-white/30"
              >
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
