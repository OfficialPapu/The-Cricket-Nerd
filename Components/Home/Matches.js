import { PiCaretDoubleRightThin } from "react-icons/pi";
export default function Matches() {
    const ongoingMatches = [
        {
            id: 1,
            team1: "IND",
            team2: "AUS",
            title:"ICC CWC League 2",
            team1Flag: "Flags/1x1/au.svg",
            team2Flag: "Flags/1x1/in.svg",
            matchTime: "10:00 AM",
            matchDate: "2024-07-01",
            status: "Live",
        },
        {
            id: 2,
            team1: "England",
            team2: "South Africa",
            title:"ICC CWC League 2",
            team1Flag: "Flags/1x1/za.svg",
            team2Flag: "Flags/1x1/gb-eng.svg",
            matchTime: "2:00 PM",
            matchDate: "2024-07-01",
            status: "Upcoming",
        },
        {
            id: 3,
            team1: "England",
            team2: "South Africa",
            title:"ICC CWC League 2",
            team1Flag: "Flags/1x1/za.svg",
            team2Flag: "Flags/1x1/eu.svg",
            matchTime: "2:00 PM",
            matchDate: "2024-07-01",
            status: "Upcoming",
        },
        {
            id: 4,
            team1: "England",
            team2: "South Africa",
            title:"ICC CWC League 2",
            team1Flag: "Flags/1x1/za.svg",
            team2Flag: "Flags/1x1/eu.svg",
            matchTime: "2:00 PM",
            matchDate: "2024-07-01",
            status: "Upcoming",
        },

    ]

    return (
        <section className="bg-background pt-12 md:pt-16 lg:pt-20 flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="mb-8 md:mb-10 lg:mb-12">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">Ongoing Matches</h2>
                </div>

                <div className="flex items-center justify-between my-4 p-3 rounded-lg border">
                    <h3 className="text-lg font-medium">The Cricket Show</h3>
                    <a href="#"><button variant="subtle" className="flex items-center gap-2">
                        <span>View All</span>
                        <PiCaretDoubleRightThin />
                    </button>
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {ongoingMatches.map((match) => (
                        <div key={match.id} className="bg-card rounded-lg border border-muted p-4 flex flex-col gap-6">
                            <h2>{match.title}</h2>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={match.team2Flag} alt={match.team1} className="w-[40px] object-contain" />
                                    <span className="font-medium">{match.team1}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{match.team2}</span>
                                    <img src={match.team1Flag} alt={match.team2} className="object-contain w-[40px]" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-between gap-2">
                                <div className="text-sm text-muted-foreground">
                                    {match.matchTime} - {match.matchDate}
                                </div>
                                <div
                                    className={`px-2 py-1 rounded-md text-xs font-medium ${match.status === "Live" ? "bg-red-500 text-foreground text-white" : "bg-green-500 text-foreground text-white"
                                        }`}
                                >
                                    {match.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
