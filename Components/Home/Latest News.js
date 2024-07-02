import Link from "next/link"


const LatestNews = () => {
    return <>
        <section className="w-full py-10 md:py-24 lg:py-20 bg-background flex justify-center">
            <div className="container px-4 md:px-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground justify-start">Latest News</h2>
                </div>
                <div className="mx-auto grid max-w-7xl items-start gap-10 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="group block overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="https://picsum.photos/700/500"
                            width="550"
                            height="310"
                            alt="Latest News"
                            className="mx-auto aspect-video w-full overflow-hidden rounded-t-2xl object-cover object-center transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="bg-card p-4 rounded-b-2xl">
                            <p className="text-sm text-card-foreground my-2">June 30, 2024</p>
                            <h3 className="text-2xl font-bold text-card-foreground">
                                Groundbreaking Advancements in Renewable Energy
                            </h3>
                            <p className="text-card-foreground">
                                Discover the latest innovations that are revolutionizing the renewable energy industry and paving the
                                way for a sustainable future.
                            </p>
                            <Link href="#"><button variant="outline" className="mt-2 border p-2 rounded-lg font-500 hover:bg-gray-50 duration-300">
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="grid gap-4">


                        <div className="group flex items-center gap-4 rounded-2xl shadow-lg bg-card py-8 px-6 transition-colors hover:bg-muted">
                            <img
                                src="https://picsum.photos/700/600"
                                width="150"
                                height="150" className="aspect-square w-36 overflow-hidden rounded-lg object-cover object-center transition-all duration-300 group-hover:scale-105" />
                            <div className="space-y-1">
                                <h4 className="text-lg font-semibold text-card-foreground">Innovative Approaches to Urban Farming</h4>
                                <p className="text-card-foreground line-clamp-2">
                                    Explore the latest techniques and technologies that are transforming the way we grow food in urban
                                    environments.
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-card-foreground">12 hours ago</p>
                                    <button variant="outline" className="">
                                        Read More..
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 rounded-2xl shadow-lg bg-card py-8 px-6 transition-colors hover:bg-muted">
                            <img
                                src="https://picsum.photos/700/620"
                                width="150"
                                height="150" className="aspect-square w-36 overflow-hidden rounded-lg object-cover object-center transition-all duration-300 group-hover:scale-105" />
                            <div className="space-y-1">
                                <h4 className="text-lg font-semibold text-card-foreground">Innovative Approaches to Urban Farming</h4>
                                <p className="text-card-foreground line-clamp-2">
                                    Explore the latest techniques and technologies that are transforming the way we grow food in urban
                                    environments.
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-card-foreground">Jun 28, 2024</p>
                                    <button variant="outline" className="">
                                        Read More..
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 rounded-2xl shadow-lg bg-card py-8 px-6 transition-colors hover:bg-muted">
                            <img
                                src="https://picsum.photos/700/610"
                                width="150"
                                height="150" className="aspect-square w-36 overflow-hidden rounded-lg object-cover object-center transition-all duration-300 group-hover:scale-105" />
                            <div className="space-y-1">
                                <h4 className="text-lg font-semibold text-card-foreground">Innovative Approaches to Urban Farming</h4>
                                <p className="text-card-foreground line-clamp-2">
                                    Explore the latest techniques and technologies that are transforming the way we grow food in urban
                                    environments.
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-card-foreground">Jun 30, 2024</p>
                                    <button variant="outline" className="">
                                        Read More..
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    </>
}

export default LatestNews;