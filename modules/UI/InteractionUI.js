  import React from 'react';
  import ReactDOM from 'react-dom';
  const { useState, useEffect } = React;
  
  import {passTime} from "../../functions/game"
  
  
  function InteractionUI() {
    
       var [locationIndex, setLocationIndex] = useState(0)
       var [objectIndex, setObjectIndex] = useState(0)
       var [npcIndex, setNpcIndex] = useState(0)
       const location = window.getGame().locations[window.getGame().player.location]
const subLocations = location.subLocations.map(loc => window.getGame().locations[loc])
    
          const objects = Object.values(window.getGame().objects).filter(obj => obj.location == window.getGame().player.location)
          
  const npcs = Object.values(window.getGame().npcs).filter(npc => npc.location == window.getGame().player.location)        
          
    function ObjectButtons() {
      
      
      

      
      var viewObjects = []

for (let i = objectIndex; i < objectIndex + 3; i++) {
  viewObjects.push(objects[i] || {})
}
      
      return viewObjects.map((obj, i) => {
        return (
          <li key = {i}>
          <button className = "ObjectButton" onClick = {()=>handleInteraction(obj)}>
            {obj.name}
          </button>
        </li>
        )
      })
    }
    
    function NpcButtons() {
      
      
      
            var viewNpcs = []

for (let i = npcIndex; i < npcIndex + 3; i++) {
  viewNpcs.push(npcs[i] || {})
}
      
      return viewNpcs.map((npc, i) => {
        return (
          <li key = {i}>
          <button className= "NpcButton" onClick = {()=>handleInteraction(npc)}>
            {npc.name}
          </button>
        </li>
        )
      })
      
    }
   
    function SubLocationButtons(){
   
      

var viewLocations = []

for (let i = locationIndex; i < locationIndex + 3; i++) {
   viewLocations.push(subLocations[i] || {})
}
  
      return viewLocations.map((loc, i) => {
  return (
    <li key = {i}>
          <button className= "LocationButton" onClick = {()=>handleInteraction(loc)
          }>
            {loc.name}
          </button>
        </li>
  )
})
      
    }
    
    function handleInteraction(obj) {
      if (obj.name)
      {window.setGame(
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
      passTime(10)}
    }
    
    
    
    
    
    return (
      <div className = "InteractionUI">
         
   
          <ul>
            { <li>
             <button style = {{border: npcIndex == 0 ? "1px solid dimgrey" : "1px solid white",
               color: npcIndex == 0 ? "dimgrey" :  "white"
             }} onClick = {()=>{if (npcIndex > 0) setNpcIndex(npcIndex - 1)}}>^</button>
           </li> }
             {NpcButtons()}
              <li>
             <button style = {{border: npcIndex > npcs.length -4  ? "1px solid dimgrey" : "1px solid white",
               color: npcIndex > npcs.length -4  ? "dimgrey" : "white"}} onClick = {()=>{if (npcIndex < npcs.length - 3) setNpcIndex(npcIndex + 1)}}>v</button>
           </li>
          </ul>
        
      
      
          <ul>
            { <li>
             <button style = {{border: objectIndex == 0 ? "1px solid dimgrey" : "1px solid white",
               color: objectIndex == 0 ? "dimgrey" :  "white"
             }} onClick = {()=>{if (objectIndex > 0) setObjectIndex(objectIndex - 1)}}>^</button>
           </li> }
             {ObjectButtons()}
              { <li>
             <button style = {{border: objectIndex > objects.length -4  ? "1px solid dimgrey" : "1px solid white",
               color: objectIndex > objects.length -4  ? "dimgrey" : "white"}} onClick = {()=>{if (objectIndex < objects.length - 3) setObjectIndex(objectIndex + 1)}}>v</button>
           </li> }
          </ul>
      
      
    
          <ul>
            {   <li>
             <button style = {{border: locationIndex == 0 ? "1px solid dimgrey" : "1px solid white",
               color: locationIndex == 0 ? "dimgrey" :  "white"
             }} onClick = {()=>{if (locationIndex > 0) setLocationIndex(locationIndex - 1)}}>^</button>
           </li> }
           {SubLocationButtons()}
          {  <li>
             <button style = {{border: locationIndex > subLocations.length -4  ? "1px solid dimgrey" : "1px solid white",
               color: locationIndex > subLocations.length -4  ? "dimgrey" : "white"
             }} onClick = {()=>{if (locationIndex < subLocations.length - 3) setLocationIndex(locationIndex + 1)}}>v</button>
           </li>}
          </ul>
      
      </div>
    )
  }
  
  export default InteractionUI