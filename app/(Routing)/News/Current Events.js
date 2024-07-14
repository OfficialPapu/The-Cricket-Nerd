"use client"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";

const CurrentEvents = () => {
  const API_NEWS = process.env.NEXT_PUBLIC_API_NEWS;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [NewsData, setNewsData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let response = await axios.get(API_NEWS, { params: { CurrentEvents: true, } })
    setNewsData(response.data);
  };
  return (
    <div className="bg-muted py-6 md:py-12">
      <div className="pb-6 md:pb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground justify-start">Current Events</h2>
      </div>
      <div className="container px-0 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_500px]">
          <div>
            {NewsData.length > 0 && (
              <>
                <img
                  src={`${API_BASE_URL + NewsData[0].Thumbnail}`}
                  width={500}
                  alt="{NewsData[0].Title}"
                  className="aspect-[7/4] w-full rounded-lg object-cover"
                />
                <div className="mt-4 space-y-2">
                  <Link href={`Spotlight/${NewsData[0]['Slug Url']}`}> <h1 className="text-3xl font-bold md:text-4xl">{TruncateText(NewsData[0].Title, 100)}
                  </h1></Link>
                  <p className="text-muted-foreground">
                    {TruncateText(NewsData[0].Description, 200)}
                  </p>
                </div>
              </>

            )}
          </div>
          <div className="space-y-6">
            {/* <div className="rounded-lg border bg-card p-4">
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
            </div> */}
            <div>
              <h2 className="text-xl font-bold">Trending</h2>
              <div className="mt-4 space-y-4">

                {NewsData.slice(1).map((Item, Index) => (
                  <Link key={Index} href={`Spotlight/${Item['Slug Url']}`} className="grid grid-cols-[100px_1fr] items-center gap-4 rounded-lg border bg-card p-4">
                    <img
                      src={`${API_BASE_URL + Item.Thumbnail}`}
                      width={100}
                      height={100}
                      className="aspect-square rounded-lg object-cover"
                      alt="Trending News"
                    />
                    <div>
                      <h3 className="text-sm font-medium">{TruncateText(Item.Title, 30)}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {TruncateText(Item.Description, 100)}
                      </p>
                    </div>
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CurrentEvents;
const TruncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};