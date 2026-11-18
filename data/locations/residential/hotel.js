import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"

export const hotel = createLocation(
      "hotel",
      "Hotel",
      ["player_room", "residential_district"],
      {},
      "You see the Hotel.",
      "You are in the Hotel.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Hotel."
                }
              ],
              ()=>{
                handleMsgUI("locations", "hotel", "go", 0)
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