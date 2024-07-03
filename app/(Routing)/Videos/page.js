export default function Videos() {
    return (
        <div className="w-full max-w-[85rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Our YouTube Channel</h1>
                <p className="text-muted-foreground">
                    Check out all the latest videos from our YouTube channel, covering a wide range of topics from product
                    tutorials to industry insights.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {VideosList()}
                {VideosList()}
                {VideosList()}
                {VideosList()}  
                {VideosList()}
                {VideosList()}
                {VideosList()}
                {VideosList()}  
                {VideosList()}
                {VideosList()}
                {VideosList()}
                {VideosList()}  

            </div>
        </div>
    )
}

const VideosList = () => {
    return <>
        <div className="sm:max-w-[800px]">
            <div className="relative w-full aspect-video border p-4 rounded-lg flex flex-col justify-between">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/By9wCB9IZp0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <h3 className="mt-4">Lorem ipsum dolor sit.</h3>
            </div>
        </div>

    </>
}