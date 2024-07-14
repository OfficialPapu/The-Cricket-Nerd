"use client"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";
const CurrentNews = () => {
  const API_NEWS = process.env.NEXT_PUBLIC_API_NEWS;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [AllNews, setAllNews] = useState([]);
  useEffect(() => {
    ListAllNews();
  }, []);
  const ListAllNews = async () => {
    let response = await axios.get(API_NEWS, { params: { ListAllNews: true } })
    setAllNews(response.data);
  }
  return (
    <>
      <main className="container py-12">
        <h2 className="mb-8 text-2xl font-bold">Latest News</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {AllNews.map((Item, Index) => (
            <>
              <Link
                href={`Spotlight/${Item['Slug Url']}`}
                className="group grid gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted">
                <img
                   src={`${API_BASE_URL + Item.Thumbnail}`}
                  width={300}
                  height={200}
                  alt="News Article"
                  className="aspect-[3/2] w-full rounded-lg object-cover" />
                <div>
                  <h2 className="text-lg font-bold group-hover:underline">
                    {TruncateText(Item.Title, 50)}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {TruncateText(Item.Description, 100)}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </main>
    </>
  )
}

export default CurrentNews;


const TruncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};