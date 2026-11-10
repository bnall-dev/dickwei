  import React from 'react';
  import ReactDOM from 'react-dom';
  const { useState, useEffect } = React;
  
  
  function InteractionUI() {
    
    
    function ObjectButtons() {
      const objects = Object.values(window.getGame().objects).filter(obj => obj.location == window.getGame().player.location)
      
      return objects.map((obj, i) => {
        return (
          <li key = {i}>
          <button onClick = {()=>handleInteraction(obj)}>
            {obj.name}
          </button>
        </li>
        )
      })
    }
    
    function NpcButtons() {
      
      const npcs = Object.values(window.getGame().npcs).filter(npc => npc.location == window.getGame().player.location)
      
      return npcs.map((npc, i) => {
        return (
          <li key = {i}>
          <button onClick = {()=>handleInteraction(npc)}>
            {npc.name}
          </button>
        </li>
        )
      })
      
    }
   
    function SubLocationButtons(){
      const location = window.getGame().locations[window.getGame().player.location]
const subLocations = location.subLocations.map(loc => window.getGame().locations[loc])
  
      return subLocations.map((loc, i) => {
  return (
    <li key = {i}>
          <button onClick = {()=>handleInteraction(loc)
          }>
            {loc.name}
          </button>
        </li>
  )
})
      
    }
    
    function handleInteraction(obj) {
      window.setGame(
        prev => (
        {
          ...prev,
          displayText: obj.interactText,
          currentObj: obj,
          interaction: Object.values(obj.interactions),
          choiceUIActive: true,
          interactionUIActive: false,
          toolsUIActive: false
          
          
        })
      )
    }
    
    
    
    
    
    return (
      <div className = "InteractionUI">
         
   
          <ul>
             {NpcButtons()}
          </ul>
        
      
      
          <ul>
             {ObjectButtons()}
          </ul>
      
      
    
          <ul>
           {SubLocationButtons()}
          </ul>
      
      </div>
    )
  }
  
  export default InteractionUI