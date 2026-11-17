import React from 'react';
import ReactDOM from 'react-dom';

function DossierUI() {
  
  const questList = Object.values(window.getGame().quests).filter(q => q.active == true).map((q, i) => {
    
    const subquestList = Object.values(q.subquests).filter(sq => sq.active == true).map((sq, ii) => {
      return <li key = {ii}>
        <h5>{sq.objective}</h5>
        <h6>{sq.description}</h6>
      </li>
    })
    
    return <li key = {i} >
      <h4>{q.name}</h4>
      <ul>
        {subquestList}
      </ul>
    </li>
  })
  
  const documentsList = Object.values(window.getGame().documents).filter(doc => doc.active == true).map((doc, i) => {
    return <li key = {i}>
      <button>{doc.name}</button>
    </li>
  })
  
  return (
    <div className = "DossierUI">
      <div>
        <h6>Mission Objectives</h6>
        <ul>
          {questList}
        </ul>
      </div>
      <div>
        <h6>Documents</h6>
        <ul>
          {documentsList}
        </ul>
      </div>
      <button onClick = {()=>{window.setGame(prev => ({
          ...prev,
          dossierUIActive: false,
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

export default DossierUI