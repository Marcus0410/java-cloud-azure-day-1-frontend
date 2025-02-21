import { useContext } from "react"
import { GolfContext } from "../App"
import TournamentsListItem from "./TournamentsListItem"

export default function TournamentsList() {
    const context = useContext(GolfContext)
    const tournaments = context.tournaments
    return (
        <div>
            <h2>Tournaments:</h2>
            <ul>
            {tournaments.map((tournament) =>
                <TournamentsListItem key={tournament.id} tournament={tournament} />
            )}
            </ul>
        </div>
    )
}