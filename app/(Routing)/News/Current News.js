import Link from "next/link"
const CurrentNews = () => {
  return (
    <>
      <main className="container py-12">
        <h2 className="mb-8 text-2xl font-bold">Latest News</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {News()}
          {News()}
          {News()}
          {News()}
        </div>
      </main>
    </>
  )
}

export default CurrentNews;

const News = () => {
  return <>
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
  </>
}