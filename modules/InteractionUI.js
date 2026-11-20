  import React from 'react';
  import ReactDOM from 'react-dom';
  const { useState, useEffect } = React;
  
  import { passTime, handleInteraction } from "../../functions/game"
  
  
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
            {npc.flags && npc.flags.have_met ? npc.name : npc.preName}
          </button>
        </li>
        )
      })
      
    }
    
    function SubLocationButtons() {
      
      
      
      var viewLocations = []
      
      for (let i = locationIndex; i < locationIndex + 3; i++) {
        viewLocations.push(subLocations[i] || {})
      }
      
      return viewLocations.map((loc, i) => {
        return (
          <li key = {i}>
          <button className= "LocationButton" onClick = {()=>{handleInteraction(loc)
          setLocationIndex(0)
          setNpcIndex(0)
          setObjectIndex(0)}
          }>
            {loc.name}
          </button>
        </li>
        )
      })
      
    }
    
    
    
    
    
    
    
    return (
      <div className = "InteractionUI" style = {{
visibility: window.getGame().interactionUIActive == true ? "visible" : "hidden", position: window.getGame().interactionUIActive == true ? "relative" : "absolute"
      }}>
         
   
          <ul>
            { <li>
             <button style = {{alignSelf: "center",border: 0,width: "50%", backgroundColor: npcIndex == 0 ? "dimgrey" : "white",
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
             }} onClick = {()=>{if (npcIndex > 0) setNpcIndex(npcIndex - 1)}}/>
           </li> }
             {NpcButtons()}
              <li>
             <button style = {{alignSelf: "center",border: 0,width: "50%", backgroundColor: npcIndex > npcs.length -4 ? "dimgrey" : "white",
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)"
             }} onClick = {()=>{if (npcIndex < npcs.length - 3) setNpcIndex(npcIndex + 1)}}/>
           </li>
          </ul>
        
      
      
          <ul>
            { <li>
             <button style = {{alignSelf: "center",border: 0,width: "50%", backgroundColor: objectIndex == 0 ? "dimgrey" : "white",
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
             }} onClick = {()=>{if (objectIndex > 0) setObjectIndex(objectIndex - 1)}}/>
           </li> }
             {ObjectButtons()}
              { <li>
             <button style = {{alignSelf: "center",border: 0,width: "50%", backgroundColor: objectIndex > objects.length - 4 ? "dimgrey" : "white",
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)"
             }} onClick = {()=>{if (objectIndex < objects.length - 3) setObjectIndex(objectIndex + 1)}}/>
           </li> }
          </ul>
      
      
    
          <ul>
            {   <li>
             <button style = {{alignSelf: "center",border: 0,width: "50%", backgroundColor: locationIndex == 0 ? "dimgrey" : "white",
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
             }} onClick = {()=>{if (locationIndex > 0) setLocationIndex(locationIndex - 1)}}/>
           </li> }
           {SubLocationButtons()}
          {  <li>
             <button style = {{alignSelf: "center",border: 0,width: "50%", backgroundColor: locationIndex > subLocations.length - 4 ? "dimgrey" : "white",
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)"
             }} onClick = {()=>{if (locationIndex < subLocations.length - 3) setLocationIndex(locationIndex + 1)}}/>
           </li>}
          </ul>
      
      </div>
    )
  }
  
  export default InteractionUI