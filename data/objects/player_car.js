import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const player_car = createObject(
      "player_car",
      "Your Car",
      "outskirts",
      {
        first_examine: false
      },
      "Your field service vehicle.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                { text: "You examine your car." }
              ],
              () => {
                handleMsgUI("objects", "player_car", "examine", 0)
                passTime(60)
                setObjFlag("player_car", "first_examine", true)
              },
              () => window.getGame().objects.player_car.flags.first_examine == false
            ),
             createAction(
              [
                { text: "You examine your car again and find your badge." }
              ],
              () => {
                handleMsgUI("objects", "player_car", "examine", 1)
                passTime(60)
                playerGetItem("player_badge")
              },
              () => !window.getGame().player.inventory.includes("player_badge")
            ),
             createAction(
   [
     { text: "It's broken down." }
   ],
   () => {
     handleMsgUI("objects", "player_car", "examine", 2)
     passTime(60)
   },
   () => true
 )
          ]
        ),
         use: createInteraction(
          "Use",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI("objects", "player_car", "use", 0)
                passTime(60)
              },
              ()=> true
            )
          ]
        )
      }
    )