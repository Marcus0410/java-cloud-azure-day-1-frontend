import { useContext } from "react";
import { GolfContext } from "../App";

export default function PlayersList() {
    const players = useContext(GolfContext).players

    return (
        <>
        <h2>Players</h2>
        <ul>
            {players.map((player) => 
                <li key={player.id}>{player.firstName} {player.lastName} (hcp: {player.handicap})</li>
            )}
        </ul>
        </>
    )
}