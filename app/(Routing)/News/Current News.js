import Link from "next/link"
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
  
  export default CurrentNews;