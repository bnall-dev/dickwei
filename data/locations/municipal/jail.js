import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setNpcImg, setSpeaker, setMessageActive, setInteractionUIActive, setToolsUIActive, setMessage, setChoiceUIActive } from "../../../functions/game"

import {scenes} from "../../scenes"

export const jail = createLocation(
  "jail",
  "Jail",
  [
    
    "sheriffs_station"
  ],
  {
    first_go: false
  },
  {sheriffs_station: "A secure door leads toward the jail cells."},
  "You are in the Jail.",
  
  {
    go: createInteraction(
      "Go",
      [
        
        
        createAction(
          scenes.jail_first_go,
          () => {
            handleMsgUI("locations", "jail", "go", 0)
            setMessageActive(true)
            setInteractionUIActive(false)
            setToolsUIActive(false)
            setNpcImg("drew")
            window.setGame(prev=>({...prev,
              locations: {
                ...prev.locations,
                sheriffs_station: {
                  ...prev.locations.sheriffs_station,
                  flags: {
                    ...prev.locations.sheriffs_station.flags,
                    player_needs_badge : true
                  }
                }
              }
            }))
            passTime(300)
          },
          () => window.getGame().locations.jail.flags.first_go == false
        ),
        createAction(
          [
          {
            text: "You enter the Jail."
          }],
          () => {
            handleMsgUI("locations", "jail", "go", 1)
            setBackgroundImg("jail")
            handleChangeLocation("jail")
            passTime(180)
          },
          () => true
        )
      ]
      
    )
  }
)