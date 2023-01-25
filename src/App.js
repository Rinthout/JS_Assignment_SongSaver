import React from "react"
import "./App.css"
import SongOverview from "./components/SongOverview"

function App() {
  return (
    <div className="app">
      <header className="app-header" >
        <h3>Winc Lil'Liedjeslijst</h3>
        <SongOverview />
      </header>
    </div>
  )
}

export default App