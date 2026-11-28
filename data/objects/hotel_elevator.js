import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const hotel_elevator = createObject(
      "hotel_elevator",
      "Elevator",
      "hotel",
      {},
      "The doors are closed.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "There is an electronic scanner near the button that calls the carriage down."
                }
              ],
              ()=>{
                handleMsgUI("objects", "hotel_elevator", "examine", 0)
                passTime(30)
              },
              ()=>true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
             createAction(
              [
                {
                  text: "Pressing the button doesn't seem to do anything. It's probably restricted to guests."
                }
              ],
              ()=>{
                handleMsgUI("objects", "hotel_elevator", "use", 0)
                passTime(30)
              },
              ()=>window.getGame().player.inventory.includes("player_room_key")
            ),
            createAction(
              [
                {
                  text: "Pressing the button doesn't seem to do anything. It's probably restricted to guests."
                }
              ],
              ()=>{
                handleMsgUI("objects", "hotel_elevator", "use", 1)
                passTime(30)
              },
              ()=>true
            )
          ]
        )
      }
    )