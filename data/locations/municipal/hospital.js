import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setInteractionUIActive, setToolsUIActive, setMessageActive } from "../../../functions/game"
import {scenes} from "../../scenes"

export const hospital = createLocation(
  "hospital",
  "Hospital",
  [
    "morgue",
    "municipal_district"
  ], {},
  {municipal_district: "You see the Hospital.",
    morgue: "The stairs lead up to the door back into the hospital."
  },
  "You stand in the Hospital lobby.",
  
  {
    go: createInteraction(
      "Go",
      [ createAction(
        scenes.autopsy,
        ()=>{
          handleMsgUI("locations", "hospital", "go", 0)
          setInteractionUIActive(false)
          setToolsUIActive(false)
          setMessageActive(true)
setBackgroundImg("hospital")
passTime(180)
        },
        ()=> window.getGame().quests.autopsy.active
      ),
        createAction(
          [
          {
            text: "You enter the Hospital."
          }],
          () => {
            handleMsgUI("locations", "hospital", "go", 1)
            
            handleChangeLocation("hospital")
            setBackgroundImg("hospital")
            passTime(180)
          },
          () => true
        )
      ]
      
    )
  }
  
)