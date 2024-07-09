"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Videos() {
    const [Videos, setVideos] = useState([]);
    useEffect(() => {
        let GetVideos = async () => {
            let response = await axios.get("http://localhost/The Cricket Nerd/API/GET/Videos.php", { params: { GetAllVideo: true } });
            response = response.data;
            if (response.length > 0) {
                setVideos(response);
            } else {

            }
        }
        GetVideos();
    }, []);

    return (
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Our YouTube Channel</h1>
                <p className="text-muted-foreground">
                    Check out all the latest videos from our YouTube channel, covering a wide range of topics from product
                    tutorials to industry insights.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden place-items-center">
                {Videos.map((Item, index) => (
                    <Link href={Item['Link']} target="_blank">
                    <div className="w-full max-w-72 rounded-lg overflow-hidden shadow-lg mx-4 p-4 mb-10">
                        <img
                           src={`http://localhost/The Cricket Nerd/API/POST/${Item.Thumbnail}`}
                            alt="Card Image"
                            width={500}
                            height={300}
                            className="w-full aspect-[5/3] object-cover rounded-lg"
                        />
                        <div className="p-4 bg-background">
                            <h3 className="text-xl font-bold mb-2">{Item['Title']}</h3>
                            <p className="text-muted-foreground">
                            {Item.Description}
                            </p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
