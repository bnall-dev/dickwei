import React from 'react';
import ReactDOM from 'react-dom';

import {setInventoryUIActive, setDossierUIActive, setInteractionUIActive, setToolsUIActive, setPhoneUIActive, openPhone, openInventory, openDossier} from "../../functions/game"

const { useState, useEffect } = React;


 
 function ToolsUI() {
   

    return (
      <div className = "ToolsUI">
        <button onClick = {openInventory}>Inventory</button>
        <button onClick = {openDossier}>Dossier</button>
        <button onClick={openPhone}>Phone</button>
      </div>
    )
  }
  
  export default ToolsUI