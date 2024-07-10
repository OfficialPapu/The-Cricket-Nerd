"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import axios from 'axios';
const Statistics = () => {
    const API_STATISTICS = process.env.NEXT_PUBLIC_API_STATISTICS;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [AllPlayers, setAllPlayers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(API_STATISTICS, { params: { Statistics: true } });
                response = response.data;
                console.log(response);
                if (response.length > 0) {
                    setAllPlayers(response);
                }
            } catch (error) {
                console.error("Error fetching related news:", error);
            }
        };

        fetchData();
    }, [])
    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col">
            <header className="bg-card p-6 border-b shadow-sm">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center">
                            <img src="Images/Flags/np.svg" />
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
                    {AllPlayers.map((Item) => (
                        <>
                            <Link href={`Statistics/${Item['ID']}`}><div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl relative">
                                <div className="p-6">
                                    <img src={`${API_BASE_URL + Item['Player Photo']}`} className='absolute top-4 right-4 rounded-lg object-contain h-[50px]' width={70} />
                                    <h3 className="text-lg font-bold">{Item['Player Name']}</h3>
                                    <div className="text-muted-foreground text-sm">{Item['Player Role']}</div>
                                    <div className="mt-4 text-sm">
                                        <div>
                                            <p className='font-bold'>ODI</p>
                                        </div>
                                        Batting Average: <span className="font-medium">{Item['ODIBattingAverage']}</span>
                                        <span className="mx-2">|</span>
                                        Runs Scored: <span className="font-medium">{Item['ODIRunScored']}</span>
                                    </div>
                                    <div className="mt-4 text-sm">
                                        <div>
                                            <p className='font-bold'>T20</p>
                                        </div>
                                        Batting Average: <span className="font-medium">{Item['T20BattingAverage']}</span>
                                        <span className="mx-2">|</span>
                                        Runs Scored: <span className="font-medium">{Item['T20RunScored']}</span>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </>
                    ))}


                </div>
            </main>
        </div>
    )
}

export default Statistics;
