"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Stats = ({ params }) => {
    const [statsData, setStatsData] = useState(null);
    const playerID = params.Stats;

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get("http://localhost/The Cricket Nerd/API/GET/Statistics.php", {
                    params: {
                        FetchStats: true,
                        PlayerID: playerID,
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
    }, [playerID]);

    if (!statsData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div>
                <div className="flex flex-col items-center justify-start">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden">
                        <img
                            src={`http://localhost/The Cricket Nerd/API/POST/${statsData['Player Photo']}`}
                            alt="Player Image"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        </div>
                    </div>
                    <h1 className="text-4xl my-4 font-bold">{statsData['Player Name']}</h1>
                </div>
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <h2 className="text-3xl font-bold">Batting Statistics</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">ODI</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                    <div className="flex justify-between">
                                        <span>Innings</span>
                                        <span>{statsData.ODI_Innings}</span>
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
                                <h3 className="text-xl font-semibold">T20</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                    <div className="flex justify-between">
                                        <span>Innings</span>
                                        <span>{statsData.T20_Innings}</span>
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
                        <h2 className="text-3xl font-bold">Bowling Statistics</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">ODI</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                    <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{statsData.ODI_Matches}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Innings</span>
                                        <span>{statsData.ODI_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Wickets</span>
                                        <span>{statsData.ODI_Wickets_Taken}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Average</span>
                                        <span>{statsData.ODI_Batting_Average}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Economy</span>
                                        <span>{statsData.ODI_Bowling_Economy}</span>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">T20</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                    <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{statsData.T20_Matches}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Innings</span>
                                        <span>{statsData.T20_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Wickets</span>
                                        <span>{statsData.T20_Wickets_Taken}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Average</span>
                                        <span>{statsData.T20_Batting_Average}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Economy</span>
                                        <span>{statsData.T20_Bowling_Economy}</span>
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
