import {TruncateText} from "@/Components/Utility/TruncateText"   
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import axios from "axios";
const RelatedNews = () => {
    const [RelatedNews, setRelatedNews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get("http://localhost/The Cricket Nerd/API/GET/News.php", { params: { RelatedNews: true } });
                response = response.data;
                if (response.length > 0) {
                    setRelatedNews(response);
                }
            } catch (error) {
                console.error("Error fetching related news:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {RelatedNews.map((Item) => (
                    <>
                        <div className="w-full max-w-md border p-4 rounded-lg">
                            <Link href={Item['Slug Url']} className="group block overflow-hidden rounded-lg">
                                <img
                                    src={`http://localhost/The Cricket Nerd/API/POST/${Item.Thumbnail}`}
                                    alt="Related News"
                                    width={400}
                                    height={200}
                                    className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                            </Link>
                            <div className="p-4">
                                <div className="space-y-2">
                                    <Link href={Item['Slug Url']} className="block" prefetch={false}>
                                        <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                                            {Item.Title}
                                        </h3>
                                    </Link>
                                    <p className="text-muted-foreground">
                                        {TruncateText}
                                        {/* {TruncateText(TruncateText,1)} */}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Link
                                        href={Item['Slug Url']}
                                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-primary"
                                        prefetch={false}
                                    >
                                        Read more <MdOutlineArrowRightAlt />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div >
        </>
    )
}

export default RelatedNews;

