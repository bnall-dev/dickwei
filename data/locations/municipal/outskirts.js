import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"

export const outskirts = createLocation(
  "outskirts",
  "Outskirts",
  [
    "municipal_district"
  ],
  [],
  {municipal_district: "You see the road out of town lead West into the Outskirts."},
  "You are in the town Outskirts.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
            //DEFAULT
            {
              text: "You enter the town Outskirts."
            }
            
          ],
          () => {
            
            handleMsgUI("locations", "outskirts", "go", 0)
            handleChangeLocation("outskirts")
            setBackgroundImg("outskirts")
            passTime(300)
            
          },
          () => true
          
          
        )
      ])
  })