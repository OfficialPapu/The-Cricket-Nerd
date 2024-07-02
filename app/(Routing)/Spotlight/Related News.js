import Link from "next/link"
import React from 'react'

const RelatedNews = () => {
    return (
        <>
            <div className="space-y-8">
                <div>
                    <h2>Related News</h2>
                    <div>
                        <ul className="space-y-4 border p-4 rounded-lg">
                            {News()}
                            {News()}
                            {News()}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedNews;

const News = () => {
    return <>

        <li>
            <Link href="#" className="flex items-center gap-4">
                <img src="https://picsum.photos/800/300" alt="Related News" className="max-w-none h-[70px] w-[70px] object-cover rounded-lg" />
                <div>
                    <h3 className="text-lg font-medium">India Clinch ODI Series Against Australia</h3>
                    <p className="text-muted-foreground">By Jane Doe</p>
                </div>
            </Link>
        </li>



    </>
}