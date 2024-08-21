"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Stats = ({ params }) => {
    const [statsData, setStatsData] = useState(null);
    const SlugUrl = params.Stats;
    
        const API_STATISTICS = process.env.NEXT_PUBLIC_API_STATISTICS;
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(API_STATISTICS, {
                    params: {
                        FetchStats: true,
                        SlugUrl: SlugUrl,
                    }
                });
                if (response.data.length > 0) {
                    setStatsData(response.data[0]);
                } else {
                }
            } catch (error) {
                console.error('Error fetching player stats:', error);
            }
        };
        fetchStats();
    }, [SlugUrl]);

    if (!statsData) {
        return <p>Loading...</p>;
    }


    return (
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div>
                <div className="flex flex-col items-center justify-start">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden">
                        <img
                            src={`${API_BASE_URL + statsData['Player Photo']}`}
                            alt="Player Image"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-4xl my-4 font-bold text-[#2e3192]">{statsData['Player Name']}</h1>
            <div class="mb-10 shadow rounded-lg p-6 inline-block">
        <div className="text-gray-600">
        <strong>Role:</strong> {statsData['Player Role']}
        </div>

            <div className="text-gray-600 mt-2">
                <strong>Bowling Style:</strong> {statsData['Bowling Style']}
            </div>
            <div className="text-gray-600 mt-2">
                <strong>Batting Style:</strong> {statsData['Batting Style']}
            </div>
            </div>
                </div>
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <h2 className="text-3xl font-bold text-[#2e3192]">Batting Statistics</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">ODI</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                  <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{statsData.ODI_Matches}</span>
                                    </div>
                                      <div className="flex justify-between">
                                        <span>Batting Innings</span>
                                        <span>{statsData.ODI_Batting_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Runs</span>
                                        <span>{statsData.ODI_Run_Scored}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Average</span>
                                        <span>{statsData.ODI_Batting_Average}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Strike Rate</span>
                                        <span>{statsData.ODI_Strike_Rate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Half Centuries</span>
                                        <span>{statsData.ODI_Half_Centuries}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Centuries</span>
                                        <span>{statsData.ODI_Centuries}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Highest Score</span>
                                        <span>{statsData.ODI_Highest_Score}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">T20I</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                     <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{statsData.T20_Matches}</span>
                                    </div>
                                     <div className="flex justify-between">
                                        <span>Batting Innings</span>
                                        <span>{statsData.T20_Batting_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Runs</span>
                                        <span>{statsData.T20_Run_Scored}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Average</span>
                                        <span>{statsData.T20_Batting_Average}</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span>Strike Rate</span>
                                        <span>{statsData.T20_Strike_Rate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Half Centuries</span>
                                        <span>{statsData.T20_Half_Centuries}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Centuries</span>
                                        <span>{statsData.T20_Centuries}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Highest Score</span>
                                        <span>{statsData.T20_Highest_Score}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <h2 className="text-3xl font-bold text-[#2e3192]">Bowling Statistics</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">ODI</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                 
                                    <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{statsData.ODI_Matches}</span>
                                    </div>
                                   <div className="flex justify-between">
                                        <span>Bowlings Innings</span>
                                        <span>{statsData.ODI_Bowlings_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Wickets</span>
                                        <span>{statsData.ODI_Wickets_Taken}</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span>Economy</span>
                                        <span>{statsData.ODI_Bowling_Economy}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Best Bowling</span>
                                        <span>{statsData.ODI_Best_Bowling}</span>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">T20I</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                    <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{statsData.T20_Matches}</span>
                                    </div>
                                     <div className="flex justify-between">
                                        <span>Bowlings Innings</span>
                                        <span>{statsData.T20_Bowlings_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Wickets</span>
                                        <span>{statsData.T20_Wickets_Taken}</span>
                                    </div>
                    
                                    <div className="flex justify-between">
                                        <span>Economy</span>
                                        <span>{statsData.T20_Bowling_Economy}</span>
                                    </div>
                                        <div className="flex justify-between">
                                        <span>Best Bowling</span>
                                        <span>{statsData.T20_Best_Bowling}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
