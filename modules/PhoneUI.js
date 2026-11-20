import React from 'react';
import ReactDOM from 'react-dom';

import {setChoiceUIActive, setMessageActive, setPhoneUIActive, setMessage, setInteractionUIActive, setToolsUIActive, setBackgroundImg} from "../functions/game"

function PhoneUI() {
  
   function saveGame() {
     setChoiceUIActive(false)
  localStorage.setItem("savedGame_1", JSON.stringify(window.getGame()));
  
  
}
    
    function openMap(){
      setBackgroundImg("map")
    }
    
    function handleOptions()
   
      
      {window.setGame(prev=>({...prev,
        interaction:[
          {
            text: "Save Game",
            actions: [
              {
                message: [],
              func: ()=>{
                saveGame()
                setMessage([{text: "*Game Saved*", func: () => {
                  setChoiceUIActive(false)
                  setInteractionUIActive(true)
setToolsUIActive(true)
                }
                  
                }]
                 
                )
                
                setMessageActive(true)
                
              },
              condition: ()=> true
                
              }
            ]
          }
        ]
      }))
        setChoiceUIActive(true)
        setPhoneUIActive(false)
      }
      
    
    
    return (
      <div className = "PhoneUI">
        <ul>
          <li>
         <button>
           Contacts
         </button>
       </li>
        <li>
         <button>
           Photos
         </button>
       </li>
        <li>
         <button onClick= {openMap}>
           GPS
         </button>
       </li>
        <li>
         <button>
           Radio
         </button>
       </li>
        <li>
         <button>
           Classifieds
         </button>
       </li>
        <li>
         <button>
           Browser
         </button>
       </li>
        <li>
         <button>
           Minigame
         </button>
       </li>
        <li>
         <button>
           PineNet
         </button>
       </li>
        <li>
         <button>
           Sindr
         </button>
       </li>
    
       <li>
         <button onClick ={handleOptions}>
           Options
         </button>
       </li>
        </ul>
        <button onClick = {()=>{window.setGame(prev => ({
          ...prev,
          phoneUIActive: false,
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

export default PhoneUI