import { createContext, useEffect, useState } from 'react'
import './App.css'
import TournamentsList from './components/TournamentsList'
import { Link, Route, Routes } from 'react-router-dom'
import NewPlayerForm from './components/NewPlayerForm'
import PlayersList from './components/PlayersList'
import NewTournamentForm from './components/NewTournamentForm'
import AddPlayerToTournament from './components/AddPlayerToTournament'

const GolfContext = createContext()

function App() {
  const [tournaments, setTournaments] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/tournaments")
      .then((res) => res.json())
      .then((data) => setTournaments(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
  }, [])

  return (
    <>
      <h1>Golf tournaments</h1>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Tournaments</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/add/player">Add player</Link></li>
            <li><Link to="/add/tournament">New tournament</Link></li>
          </ul>
        </nav>
      </header>
      <GolfContext.Provider value={{tournaments, setTournaments, players, setPlayers}}>
      <Routes>
        <Route path="/" element={<TournamentsList />} />
        <Route path="/players" element={<PlayersList />} />
        <Route path="/add/player" element={<NewPlayerForm />} />
        <Route path="/add/tournament" element={<NewTournamentForm/>} />
        <Route
            path="/tournament/:tournamentId/add-player"
            element={<AddPlayerToTournament/>}
          />
      </Routes>
      </GolfContext.Provider>
    </>
  )
}

export {GolfContext, App}
