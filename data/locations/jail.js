import { createLocation, handleMsgUI } from "../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../functions/game"

export const jail = createLocation(
  "jail",
  "Jail",
  [
    
    "sheriffs_station"
  ],
  {
    first_go: false
  },
  "A secure door leads toward the jail cells.",
  "You are in the Jail.",
  
  {
    go: createInteraction(
      "Go",
      [
        
        createAction(
          [
          {
            text: "You enter the Jail."
          }],
          () => {
            handleMsgUI("locations", "jail", "go", 0)
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