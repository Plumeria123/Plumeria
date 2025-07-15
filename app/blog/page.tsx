import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-8 text-center">
        Notre Blog
      </h1>
      <p className="mx-auto max-w-[800px] text-lg text-gray-300 mb-12 text-center">
        Découvrez nos articles sur le design, la publicité, le marketing digital et les tendances du secteur.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="flex flex-col bg-gray-900 text-white">
            <CardHeader>
              <Image
                src={`/placeholder.svg?height=200&width=300&text=Article%20${i + 1}`}
                width={300}
                height={200}
                alt={`Blog Post ${i + 1}`}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <CardTitle className="text-primary">Titre de l&apos;Article {i + 1}</CardTitle>
              <CardDescription className="text-gray-400">
                Une brève description de l&apos;article pour inciter à la lecture.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-400 mb-4">Date de publication: 15 Juillet 2025</p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <Link href="#">Lire l&apos;article</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-gray-300 mt-12 text-lg text-center">
        Plus d&apos;articles à venir ! Revenez régulièrement pour de nouvelles inspirations.
      </p>
    </div>
  )
}
