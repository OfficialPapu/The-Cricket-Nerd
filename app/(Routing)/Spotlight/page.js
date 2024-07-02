import Article from "./Article"
import NewsHeading from "./Hero Section"
import RelatedNews from "./Related News"
export default function Spotlight() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NewsHeading/>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 px-4 md:px-6 py-12 w-[100vw]">
       <Article/>
       <RelatedNews/>
      </div>
    </div>
  )
}