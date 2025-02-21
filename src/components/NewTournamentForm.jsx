import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GolfContext } from "../App";

export default function NewTournamentForm() {
  const navigate = useNavigate();
  const context = useContext(GolfContext);
  const [tournament, setTournament] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setTournament((prevTournament) => ({
      ...prevTournament,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/tournaments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tournament),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Tournament added:", data);
        navigate("/");
      })
      .catch((error) => console.error("Error adding tournament:", error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Tournament title</label>
      <input type="text" id="title" name="title" onChange={handleChange} />
      <label htmlFor="courseName">Course name</label>
      <input type="text" id="courseName" name="courseName" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
