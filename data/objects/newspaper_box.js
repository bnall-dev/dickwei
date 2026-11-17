import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const newspaper_box = createObject(
      "newspaper_box",
      "Newspaper Box",
      "municipal_district",
      {},
      "You see a newspaper box.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI("objects", "newspaper_box", "examine", 0)
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
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI("objects", "newspaper_box", "use", 0)
                passTime(60)
              },
              ()=>true
            )
          ]
        )
      }
    )