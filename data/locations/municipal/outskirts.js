import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"

export const outskirts = createLocation(
  "outskirts",
  "Outskirts",
  [
    "municipal_district"
  ],
  [],
  {municipal_district: "You see the road out of town wind West into the Outskirts."},
  "You stand in the town Outskirts. Enormous connifer trees tower along both sides of the road.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
            //DEFAULT
            {
              text: "The distant sounds of the town die away as you enter the Outskirts."
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