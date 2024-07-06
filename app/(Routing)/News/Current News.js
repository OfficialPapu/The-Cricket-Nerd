"use client"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";
const CurrentNews = () => {
  const [AllNews, setAllNews] = useState([]);
  useEffect(() => {
    ListAllNews();
  }, []);
  const ListAllNews = () => {
    axios.get("http://localhost/The Cricket Nerd/API/GET/News.php", { params: { ListAllNews: true } }).then((response) => {
      response = response.data;
      setAllNews(response);
    }).catch((error) => {

    })
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
                   src={`http://localhost/The Cricket Nerd/API/POST/${Item.Thumbnail}`}
                  width={300}
                  height={200}
                  alt="News Article"
                  className="aspect-[3/2] w-full rounded-lg object-cover"/>
                <div>
                  <h3 className="text-lg font-medium group-hover:underline">
                    {Item.Title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {Item.Description}
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

