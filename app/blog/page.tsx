import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function BlogPage() {
  const blogPosts = Array.from({ length: 3 }).map((_, i) => ({
    title: `Titre de l'Article ${i + 1}`,
    description: "Une brève description de l'article pour inciter à la lecture.",
    date: "15 Juillet 2025",
    image: `s${i + 1}.jpg`,
  }))

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-8 text-center">
        Notre Blog
      </h1>
      <p className="mx-auto max-w-[800px] text-lg text-gray-300 mb-12 text-center">
        Découvrez nos articles sur le design, la publicité, le marketing digital et les tendances du secteur.
      </p>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <Card key={i} className="flex flex-col bg-gray-900 text-white">
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
      <div className="md:hidden relative">
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
                  <Card className="flex flex-col bg-gray-900 text-white h-full">
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
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>

      <p className="text-gray-300 mt-12 text-lg text-center">
        Plus d&apos;articles à venir ! Revenez régulièrement pour de nouvelles inspirations.
      </p>
    </div>
  )
}
