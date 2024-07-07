"use client"
import axios from "axios";
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
        <div className="w-full max-w-[85rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Our YouTube Channel</h1>
                <p className="text-muted-foreground">
                    Check out all the latest videos from our YouTube channel, covering a wide range of topics from product
                    tutorials to industry insights.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden">
                {Videos.map((Item, index) => (
                    <div className="border p-4 rounded-lg flex flex-col justify-between" key={index}>
                        <div className="video-container" dangerouslySetInnerHTML={{ __html: Item.Iframe }} />
                        <h3 className="mt-4">{Item['Video Title']}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
