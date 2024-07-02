import React from 'react'

const NewsHeading = () => {
    return (
        <section className="w-full pt-12 md:pt-24 lg:pt-32 pb-4 bg-muted flex md:justify-start justify-center relative">
            <div className="container px-4 md:px-6  relative z-10">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2  hero-section ">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Virat Kohli Scores Stunning Century in ODI Series
                            </h1>
                            <p className="text-muted-foreground md:text-xl">By John Doe</p>
                        </div>
                </div>
            </div>
            <div className="hero-section-blur absolute h-[100%] w-[100%] top-0 left-0 z-1"></div>
        </section>
    )
}

export default NewsHeading;
