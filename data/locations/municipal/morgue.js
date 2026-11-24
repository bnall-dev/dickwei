import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"


export const morgue = createLocation(
  "morgue",
  "Morgue",
  [
    "hospital"
  ], {},
 {hospital: "You see a sign indicating the direction of the morgue."},
  "You are in the morgue.",
  
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "The door is locked. You see an electronic card reader near the knob. Looks like only someone with a key card can enter."
          }],
          () => {
            handleMsgUI("locations", "morgue", "go", 0)
            setInteractionUIActive(false)
            setToolsUIActive(false)
            setMessageActive(true)
           
            
            
            passTime(30)
          },
          () => !window.getGame().player.inventory.includes("hospital_keycard")
        )
      ])
    
  })