import { createLocation, handleMsgUI } from "../../locations"
import { meetNpc, triggerFlag, createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setInteractionUIActive, setToolsUIActive, setMessageActive, setNpcImg, setSpeaker } from "../../../functions/game"

import {scenes} from "../../scenes"

export const sheriffs_station = createLocation(
    "sheriffs_station",
    "Sheriff's Station",
    [
      "jail",
      "municipal_district"
    ], { player_needs_badge: false },
    {municipal_district: "You see the Sheriff's Station.",
      jail: "The secure door leads back into the Sheriff's Station."
    },
    "You stand in the Sheriff's Station. Several hunting tophies decorate the walls.",
    
    {
      go: createInteraction(
        "Go",
        [
          createAction(
            scenes.sheriff_station_have_badge,
              () => {
                
                handleMsgUI("locations", "sheriffs_station", "go", 0)
                handleChangeLocation("sheriffs_station")
                setBackgroundImg("sheriffs_station")
                setInteractionUIActive(false)
                setToolsUIActive(false)
                setMessageActive(true)
                passTime(300)
                
              },
              () => window.getGame().locations.sheriffs_station.flags.player_needs_badge == true && window.getGame().player.inventory.includes("player_badge")
            ),
            createAction(
              [
              {
                text: "You enter the Sheriff's Station."
              }],
              () => {
                
                handleMsgUI("locations", "sheriffs_station", "go", 1)
                handleChangeLocation("sheriffs_station")
                setBackgroundImg("sheriffs_station")
                passTime(180)
                
              },
              () => true
            )
          ]
          
        )
      }
    )