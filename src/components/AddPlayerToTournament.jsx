import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GolfContext } from "../App";

export default function AddPlayerToTournament() {
  const { tournamentId } = useParams();
  const [playerId, setPlayerId] = useState("");
  const navigate = useNavigate();
  const players = useContext(GolfContext).players

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/tournaments/${tournamentId}/add/${playerId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Player added to tournament:", data);
        navigate("/");
      })
      .catch((error) =>
        console.error("Error adding player to tournament:", error)
      );
  };

  return (
    <div>
      <h2>Add Player to Tournament {tournamentId}</h2>
        <ul>
        {players.map((player) => (
            <li key={player.id}>
            {player.firstName} {player.lastName} (ID: {player.id})
            </li>
        ))}
        </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="playerId">Player ID:</label>
        <input
          type="number"
          id="playerId"
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}
