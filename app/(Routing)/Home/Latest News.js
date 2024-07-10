"use client"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";

const LatestNews = () => {
    const API_HOME = process.env.NEXT_PUBLIC_API_HOME;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [NewsData, setNewsData] = useState([]);
    useEffect(() => {
        GetData();
    }, []);

    const GetData = async () => {
        let response = await axios.get(API_HOME, { params: { LatestNews: true, } })
        setNewsData(response.data);
    };
    return <>
        <section className="w-full py-10 md:py-24 lg:py-20 bg-background flex justify-center">
            <div className="container px-4 md:px-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground justify-start">Latest News</h2>
                </div>
                <div className="mx-auto grid max-w-7xl items-start gap-10 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="group block overflow-hidden rounded-2xl shadow-lg">
                        {NewsData.slice(0, 1).map((Item) => (
                            <>
                                <img
                                    src={`${API_BASE_URL + Item.Thumbnail}`}
                                    width="550"
                                    height="310"
                                    alt="Latest News"
                                    className="mx-auto aspect-video w-full overflow-hidden rounded-t-2xl object-cover object-center transition-all duration-300 group-hover:scale-105"
                                />
                                <div className="bg-card p-4 rounded-b-2xl">
                                    <p className="text-sm text-card-foreground my-2">{Item['Post Date']}</p>
                                    <h3 className="text-2xl font-bold text-card-foreground">
                                        {TruncateText(Item['Title'], 90)}
                                    </h3>
                                    <p className="text-card-foreground">
                                        {TruncateText(Item['Description'], 231)}
                                    </p>
                                    <Link href={`/Spotlight/${Item['Slug Url']}`}><button variant="outline" className="mt-2 border p-2 rounded-lg font-500 hover:bg-gray-50 duration-300">
                                        Read More
                                    </button>
                                    </Link>
                                </div>
                            </>
                        ))}

                    </div >

                    <div className="grid gap-4">
                        {NewsData.slice(1).map((Item) => (
                            <>
                                <div className="group flex items-center gap-4 rounded-2xl shadow-lg bg-card py-8 px-6 transition-colors hover:bg-muted">
                                    <img
                                        src={`${API_BASE_URL + Item.Thumbnail}`}
                                        width="150"
                                        height="150" className="aspect-square w-36 overflow-hidden rounded-lg object-cover object-center transition-all duration-300 group-hover:scale-105" />
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-semibold text-card-foreground">{TruncateText(Item['Title'], 80)}</h4>
                                        <p className="text-card-foreground line-clamp-2">
                                            {TruncateText(Item['Description'], 100)}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-card-foreground">{Item['Post Date']}</p>
                                            <Link href={`/Spotlight/${Item['Slug Url']}`}>Read More..</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    </>
}

export default LatestNews;

const TruncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};