import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const jukebox = createObject(
      "jukebox",
      "Jukebox",
      "diner",
      {},
      "The jukebox stands silent.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "The buttons are dusty and none of the lights are on."
                }
              ],
              ()=>{
                handleMsgUI("objects", "jukebox", "examine", 0)
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
                  text: "It doesn't seem to be operational. What a shame."
                }
              ],
              ()=>{
                handleMsgUI("objects", "jukebox", "use", 0)
                passTime(30)
              },
              ()=>true
            )
          ]
        )
      }
    )