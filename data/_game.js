import { locationDataInit } from "./locations"
import { objectDataInit } from "./objects"
import { itemDataInit } from "./items"
import { npcDataInit } from "./npcs"
import { questDataInit } from "./quests"
import { documentsDataInit } from "./documents"


import {setBackgroundImg, setHeaderActive, startNewGame, loadGame} from "../../functions/game"

function playerDataInit() {
  return (
  {
    location: "outskirts",
    contacts: [],
    inventory: [
      
      "dossier",
      "player_phone",
      "player_gun",
      "cigarettes_open"
    ],
    cigs: 19,
    currentCig: 1440,
    dollars: 20,
    cents: 65
  })
}

export function initGame() {
  return (
  {
    player: playerDataInit(),
    locations: locationDataInit(),
    objects: objectDataInit(),
    quests: questDataInit(),
    npcs: npcDataInit(),
    documents: documentsDataInit(),
    currentObj: locationDataInit().outskirts,
    items: itemDataInit(),
    
    displayText: "Dick Wei",
    message: [{text: "Dick Wei"}],
    messageIndex: 0,
    messageActive: false,
    sceneActive: true,
    backgroundImage: "title",
    npcImage: "",
    speaker:"",
    interaction: [
      {
        text: "New Game",
        actions: [
          {
            message: [{text:""}],
            func: ()=>{startNewGame()},
            condition: ()=> true
          }
        ]
    },
      {
        text: "Load Game",
        actions: [
          {
            message: [{text:""}],
            func: ()=>{loadGame()},
            condition: ()=> true
          }
        ]
    }
    ],
    headerActive: false,
    choiceUIActive: true,
    interactionUIActive: false,
    toolsUIActive: false,
    inventoryUIActive: false,
    dossierUIActive: false,
    dossModule: "main",
    phoneUIActive: false,
    weekDays: {
      sunday: {
        name: "Sunday",
        abbrev: "SUN",
        day: 1
      },
      monday: {
        name: "Monday",
        abbrev: "MON",
        day: 2
      },
      tuesday: {
        name: "Tuesday",
        abbrev: "TUE",
        day: 3
      },
      wednesday: {
        name: "Wednesday",
        abbrev: "WED",
        day: 4
      },
      thursday: {
        name: "Thursday",
        abbrev: "THU",
        day: 5
      },
      friday: {
        name: "Friday",
        abbrev: "FRI",
        day: 6
      },
      saturday: {
        name: "Saturay",
        abbrev: "SAT",
        day: 0
      },
    },
    day: 1,
    dayTime: "am"
    
  })
}