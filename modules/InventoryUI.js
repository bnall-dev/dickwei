import React from 'react';
import ReactDOM from 'react-dom';
import { handleInteraction } from "../functions/game"

function InventoryUI() {
    
    const itemList = window.getGame().player.inventory.map((item, i) => 
      <li key = {i}>
        <button onClick = {()=> handleInteraction(window.getGame().items[item])}>{window.getGame().items[item].name}</button>
      </li>)
    
    return (
      <div className = "InventoryUI">
        <ul>
       {itemList}
        </ul>
        <button onClick = {()=>{window.setGame(prev => ({
          ...prev,
          inventoryUIActive: false,
          interactionUIActive: true,
          toolsUIActive: true,
          message: [{text:prev.locations[prev.player.location].displayText}],
          backgroundImage: prev.player.location
        }))}}>
          Close
        </button>
      </div>
    )
  }
  
  export default InventoryUI