"use client" // This component needs to be a client component to use hooks
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer" // Import the new hook
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = Array.from({ length: 3 }).map((_, i) => ({
    title: `Titre de l'Article ${i + 1}`,
    description: "Une brève description de l'article pour inciter à la lecture.",
    date: "15 Juillet 2025",
    image: `s${i + 1}.jpg`, // Using placeholder for images
  }))

  // Refs for intersection observation with explicit types
  const [titleRef, titleHasAnimated] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 })
  const [descriptionRef, descriptionHasAnimated] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 })
  const [desktopGridRef, desktopGridHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [mobileCarouselRef, mobileCarouselHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [footerTextRef, footerTextHasAnimated] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 })

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background2 text-foreground">
      <h1
        ref={titleRef}
        className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-8 text-center opacity-0 ${titleHasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""}`}
      >
        Notre Blog
      </h1>
      <p
        ref={descriptionRef}
        className={`mx-auto max-w-[800px] text-lg text-gray-300 mb-12 text-center opacity-0 ${descriptionHasAnimated ? "animate-fade-in [animation-delay:0.4s]" : ""}`}
      >
        Découvrez nos articles sur le design, la publicité, le marketing digital et les tendances du secteur.
      </p>
      {/* Desktop Grid Layout */}
      <div
        ref={desktopGridRef}
        className={`hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 ${desktopGridHasAnimated ? "animate-fade-in [animation-delay:0.6s]" : ""}`}
      >
        {blogPosts.map((post, i) => (
          <Card
            key={i}
            className="flex flex-col bg-gray-900 text-white transition-transform duration-300 hover:scale-105"
          >
            <CardHeader>
              <Image
                src={post.image || "/placeholder.svg"}
                width={300}
                height={200}
                alt={`Blog Post ${i + 1}`}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <CardTitle className="text-primary">{post.title}</CardTitle>
              <CardDescription className="text-gray-400">{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-400 mb-4">Date de publication: {post.date}</p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary md:hover:bg-primary md:hover:text-white bg-transparent"
              >
                <Link href="#">Lire l&apos;article</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Mobile Carousel Layout */}
      <div
        ref={mobileCarouselRef}
        className={`md:hidden relative opacity-0 ${mobileCarouselHasAnimated ? "animate-fade-in [animation-delay:0.6s]" : ""}`}
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 items-stretch">
            {blogPosts.map((post, i) => (
              <CarouselItem key={i} className="pl-4 basis-full">
                <div className="p-1 h-full">
                  <Card className="flex flex-col bg-gray-900 text-white h-full transition-transform duration-300">
                    <CardHeader>
                      <Image
                        src={post.image || "/placeholder.svg"}
                        width={300}
                        height={200}
                        alt={`Blog Post ${i + 1}`}
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                      />
                      <CardTitle className="text-primary">{post.title}</CardTitle>
                      <CardDescription className="text-gray-400">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-gray-400 mb-4">Date de publication: {post.date}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary text-primary bg-transparent" // No hover for mobile
                      >
                        <Link href="#">Lire l&apos;article</Link>
                      </Button>
                    </CardContent>
                  </Card>
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
      <p
        ref={footerTextRef}
        className={`text-gray-300 mt-12 text-lg text-center opacity-0 ${footerTextHasAnimated ? "animate-fade-in [animation-delay:0.8s]" : ""}`}
      >
        Plus d&apos;articles à venir ! Revenez régulièrement pour de nouvelles inspirations.
      </p>
    </div>
  )
}
