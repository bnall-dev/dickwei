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
    if (messageLineHasFunction()) {handleMessageLineFunction()}
    else if (messageIsContinued()) {goToNextLine()} 
    else endScene()
        
  }
  
    return (
      <div>
        <div className = "TextDisplay">
          <p>
            {window.getGame().displayText}
          </p>
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