"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Match = () => {
    const API_MATCHES = process.env.NEXT_PUBLIC_API_MATCHES;
    const [MatcheData, setMatcheData] = useState([]);

    useEffect(() => {
        let GetMatches = async () => {
            let response = await axios.get(API_MATCHES, { params: { GetAllMatches: true } });
            response = response.data;
            if (response.length > 0) {
                setMatcheData(response);
            } else {
            }
        }
        GetMatches();
    }, []);
    return (
        <div>
            <section className="bg-background pt-12 md:pt-16 lg:pt-20 mb-10 flex justify-center">
                <div className="container px-4 md:px-6">
                    <div className="mb-8 md:mb-10 lg:mb-12">
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Recent Matches</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {MatcheData.map((match) => (
                            <>
                                <div className="bg-card rounded-lg border border-muted p-4 flex flex-col gap-6">
                                    <h2>{match['Tournament Name']}</h2>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <img src={`/Images/Flags/${match['FlagA']}`} className="w-[40px] object-contain" />
                                            <span className="font-medium">{match['Country A']}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">{match['Country B']}</span>
                                            <img src={`/Images/Flags/${match['FlagB']}`} className="object-contain w-[40px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-between gap-2">
                                        <div className="text-sm text-muted-foreground">
                                            {match['Time']} - {match['Schedule']}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Match;   