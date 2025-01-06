"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Users, Activity } from "lucide-react";
import { useParams } from "next/navigation";
import Loader from "@/Components/Loader";
import axios from "axios";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MetaInfo from "@/Components/MetaInfo/ScoreboardMetaInfo";

const SCOREBOARD = process.env.NEXT_PUBLIC_SCOREBOARD;

// API Fetch Functions
async function fetchDataFromAPI(endpoint, params) {
  try {
    const response = await axios.get(SCOREBOARD, { params });
    return response.data || [];
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
}

export default function CricketScoreboard() {
  const [selectedTab, setSelectedTab] = useState("scorecard");
  const [squads, setsquads] = useState([]);
  const [matchInfo, setmatchInfo] = useState({});
  const [Batting, setBatting] = useState([]);
  const [Bowling, setBowling] = useState([]);
  const [Extras, setExtras] = useState([]);
  const [isTeamAMinimized, setIsTeamAMinimized] = useState(false);
  const [isTeamBMinimized, setIsTeamBMinimized] = useState(false);
  const params = useParams();

  // Fetch data on component mount or when ID changes
  useEffect(() => {
    if (params?.ID) {
      async function fetchData() {
        try {
          const [
            scoreboardData,
            matchData,
            Batting,
            Bowling,
            extrasData
          ] = await Promise.all([
            fetchDataFromAPI("Scoreboard", { Scoreboard: true, ID: params.ID }),
            fetchDataFromAPI("MatchInfo", { MatchInfo: true, ID: params.ID }),
            fetchDataFromAPI("Batting", { Batting: true, ID: params.ID }),
            fetchDataFromAPI("Bowling", { Bowling: true, ID: params.ID }),
            fetchDataFromAPI("Extras", { Extras: true, ID: params.ID })
          ]);

          setsquads(scoreboardData);
          setmatchInfo(matchData);
          setBatting(Batting);
          setBowling(Bowling);
          setExtras(extrasData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [params?.ID]);

  if (squads.length === 0) {
    return <Loader />;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }

  const toggleTeamAMinimize = () => {
    setIsTeamAMinimized(!isTeamAMinimized);
  };


  const toggleTeamBMinimize = () => {
    setIsTeamBMinimized(!isTeamBMinimized);
  };

  const teamAPlayers = Batting.filter((player) => player.Team === matchInfo['Country A']);
  const teamBPlayers = Batting.filter((player) => player.Team === matchInfo['Country B']);
  const teamABowlers = Bowling.filter((player) => player.Team === matchInfo['Country A']);
  const teamBBowlers = Bowling.filter((player) => player.Team === matchInfo['Country B']);

  const formatExtras = (extras) => {
    if (!extras || Object.keys(extras).length === 0) {
      return undefined;
    }
    return `${extras['Total Extras']} (i ${extras['Inning']}, b ${extras['Byes']}, lb ${extras['Leg Byes']}, w ${extras['Wides']}, nb ${extras['No Balls']}, p ${extras['Penalty Runs']})`;
  };

  const teamAExtras = Extras.find(extra => extra.Country === matchInfo['Country A']);
  const teamBExtras = Extras.find(extra => extra.Country === matchInfo['Country B']);



  return (
    <>
      <MetaInfo Name={`${matchInfo['Country A'] || "N/A"} VS ${matchInfo['Country B'] || "N/A"}`} />
      <div className="min-h-screen bg-gray-50 md:p-4 p-2">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="bg-white p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{matchInfo['Country A'] || "N/A"} VS {matchInfo['Country B'] || "N/A"}</h1>
                  <p className="text-sm text-gray-500">{matchInfo['Match'] || "N/A"}, {matchInfo['Toss'] || "N/A"}</p>
                </div>
                <Badge variant="outline" className="w-fit border-[#2e3192] px-3 py-1 text-[#2e3192]">
                  LIVE
                </Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{matchInfo['Venue'] || "N/A"}</span>
                </div>
              </div>
            </div>

            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b bg-gray-100 p-0">
                {["scorecard", "squads", "match-info"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="flex-1 rounded-none border-b-2 border-transparent px-6 py-3 text-sm font-medium capitalize transition-colors hover:bg-white data-[state=active]:border-[#2e3192] data-[state=active]:bg-white"
                  >
                    {tab.replace("-", " ")}
                  </TabsTrigger>
                ))}
              </TabsList>


              <TabsContent value="scorecard" className="p-6">
                <div className="space-y-8">
                  {[
                    {
                      team: matchInfo['Country A'],
                      players: teamAPlayers,
                      bowlers: teamABowlers,
                      extras: teamAExtras
                    },
                    {
                      team: matchInfo['Country B'],
                      players: teamBPlayers,
                      bowlers: teamBBowlers,
                      extras: teamBExtras
                    },
                  ].map((teamData, index) => {
                    const totalRuns = teamData.players.reduce((sum, player) => sum + parseInt(player['Runs'], 10), 0);  
                    const totalOut = teamData.players.filter(player => player['Status'] === 'Out').length;  

                    return (
                      <div key={index}>
                        <div className="mb-4 flex items-baseline justify-between">
                          <h2 className="text-xl font-semibold text-gray-900">{teamData.team} - Innings</h2>
                          <div className="rounded-full bg-[#2e3192] h-10 w-10 grid place-items-center text-white text-xs">
                            {totalRuns} / {totalOut}
                          </div>
                          <button
                            className="p-2 rounded-full hover:bg-gray-100"
                            onClick={teamData.team === matchInfo['Country A'] ? toggleTeamAMinimize : toggleTeamBMinimize}
                          >
                            {teamData.team === matchInfo['Country A'] && isTeamAMinimized ||
                              teamData.team === matchInfo['Country B'] && isTeamBMinimized ? (
                              <FaChevronDown size={20} />
                            ) : (
                              <FaChevronUp size={20} />
                            )}
                          </button>
                        </div>

                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden ${teamData.team === matchInfo['Country A']
                            ? isTeamAMinimized
                              ? 'max-h-0 opacity-0'
                              : 'max-h-[1000px] opacity-100'
                            : isTeamBMinimized
                              ? 'max-h-0 opacity-0'
                              : 'max-h-[1000px] opacity-100'
                            }`}
                        >
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b text-left text-sm text-gray-500">
                                  <th className="pb-2 font-medium">Batter</th>
                                  <th className="pb-2 font-medium">R</th>
                                  <th className="pb-2 font-medium">B</th>
                                  <th className="pb-2 font-medium">4s</th>
                                  <th className="pb-2 font-medium">6s</th>
                                  <th className="pb-2 font-medium">SR</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y">
                                {teamData.players.map((player, idx) => (
                                  <tr key={idx}>
                                    <td className="py-2 font-medium">
                                      {player['Player Name']}
                                      {player['Status'] === "Out" ? (
                                        <span className="text-xs text-red-600 ml-2">(Out)</span>
                                      ) : player['Status'] === "Not Out" ? (
                                        <span className="text-xs text-green-600 ml-2">(Batting)</span>
                                      ) : null}
                                    </td>

                                    <td className="py-2">{player['Runs']}</td>
                                    <td className="py-2">{player['Balls']}</td>
                                    <td className="py-2">{player['Fours']}</td>
                                    <td className="py-2">{player['Sixes']}</td>
                                    <td className="py-2">{(+player['Strike Rate']).toFixed(2)}</td>

                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <Separator />

                          <div>
                            <h2 className="mt-4 text-xl font-semibold text-gray-900">Extras</h2>
                            <div>
                              <p className="text-sm text-gray-700 text-center">
                                {teamData.team === matchInfo['Country A']
                                  ? formatExtras(teamAExtras)
                                  : formatExtras(teamBExtras)}
                              </p>
                            </div>
                          </div>

                          <Separator />

                          {/* Bowling Section */}
                          <div>
                            <h2 className="mb-4 text-xl font-semibold text-gray-900 mt-8">Bowling</h2>
                            <div className="overflow-x-auto">
                              <table className="w-full">
                                <thead>
                                  <tr className="border-b text-left text-sm text-gray-500">
                                    <th className="pb-2 font-medium">Bowler</th>
                                    <th className="pb-2 font-medium">O</th>
                                    <th className="pb-2 font-medium">M</th>
                                    <th className="pb-2 font-medium">R</th>
                                    <th className="pb-2 font-medium">W</th>
                                    <th className="pb-2 font-medium">Econ</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y">
                                  {teamData.bowlers.map((bowler, idx) => (
                                    <tr key={idx}>
                                      <td className="py-2 font-medium">{bowler['Player Name']}</td>
                                      <td className="py-2">{bowler['Overs']}</td>
                                      <td className="py-2">{bowler['Maidens']}</td>
                                      <td className="py-2">{bowler['Runs']}</td>
                                      <td className="py-2">{bowler['Wickets']}</td>
                                      <td className="py-2">{(+bowler['Economy']).toFixed(2)}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>



              <TabsContent value="squads" className="p-6">
                <div className="grid gap-8 sm:grid-cols-2">
                  {squads.map((team) => (
                    <div key={team.team}>
                      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
                        <Users className="h-5 w-5 text-[#2e3192]" />
                        {team.team}
                      </h2>

                      {/* Playing XI */}
                      <h3 className="text-lg font-bold text-gray-800">Playing XI</h3>
                      <ul className="space-y-2">
                        {team.playing.map((player, idx) => {
                          const initials = player.player_name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2);
                          return (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2e3192] text-white text-xs font-bold">
                                {initials}
                              </div>
                              <span className="text-gray-700">{player.player_name}</span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Bench */}
                      <h3 className="mt-4 text-lg font-bold text-gray-800">Bench</h3>
                      <ul className="space-y-2">
                        {team.bench.map((player, idx) => {
                          const initials = player.player_name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2);
                          return (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white text-xs font-bold">
                                {initials}
                              </div>
                              <span className="text-gray-700">{player.player_name}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="match-info" className="p-6">
                <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-900">
                  <Activity className="h-5 w-5 text-[#2e3192]" />
                  Match Details
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Series", value: matchInfo['Tournament Name'] || "N/A" },
                    { label: "Match", value: matchInfo['Match'] || "N/A" },
                    { label: "Date", value: formatDate(matchInfo['Schedule'] || "N/A") },
                    { label: "Time", value: formatTime(matchInfo['Time'] || "N/A") },
                    { label: "Venue", value: matchInfo['Venue'] || "N/A" },
                    { label: "Toss", value: matchInfo['Toss'] || "N/A" },
                    { label: "Umpires", value: matchInfo['Umpires'] || "N/A" },
                    { label: "Match Referee", value: matchInfo['Match Referee'] || "N/A" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-sm font-medium text-gray-500">{item.label}</span>
                      <span className="text-base text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </>
  );
}
