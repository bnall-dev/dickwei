  import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;

import {setChoiceUIActive, setMessage, setInteractionUIActive, setToolsUIActive, setBackgroundImg, setInventoryUIActive, setNpcImg} from "../../functions/game"
  
  function ChoiceUI() {
    
    function handleActionCondition (int){
      
      int.actions.find(a => a.condition()).func()
    }
    
    const ChoiceButtons = (window.getGame().interaction).map(
      (int, i) => {
        return (
          <li key = {i}>
            <button onClick ={()=>handleActionCondition(int) }>
              {int.text}
            </button>
          </li>
        )
      }
    )
    
    function setMessageLocationDisplay() {
  const text = window.getGame().locations[window.getGame().player.location].displayText
  
  setMessage([{ text }])
  
  window.setGame(prev => ({
    ...prev,
    displayText: text,
    messageIndex: 0
  }))
}
    
    function cancelChoice() {
      
      
   
      if(window.getGame().currentObj.type == "item") {setInventoryUIActive(true)
        setMessage([{text: "You take a look through your belongings."}])
      }
      else {setInteractionUIActive(true)
      setToolsUIActive(true)
      setMessageLocationDisplay()
        
      }
      setBackgroundImg(window.getGame().player.location)
      setNpcImg("")
      setChoiceUIActive(false)
      
      
      
      
    }
    
    return (<div className = "ChoiceUI" style = {{
visibility: window.getGame().choiceUIActive == true ? "visible" : "hidden", position: window.getGame().choiceUIActive == true ? "relative" : "absolute"
      }}>
      <ul>
        {ChoiceButtons}
         <li>
            {window.getGame().headerActive && <button onClick = {cancelChoice}>
              Cancel
            </button>}
          </li>
      </ul>
    </div>)
  }
  
  export default ChoiceUI