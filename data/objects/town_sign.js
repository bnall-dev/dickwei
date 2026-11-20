import { createObject } from "../objects"
import { createInteraction, createAction , handleMsgUI, passTime, setSpeaker} from "../../functions/game"

export const town_sign = createObject(
      "town_sign",
      "Welcome Sign",
      "outskirts",
      {},
      "A decorative wooden sign stands by the road leading into town.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "You approach the sign in awe."
                },
                {
                  text: "'Welcome to GoodWood\nPopulation: 5,000... Plus You!'",
                  func: ()=>{setSpeaker("player")}
                },
                {
                  text: "\"Charming. Unfortunately, today I only bring it back to an even 5,000...\"",
                  func: ()=>{setSpeaker("")}
                }
              ],
              ()=>{
                handleMsgUI("objects", "town_sign", "examine", 0)
                passTime(60)
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
                  text: "You can't do much more than admire the craftsmanship."
                }
              ],
              ()=>{
                handleMsgUI("objects", "town_sign", "use", 0)
                passTime(60)
              },
              ()=> true
            )
          ]
        )
      }
    )