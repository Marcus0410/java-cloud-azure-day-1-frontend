import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GolfContext } from "../App";

export default function NewPlayerForm() {
  const navigate = useNavigate();
  const context = useContext(GolfContext);
  const [player, setPlayer] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      // Convert handicap to a number, otherwise store as string
      [name]: name === "handicap" ? parseFloat(value) : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Player added:", data);
        navigate("/");
      })
      .catch((error) => console.error("Error adding player:", error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input type="text" id="firstName" name="firstName" onChange={handleChange} />

      <label htmlFor="lastName">Last name</label>
      <input type="text" id="lastName" name="lastName" onChange={handleChange} />

      <label htmlFor="handicap">Handicap</label>
      <input type="number" id="handicap" name="handicap" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}
