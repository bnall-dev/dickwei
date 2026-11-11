import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;

import { initGame } from "./data/_game"
import { changeDisplayText } from "./functions/game"
import TextDisplay from "./modules/UI/TextDisplay"
import InteractionUI from "./modules/UI/InteractionUI"
import ChoiceUI from "./modules/UI/ChoiceUI"
import ToolsUI from "./modules/UI/ToolsUI"

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
  
  
  
  
  
  
  
  
  
  
  
  function InventoryUI() {
    
    const itemList = window.getGame().player.inventory.map((item, i) => <li key = {i}>
      <h4>{window.getGame().items[item].name}</h4>
    </li>)
    
    return (
      <div className = "InventoryUI">
    <h3>Inventory</h3>
        <ul>
       {itemList}
        </ul>
        <button onClick = {()=>{window.setGame(prev => ({
          ...prev,
          inventoryUIActive: false,
          interactionUIActive: true,
  toolsUIActive: true
        }))}}>Close</button>
        </div>
      
    )
  }
  
  
  function DossierUI() {
    
    const questList = Object.values(window.getGame().quests).filter(q => q.active == true).map((q, i) => {
      
      const subquestList = Object.values(q.subquests).filter(sq => sq.active == true).map((sq, ii) => {
        
        
        return <li key = {ii}>
      <h5>{sq.objective}</h5>
      <h6>{sq.description}</h6>
    </li>
        
      })
      
      return <li key = {i} >
      <h4>  {q.name}</h4>
      <ul>
        {subquestList}
      </ul>
    </li>
      
    })
    
    const documentsList = Object.values(window.getGame().documents).filter(doc => doc.active == true).map((doc, i) => {
      return <li key = {i}>
        <h4>{doc.name}</h4>
      </li>
    })
    
    return (
      <div className = "DossierUI">
    <h3>Mission Objectives</h3>
        <ul>
       {questList}
        </ul>
        <h3>Case Files</h3>
        <ul>
          {documentsList}
        </ul>
        <button onClick = {()=>{window.setGame(prev => ({
          ...prev,
          dossierUIActive: false,
          interactionUIActive: true,
          toolsUIActive: true
        }))}}>Close</button>
        </div>
      
    )
  }
  
  function Header() {
    const dayOfWeek = Object.values(window.getGame().weekDays).find(d => d.day == window.getGame().day % 7).abbrev
    
    const cigStyle = {
      height: "5px",
      width: "60px",
      display: "flex",
      justifyContent: "flex-end"
    }
    const cigRemainingStyle = {
      backgroundColor: "white",
      height: "5px",
      width: (window.getGame().player.currentCig / 1440 * 40).toString() + "px",
      borderLeft: "3px solid orange"
    }
    const cigFilterStyle = {
      height: "5px",
      width: "20px",
      backgroundColor: "orange"
    }
    
    return <div className = "Header">
      <h6>{dayOfWeek} {window.getGame().dayTime.toUpperCase()}</h6>
      <h6>Day {window.getGame().day}</h6>
      <div style = {cigStyle}>
        <div style = {cigRemainingStyle}/>
        <div style = {cigFilterStyle}/>
      </div>
      <h6>({window.getGame().player.cigs})</h6>
    </div>
  }
  
  
  return (
    <div className="app">
      <Header/>
      <TextDisplay />
      {game.choiceUIActive && <ChoiceUI/>}
      {game.interactionUIActive && <InteractionUI/>}
      {game.toolsUIActive && <ToolsUI/>}
      {game.inventoryUIActive && <InventoryUI />}
      {game.dossierUIActive && <DossierUI/>}
    </div>
  )
}

// Mount — React 18+ uses c reateRoot instead of the legacy ReactDOM.render()
ReactDOM.createRoot(document.getElementById('root')).render(<App />);