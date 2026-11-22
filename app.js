import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;

import { initGame } from "./data/_game"
import { changeDisplayText, handleInteraction, lightCig, endDay } from "./functions/game"

import Header from "./modules/Header"
import TextDisplay from "./modules/TextDisplay"
import InteractionUI from "./modules/InteractionUI"
import InventoryUI from "./modules/InventoryUI"
import ChoiceUI from "./modules/ChoiceUI"
import ToolsUI from "./modules/ToolsUI"
import DossierUI from "./modules/DossierUI"
import PhoneUI from "./modules/PhoneUI"

function App() {
  
  const [game, setGame] = useState(initGame())
  window.getGame = () => game
  window.setGame = setGame
  
  
  useEffect(() => {
    window.getGame = () => game
  }, [game])
  
  useEffect(() => {
    changeDisplayText(game.message[game.messageIndex].text)
    
  }, [game.message, game.messageIndex])
  
  useEffect(() => {
    
    Object.keys(window.getGame().npcs).forEach((n, i) => {
      setGame(prev => ({
        ...prev,
        npcs: {
          ...prev.npcs,
          [n]: {
            ...prev.npcs[n],
            location: npcScheduleLocation(prev.npcs[n])
          }
        }
      }))
    })
    
  }, [game.message])
  
  useEffect(() => {
    if (window.getGame().player.currentCig <= 0) {
      if (window.getGame().player.cigs > 0)
        lightCig()
      else endDay()
    }
  }, [game.player.currentCig])
  
  useEffect(() => {
    
    var name = ""
    if (game.speaker == "player") { name = "Dick" }
    else if (game.speaker != "") {
      const npc = game.npcs[game.speaker]
      name = npc.flags.have_met ? npc.name : npc.preName
    }
    setGame(prev => ({
      ...prev,
      speakerName: name
    }))
    
  }, [game.speaker])
  
  function npcScheduleLocation(npc) {
    const today = Object.keys(game.weekDays)[game.day % 7 - 1]
    return npc.specialLocation != "" ? npc.specialLocation : npc.schedule[today][game.dayTime]
  }
  
  
  return (
    <div className="app">
      <Header/>
      <TextDisplay />
      <ChoiceUI/>
      <InteractionUI/>
      {game.toolsUIActive && <ToolsUI/>}
       <InventoryUI />
      <DossierUI/>
      {game.phoneUIActive && <PhoneUI/>}
      <div style = {{
      position: "absolute",
      width: "100%",
height: "100%",
filter: "blur(0.5px)",
pointerEvents: "none",
        background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1.5px, rgba(0,0,0,0) .51px, rgba(0,0,0,0) 3px)"
      }}/>
    </div>
  )
}

// Mount — React 18+ uses c reateRoot instead of the legacy ReactDOM.render()
ReactDOM.createRoot(document.getElementById('root')).render(<App />);