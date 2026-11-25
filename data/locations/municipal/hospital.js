import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"

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
      [
        createAction(
          [
          {
            text: "You enter the Hospital."
          }],
          () => {
            handleMsgUI("locations", "hospital", "go", 0)
            
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