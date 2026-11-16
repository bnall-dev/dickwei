  import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;

import {setChoiceUIActive, setMessage, setInteractionUIActive, setToolsUIActive, setBackgroundImg, setInventoryUIActive} from "../../functions/game"
  
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
      
      
      console.log(window.getGame().currentObj)
      if(window.getGame().currentObj.type == "item") {setInventoryUIActive(true)
        setMessage([{text: "You take a look through your belongings."}])
      }
      else {setInteractionUIActive(true)
      setToolsUIActive(true)
      setMessageLocationDisplay()
        setMessage([{text: window.getGame().locations[window.getGame().player.location].displayText}])
      }
      setBackgroundImg(window.getGame().player.location)
      setChoiceUIActive(false)
      
      
      
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