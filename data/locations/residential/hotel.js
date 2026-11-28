import { createLocation, handleMsgUI } from "../../locations"

import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive,  
  setSpeaker,  setToolsUIActive,  setNpcImg,setInteractionUIActive , setMessage, setChoiceUIActive 
} from "../../../functions/game"

export const hotel = createLocation(
      "hotel",
      "The Cascadian Grande",
      ["player_room", "municipal_district"],
      {},
      {municipal_district: "The hotel resort overlooks a waterfall where the river empties into the lake below. The front door leads into the lobby.",
        player_room: "The door to your room exits into the hall leading to the hotel lobby."
      },
      "You are in the lobby of the Cascadian Grande Hotel.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the hotel lobby. No one seems to be present at the concierge desk.",
                  func: ()=>{
                    setNpcImg("player")
                    setSpeaker("player")
                   
                    
                  }
                },
                {
                  text: "\"It's a nice place, but I doubt we'll need a room.\"",
                  func: ()=>{
                    setNpcImg("")
                    setSpeaker("")
                    setInteractionUIActive(true)
                    setToolsUIActive(true)
                    setMessageActive(false)
                    setChoiceUIActive(false)
                    setMessage([{
                      text: window.getGame().locations[window.getGame().player.location].displayText 
                    }])
                  }
                  
                }
              ],
              ()=>{
                handleMsgUI("locations", "hotel", "go", 0)
                 setInteractionUIActive(false)
 setToolsUIActive(false)
 setMessageActive(true)
handleChangeLocation("hotel")
setBackgroundImg("hotel")
passTime(180)
              },
              
              ()=> window.getGame().npcs.concierge.location != "hotel"
            ),
            createAction(
              [
                {
                  text: "You enter the Hotel."
                }
              ],
              ()=>{
                handleMsgUI("locations", "hotel", "go", 1)
                handleChangeLocation("hotel")
                setBackgroundImg("hotel")
                passTime(180)
              },
              ()=> true
              
            )
          ]
        )
      }
    )