import { handleChangeLocation, createAction, createInteraction, passTime, setMessageActive, setInteractionUIActive, setBackgroundImg, setToolsUIActive } from "../../functions/game"
import { outskirts } from "./locations/municipal/outskirts"
import { municipal_district } from "./locations/municipal/municipal_district"
import { town_hall } from "./locations/municipal/town_hall"
import { mayors_office } from "./locations/municipal/mayors_office"
import { sheriffs_station } from "./locations/municipal/sheriffs_station"
import { jail } from "./locations/municipal/jail"
import { hospital } from "./locations/municipal/hospital"
import { high_school } from "./locations/municipal/high_school"
import { morgue } from "./locations/municipal/morgue"
import { residential_district } from "./locations/residential/residential_district"
import { hotel } from "./locations/residential/hotel"
import { player_room } from "./locations/residential/player_room"
import { downtown } from "./locations/downtown/downtown"
import { mall } from "./locations/downtown/mall"
import { apartments } from "./locations/downtown/apartments"
import { industrial_district } from "./locations/industrial/industrial_district"


export function createLocation(id, name, subLocations, flags, interactText, displayText, interactions) {
  return {
    type: "location",
    id: id,
    name: name,
    subLocations: subLocations,
    flags: flags,
    interactText: interactText,
    displayText: displayText,
    interactions: interactions
  }
}

export function handleMsgUI(cat, obj, act, i) {
  window.setGame(
    prev => ({
      ...prev,
      messageIndex: 0,
      choiceUIActive: false,
      interactionUIActive: true,
      toolsUIActive: true,
      message: window.getGame()[cat][obj].interactions[act].actions[i].message
      
      
      
    })
  )
}

export function locationDataInit() {
  
  
  
  return (
  {
    municipal_district: municipal_district,
    outskirts: outskirts,
    town_hall: town_hall,
    mayors_office: mayors_office,
    sheriffs_station: sheriffs_station,
    high_school: high_school,
    jail: jail,
    hospital: hospital,
    morgue: morgue,
    
    residential_district: residential_district,
    hotel: hotel,
    player_room: player_room,
    
    downtown: downtown,
    mall: mall,
    apartments: apartments,
    
    industrial_district: industrial_district,
    
    
    
    pier: createLocation(
      "pier",
      "Pier",
      ["beach", "lighthouse", "downtown"], {},
      "You see the Pier.",
      "You are on the Pier.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You walk to the Pier."
              }],
              () => {
                handleMsgUI("locations", "pier", "go", 0)
                handleChangeLocation("pier")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    
    beach: createLocation(
      "beach",
      "Beach",
      ["pier"], {},
      "You see the Beach.",
      "You are on the Beach.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You walk down to the Beach."
              }],
              () => {
                handleMsgUI("locations", "beach", "go", 0)
                handleChangeLocation("beach")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    
    lighthouse: createLocation(
      "lighthouse",
      "Lighthouse",
      ["pier"], {},
      "You see the Lighthouse.",
      "You are in the Lighthouse.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You enter the Lighthouse."
              }],
              () => {
                handleMsgUI("locations", "lighthouse", "go", 0)
                handleChangeLocation("lighthouse")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    
    gas_station: createLocation(
      "gas_station",
      "Gas Station",
      ["residential_district"], {},
      "You see the Gas Station.",
      "You are in the Gas Station.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You enter the Gas Station."
              }],
              () => {
                handleMsgUI("locations", "gas_station", "go", 0)
                handleChangeLocation("gas_station")
                setBackgroundImg("gas_station")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    
    diner: createLocation(
      "diner",
      "Diner",
      ["residential_district"], {},
      "You see the Diner.",
      "You are in the Diner.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You enter the Diner."
              }],
              () => {
                handleMsgUI("locations", "diner", "go", 0)
                handleChangeLocation("diner")
                setBackgroundImg("diner")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    church: createLocation(
      "church",
      "Church",
      ["cemetary", "residential_district"], {},
      "You see the Church.",
      "You are in the Church.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You enter the Church."
              }],
              () => {
                handleMsgUI("locations", "church", "go", 0)
                handleChangeLocation("church")
                setBackgroundImg("church")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    
    cemetary: createLocation(
      "cemetary",
      "Cemetary",
      ["church", "industrial_district"], {},
      "You see the Cemetary.",
      "You are in the Cemetary.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You enter the Cemetary."
              }],
              () => {
                handleMsgUI("locations", "cemetary", "go", 0)
                handleChangeLocation("cemetary")
                setBackgroundImg("cemetary")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    
    trailer_park: createLocation(
      "trailer_park",
      "Trailer Park",
      ["industrial_district"], {},
      "You see the Trailer Park.",
      "You are in the Trailer Park.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You enter the Trailer Park."
              }],
              () => {
                handleMsgUI("locations", "trailer_park", "go", 0)
                handleChangeLocation("trailer_park")
                setBackgroundImg("trailer_park")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    factory: createLocation(
      "factory",
      "Abandoned Factory",
      ["industrial_district"], {},
      "You see an Abandoned Factory.",
      "You are in the Abandoned Factory.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You enter the Abandoned Factory."
              }],
              () => {
                handleMsgUI("locations", "factory", "go", 0)
                handleChangeLocation("factory")
                setBackgroundImg("factory")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    ),
    mill: createLocation(
      "mill",
      "Saw Mill",
      ["industrial_district"], {},
      "You see the Mill.",
      "You are in the Mill.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
              {
                text: "You enter the Mill "
              }],
              () => {
                handleMsgUI("locations", "mill", "go", 0)
                handleChangeLocation("mill")
                passTime(180)
              },
              () => true
            )
          ]
        )
      }
    )
    
    
    
    
    
    
    /*
    
      : createLocation(
        "",
        [],
        {},
        "",
        "",
        {
          go: createInteraction(
            "Go",
            [
              createAction(
                [
                  {
                    text: ""
                  }
                ],
                ()=>{
                  handleMsgUI(window.getGame().locations..interactions.go.actions[0].message)
                  handleChangeLocation()
                  passTime()
                },
                ()=>true
              )
            ]
          )
        }
      )
    
    */
    
    
    
    
  })
}