import React from 'react'
import Link from "next/link"
export default function News() {
  return (
    <>
    <div className="bg-background text-foreground px-6 md:flex md:flex-col md:items-center">
    <CurrentEvents/>
    <CurrentNews />
    </div>
    </>
  )
}




const CurrentEvents = () => {
  return (
    <div className="bg-muted py-6 md:py-12">
    <div className="pb-6 md:pb-10">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground justify-start">Current Events</h2>
       </div>
      <div className="container px-0 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_500px]">
          <div>
            <img
              src="https://images8.alphacoders.com/413/413481.jpg"
              width={500}
              alt="Featured News"
              className="aspect-[7/4] w-full rounded-lg object-cover"
            />
            <div className="mt-4 space-y-2">
              <h1 className="text-3xl font-bold md:text-4xl">India Clinches Series Victory Against Australia</h1>
              <p className="text-muted-foreground">
                The Indian cricket team secured a hard-fought series win against the mighty Australians, showcasing
                their resilience and skill on the field.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-4">
              <h2 className="text-xl font-bold">Categories</h2>
              <nav className="mt-4 space-y-2">
                <Link href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>Cricket</span>
                  <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    23
                  </span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>IPL</span>
                  <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    17
                  </span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>International</span>
                  <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    11
                  </span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  <span>Domestic</span>
                  <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">8</span>
                </Link>
              </nav>
            </div>
            <div>
              <h2 className="text-xl font-bold">Trending</h2>
              <div className="mt-4 space-y-4">
                <Link href="#" className="grid grid-cols-[100px_1fr] items-center gap-4 rounded-lg border bg-card p-4" prefetch={false}>
                  <img
                    src="https://picsum.photos/1000/310"
                    width={100}
                    height={100}
                    alt="Trending News"
                    className="aspect-square rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium">Kohli Scores Stunning Century in ODI Series</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      The Indian batting maestro continues to impress with his consistent performances.
                    </p>
                  </div>
                </Link>
                <Link href="NewsSpotlight" className="grid grid-cols-[100px_1fr] items-center gap-4 rounded-lg border bg-card p-4" prefetch={false}>
                  <img
                    src="https://picsum.photos/1000/360"
                    width={100}
                    height={100}
                    alt="Trending News"
                    className="aspect-square rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium">Kohli Scores Stunning Century in ODI Series</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      The Indian batting maestro continues to impress with his consistent performances.
                    </p>
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const CurrentNews = () => {
  return (
    <>
    <main className="container py-12">
    <h2 className="mb-8 text-2xl font-bold">Latest News</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Link
        href="#"
        className="group grid gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted"
        prefetch={false}
      >
        <img
          src="https://picsum.photos/1000/900"
          width={300}
          height={200}
          alt="News Article"
          className="aspect-[3/2] w-full rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg font-medium group-hover:underline">
            India Clinches Series Victory Against Australia
          </h3>
          <p className="mt-2 text-muted-foreground">
            The Indian cricket team secured a hard-fought series win against the mighty Australians, showcasing
            their resilience and skill on the field.
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="group grid gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted"
        prefetch={false}
      >
        <img
          src="https://picsum.photos/1000/50"
          width={300}
          height={200}
          alt="News Article"
          className="aspect-[3/2] w-full rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg font-medium group-hover:underline">
            Ravindra Jadeja Shines with All-Round Performance in Test Series
          </h3>
          <p className="mt-2 text-muted-foreground">
            The Indian all-rounder's impressive displays with both bat and ball have been crucial to the team's
            success.
          </p>
        </div>
      </Link>
      <Link
        href="#"
        className="group grid gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted"
        prefetch={false}
      >
        <img
          src="https://picsum.photos/1000/700"
          width={300}
          height={200}
          alt="News Article"
          className="aspect-[3/2] w-full rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg font-medium group-hover:underline">
            Jasprit Bumrah's Comeback Boosts India's Bowling Attack
          </h3>
          <p className="mt-2 text-muted-foreground">
            The return of the star pacer has added much-needed firepower to the Indian bowling lineup.
          </p>
        </div>
      </Link>
    </div>
  </main>
  </>
  )
}
