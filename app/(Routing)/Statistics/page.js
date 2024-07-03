import React from 'react'
import Link from "next/link"
const Statistics = () => {
    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col">
            <header className="bg-card p-6 border-b shadow-sm">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                            <img src="Flags/1x1/np.svg" alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Nepal</h1>
                            <div className="text-muted-foreground text-sm">
                                Rank: <span className="font-medium">1</span>
                                <span className="mx-2">|</span>
                                Matches: <span className="font-medium">50</span>
                                <span className="mx-2">|</span>
                                Wins: <span className="font-medium">40</span>
                                <span className="mx-2">|</span>
                                Losses: <span className="font-medium">10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-[100%] mx-auto py-12">
                <h2 className="text-2xl font-bold mb-6 px-2">Players</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">

                    {Players()}
                    {Players()}
                    {Players()}
                    {Players()}
                    {Players()}
                    {Players()}
                    {Players()}
                    {Players()}

                </div>
            </main>
        </div>
    )
}

export default Statistics;


const Players = () => {
    return <>
        <Link href="./Stats"><div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl relative">
            <div className="p-6">
                <img src="https://images8.alphacoders.com/413/413481.jpg" className='absolute top-6 right-4 rounded-lg' width={70}/>
                <h3 className="text-lg font-bold">Rishabh Pant</h3>
                <div className="text-muted-foreground text-sm">Wicket-Keeper Batsman</div>
                <div className="mt-4 text-sm">
                    Batting Average: <span className="font-medium">41.67</span>
                    <span className="mx-2">|</span>
                    Runs Scored: <span className="font-medium">5000</span>
                </div>
            </div>
        </div>
    </Link>
    </>
}
