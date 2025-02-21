import { Link } from "react-router-dom"

export default function TournamentsListItem(props) {
    const {tournament} = props
    const players = tournament.players
    return (
        <li key={tournament.id}>
            <h3>{tournament.title} ({tournament.courseName})</h3>
            <ul>
                {players.map((player) => 
                    <li key={player.id}>{player.firstName} {player.lastName} (hcp: {player.handicap})</li>
                )}
            </ul>
            <Link to={`/tournament/${tournament.id}/add-player`}>Add player</Link>
        </li>
    )
}