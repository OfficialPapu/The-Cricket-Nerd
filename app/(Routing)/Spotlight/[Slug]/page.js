"use client"
import axios from "axios";
import RelatedNews from "../Related News";
import { useEffect, useState } from "react";
const Spotlight = ({ params }) => {
  const API_NEWS = process.env.NEXT_PUBLIC_API_NEWS;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  let Slug = params.Slug;
  useEffect(() => {
    FetchSpotLightData();
  }, [])
  const [SpotlightData, setSpotlightData] = useState([]);
  const FetchSpotLightData = async () => {
    let response = await axios.get(API_NEWS, {
      params: {
        FetchNewsDetails: true,
        Slug: Slug,
      }
    })
    if (response.data.length > 0) {
      setSpotlightData(response.data);
    } else {

    }

  }
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full bg-muted pb-12 md:pb-24 lg:pb-20 pt-10">
        <div className="px-4 space-y-10 xl:space-y-16">
          <div className="flex justify-center">
            {SpotlightData.map((Item) => (
              <>
                <img src={`${API_BASE_URL + Item.Thumbnail}`}
                  width={800}
                  alt="Featured Image"
                  className="w-full h-[200px] md:h-[400px] rounded-lg object-cover"
                />
              </>
            ))}
          </div>
          <div className="flex flex-col items-start space-y-4">
            {SpotlightData.map((Item) => (
              <>
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Cricket
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {Item.Title}
                </h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div>{Item.Author}</div>
                  <div orientation="vertical" />
                  <div>{Item['Post Date']}</div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <main className="flex-1">
        <section className="w-full px-4 md:px-10">
          {SpotlightData.map((Item) => (
            <>
              {Item.Description}
            </>
          ))}
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32 px-4">
          <h2 className="text-2xl font-bold pb-4">Related News</h2>
          <div className="px-4 flex justify-center flex-col items-center">
            <RelatedNews />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Spotlight;