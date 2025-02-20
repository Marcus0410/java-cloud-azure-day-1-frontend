import { useContext } from "react"
import { GolfContext } from "../App"

export default function TournamentsList() {
    const context = useContext(GolfContext)
    const tournaments = context.tournaments
    return (
        <div>
            <h2>Tournaments:</h2>
            <ul>
            {tournaments.map((tournament) =>
                <li key={tournament.id}>{tournament.title}</li>
            )}
            </ul>
        </div>
    )
}