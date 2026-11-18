import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"


export const morgue = createLocation(
  "morgue",
  "Morgue",
  [
    "hospital"
  ], {},
  "You see a sign indicating the direction of the morgue.",
  "You are in the morgue.",
  
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the morgue."
          }],
          () => {
            
            handleMsgUI("locations", "morgue", "go", 0)
            
            handleChangeLocation("morgue")
            setBackgroundImg("morgue")
            passTime(180)
          },
          () => true
        )
      ])
    
  })