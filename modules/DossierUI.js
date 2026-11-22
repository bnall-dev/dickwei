import React from 'react';
import ReactDOM from 'react-dom';
const { useState, useEffect } = React;

import {setMessageActive, setMessage, setDossierUIActive} from "../functions/game"

function DossierUI() {
  const questList = Object.values(window.getGame().quests).filter(q => q.active == true).map((q, i) => {
    var string = `${q.name}\n\n`
    const subquestList = Object.values(q.subquests).filter(sq=>sq.active == true).forEach((sq, i)=>{
      string += `${sq.objective}\n${sq.description}\n`
    })
    
    return <li>
      
      <button onClick = {()=>{
        setMessage([{
          text: string
        }])
      }}>{q.name}</button>
    </li>
  })
    
  
  const documentsList = Object.values(window.getGame().documents).filter(doc => doc.active == true).map((doc, i) => {
    return <li key = {i}>
      <button onClick = {doc.func}>{doc.name}</button>
    </li>
  })
  
  
  function Handbook() {
    const chapterList = window.getGame().documents.handbook.chapters.map((ch, i) => {
      return <li>
        <button onClick = {()=>{
          setMessageActive(true)
          setDossierUIActive(false)
          setMessage(window.getGame().documents.handbook.chapters[i])
        }}>
          
          Chapter {i + 1}
        </button>
      </li>
    })
    return <div>
      <ul>
        {chapterList}
      </ul>
      <button onClick={()=>{
      setMessage([{ text: "You review your case files." }])
      window.setGame(prev=>({...prev, dossModule: "main"}))}}>Back</button>
    </div>
  }
  
  function Persons() {
    const personList = Object.values(window.getGame().npcs).map((npc, i) => {
      return <li key = {i} style= {{display: npc.flags.have_met ? "block":"none"}}>
        <button onClick = {()=>{
          setMessageActive(true)
          setDossierUIActive(false)
          setMessage(window.getGame().documents.persons_of_interest.npcs[npc.id])
        }}>
          
           {npc.name}
        </button>
      </li>
    })
    return <div>
      <ul>
        {personList}
      </ul>
      
      <button onClick={()=>{
      setMessage([{ text: "You review your case files." }])
      window.setGame(prev=>({...prev, dossModule: "main"}))}}>Back</button>
    </div>
  }
  
  function Newspaper() {
    const [page, setPage] = useState(1)
    const editionList = Array.from({ length: page == 1 ? 15 : 16 }, (ed, i) => (
      <li>
        <button onClick={()=>{
          setMessageActive(true)
          setDossierUIActive(false)
          setMessage(
            window.getGame().documents.newspaper.editionsData[
              page == 1? i : i + 16
            ].article
          )
        }} style = {{
          color: page == 1 ? (window.getGame().documents.newspaper.editions.includes(i + 1) ? "white" : "dimgrey"): (window.getGame().documents.newspaper.editions.includes(i + 16) ? "white" : "dimgrey"),
          
          border: "1px solid " + ((page == 1 ? (window.getGame().documents.newspaper.editions.includes(i + 1) ? "white" : "dimgrey"): (window.getGame().documents.newspaper.editions.includes(i + 16) ? "white" : "dimgrey")))
        }}>
          Day {page == 1 ? i + 1 : i + 16}
        </button>
      </li>
    ))
    return <div>
      <ul>
        {editionList}
      </ul>
      <button onClick = {()=>{if (page == 1) {setPage(2)} else setPage(1)}}>{page == 1 ? "Next Page" : "Previous Page"}</button>
      <button onClick={()=>{
      setMessage([{ text: "You review your case files." }])
      window.setGame(prev=>({...prev, dossModule: "main"}))}}>Back</button>
    </div>
  }
  
  return (
    <div className = "DossierUI" style = {{
visibility: window.getGame().dossierUIActive == true ? "visible" : "hidden", position: window.getGame().dossierUIActive == true ? "relative" : "absolute"
      }}>
      {window.getGame().dossModule == "main" && <div>
      <div>
        <p>Mission Objectives</p>
        <ul>
       {questList}
        </ul>
      </div>
      <div>
        <p>Documents</p>
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
      </div>}
      {window.getGame().dossModule == "handbook" && <Handbook/>}
     { window.getGame().dossModule == "persons_of_interest" && <Persons/>}
      {window.getGame().dossModule == "newspaper" && <Newspaper/>}
    </div>
  )
}

export default DossierUI