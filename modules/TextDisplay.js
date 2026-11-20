import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;

import { endScene } from "../../functions/game"

function TextDisplay() {
  
  function messageIsContinued(){
    return window.getGame().messageIndex < window.getGame().message.length - 1
  }
  
  function goToNextLine(){
    window.setGame(
      prev=>({
        ...prev, messageIndex: prev.messageIndex + 1
        
      }))
  }
  
  function messageLineHasFunction(){
   return window.getGame().message[window.getGame().messageIndex].func
  }
  
  function handleMessageLineFunction(){
    window.getGame().message[window.getGame().messageIndex].func()
 
  }
  
  function handleContinueButton(){
    if (messageLineHasFunction()) {
    if (messageIsContinued()) {
      handleMessageLineFunction()
      goToNextLine()} 
    else endScene()
      handleMessageLineFunction()
    }
    else if (messageIsContinued()) {goToNextLine()} 
    else endScene()
        
  }
  
    return (
      <div>
        <div className = "TextDisplay">
          <img className = "DisplayImg" src= {`./images/${window.getGame().backgroundImage}.jpeg`}/>
         <img className = "NpcImg" src= {`./images/npc/${window.getGame().npcImage}.png`} />
         <div>
         <p style = {{
           display: window.getGame().speaker != ""?"block" : "none"
         }}>{window.getGame().speakerName}</p>
          <p>
            {window.getGame().displayText}
          </p>
          </div>
        </div>
        {window.getGame().messageActive && <div className = "continueDiv">
            <button onClick = {handleContinueButton}>
          Continue
        </button>
      </div>}
      </div>
    )
  }
  
  export default TextDisplay