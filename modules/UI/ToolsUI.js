import React from 'react';
import ReactDOM from 'react-dom';

import {setInventoryUIActive, setDossierUIActive, setInteractionUIActive, setToolsUIActive} from "../../functions/game"

const { useState, useEffect } = React;


 
 function ToolsUI() {
   
   function openInventory(){
     setInventoryUIActive(true)
     setInteractionUIActive(false)
     setToolsUIActive(false)
   }
   
   function openDossier(){
     setDossierUIActive(true)
setInteractionUIActive(false)
setToolsUIActive(false)
   }
    
    return (
      <div className = "ToolsUI">
        <button onClick = {openInventory}>Inventory</button>
        <button onClick = {openDossier}>Dossier</button>
        <button>Phone</button>
      </div>
    )
  }
  
  export default ToolsUI