import React from 'react';
import ReactDOM from 'react-dom';

import {setInventoryUIActive, setDossierUIActive, setInteractionUIActive, setToolsUIActive, setPhoneUIActive, setMessage} from "../../functions/game"

const { useState, useEffect } = React;


 
 function ToolsUI() {
   
   function openInventory(){
     setInventoryUIActive(true)
     setInteractionUIActive(false)
     setToolsUIActive(false)
     setMessage([{text:"You take a look through your belongings."}])
   }
   
   function openDossier(){
     setDossierUIActive(true)
setInteractionUIActive(false)
setToolsUIActive(false)
   }
   
   function openPhone() {
  setPhoneUIActive(true)
  setInteractionUIActive(false)
  setToolsUIActive(false)
}
    
    return (
      <div className = "ToolsUI">
        <button onClick = {openInventory}>Inventory</button>
        <button onClick = {openDossier}>Dossier</button>
        <button onClick={openPhone}>Phone</button>
      </div>
    )
  }
  
  export default ToolsUI