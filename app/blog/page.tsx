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
    image: `s${i + 1}.jpg`, // Keeping original image source as requested
  }))
  // Refs for intersection observation with explicit types
  const [titleRef, titleHasAnimated] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 })
  const [descriptionRef, descriptionHasAnimated] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 })
  const [desktopGridRef, desktopGridHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [mobileCarouselRef, mobileCarouselHasAnimated] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [footerTextRef, footerTextHasAnimated] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.1 })

  return (
    <div className="relative overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#55C3BA] to-[#006EAC] text-white">
      {/* Animated background elements (fluid shapes only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce [animation-delay:0s] [animation-duration:3s]"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse [animation-delay:1s] [animation-duration:4s]"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-spin [animation-delay:2s] [animation-duration:5s]"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float [animation-delay:0.5s] [animation-duration:3.5s]"></div>
        <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white/10 rounded-full blur-xl animate-pulse [animation-duration:6s] [animation-delay:1.5s]"></div>
      </div>

      <h1
        ref={titleRef}
        className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg mb-8 text-center opacity-0 ${titleHasAnimated ? "animate-fade-in [animation-delay:0.2s]" : ""} relative z-10`}
      >
        Notre Blog
      </h1>
      <p
        ref={descriptionRef}
        className={`mx-auto max-w-[800px] text-lg text-white/90 mb-12 text-center opacity-0 ${descriptionHasAnimated ? "animate-fade-in [animation-delay:0.4s]" : ""} relative z-10`}
      >
        Découvrez nos articles sur le design, la publicité, le marketing digital et les tendances du secteur.
      </p>

      {/* Desktop Grid Layout */}
      <div
        ref={desktopGridRef}
        className={`hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-16 max-w-6xl opacity-0 ${desktopGridHasAnimated ? "animate-fade-in [animation-delay:0.6s]" : ""}`}
      >
        {blogPosts.map((post, i) => (
          <Card
            key={i}
            className="flex flex-col bg-white/10 backdrop-blur-sm text-white rounded-xl shadow-xl overflow-hidden group transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl border border-white/20 z-10"
          >
            <CardHeader className="p-0">
              <Image
                src={post.image || "/placeholder.svg"} // Keeping original image source
                width={300}
                height={200}
                alt={`Blog Post ${i + 1}`}
                className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-white text-2xl mb-2">{post.title}</CardTitle>
              <CardDescription className="text-white/80 text-base mb-4">{post.description}</CardDescription>
              <p className="text-sm text-white/60 mb-4">Date de publication: {post.date}</p>
              <Button
                asChild
                variant="outline"
                className="border-white/50 text-white hover:bg-white/20 hover:text-white bg-transparent transition-all duration-300"
              >
                <Link href={`/blog/${i + 1}`}>Lire l'article</Link>
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
                  <Card className="flex flex-col bg-white/10 backdrop-blur-sm text-white h-full rounded-xl shadow-xl overflow-hidden border border-white/20 z-10">
                    <CardHeader className="p-0">
                      <Image
                        src={post.image || "/placeholder.svg"} // Keeping original image source
                        width={300}
                        height={200}
                        alt={`Blog Post ${i + 1}`}
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                      <CardTitle className="text-white text-2xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-white/80 text-base mb-4">{post.description}</CardDescription>
                      <p className="text-sm text-white/60 mb-4">Date de publication: {post.date}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/50 text-white bg-transparent hover:bg-white/20"
                      >
                        <Link href={`/blog/${i + 1}`}>Lire l'article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        
        </Carousel>
      </div>

      <p
        ref={footerTextRef}
        className={`text-white/90 mt-12 text-lg text-center opacity-0 ${footerTextHasAnimated ? "animate-fade-in [animation-delay:0.8s]" : ""}`}
      >
        Plus d&apos;articles à venir ! Revenez régulièrement pour de nouvelles inspirations.
      </p>
    </div>
  )
}
