import { locationDataInit } from "./locations"
import { objectDataInit } from "./objects"
import { itemDataInit } from "./items"
import { npcDataInit } from "./npcs"
import { questDataInit } from "./quests"
import { documentsDataInit } from "./documents"



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
    cigs: 0,
    currentCig: 1440,
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
    message: [{ text: "You are driving deep in the mountains, on the way to investigate a very important case." },
      { text: "As you apprach your destination, something suddenly averts your attention and the car spins out of control!" },
      { text: "Miraculously, you aren't harmed, but your car has been wrapped around a tree." },
      { text: "Dick: \"I can't believe I survived that! I shall take it as a cosmic mandate that I must solve this case!\"" },
      { text: "Dick: \"But it looks like we're on foot from here...\"" }
    ],
    messageIndex: 0,
    messageActive: true,
    sceneActive: true,
    interaction: [
      
    ],
    choiceUIActive: false,
    interactionUIActive: false,
    toolsUIActive: false,
    inventoryUIActive: false,
    dossierUIActive: false,
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
      wrdnesday: {
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
        day: 7
      },
    },
    day: 1,
    dayTime: "am"
    
  })
}