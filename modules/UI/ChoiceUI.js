  import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;

import {setChoiceUIActive, setMessage, setInteractionUIActive, setToolsUIActive, setBackgroundImg} from "../../functions/game"
  
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
    
    function setMessageLocationDisplay(){
setMessage( [{ text: window.getGame().locations[window.getGame().player.location].displayText }])

    }
    
    function cancelChoice() {
      
      setChoiceUIActive(false)
      setInteractionUIActive(true)
      setToolsUIActive(true)
      setMessageLocationDisplay()
      setBackgroundImg(window.getGame().player.location)
      
      
    }
    
    return (<div className = "ChoiceUI">
      <ul>
        {ChoiceButtons}
         <li>
            <button onClick = {cancelChoice}>
              Cancel
            </button>
          </li>
      </ul>
    </div>)
  }
  
  export default ChoiceUI