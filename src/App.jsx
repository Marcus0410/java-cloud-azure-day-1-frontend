import { createContext, useEffect, useState } from 'react'
import './App.css'
import TournamentsList from './components/TournamentsList'

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
      <GolfContext.Provider value={{tournaments, setTournaments, players, setPlayers}}>
        <TournamentsList/>
      </GolfContext.Provider>
    </>
  )
}

export {GolfContext, App}
