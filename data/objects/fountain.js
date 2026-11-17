import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const fountain = createObject(
      "fountain",
      "Fountain",
      "municipal_district",
      {},
      "A large fountain dominates the town square.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "The fountain is a statue of a mermaid."
                }
              ],
              ()=>{
                handleMsgUI("objects", "fountain", "examine", 0)
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
                handleMsgUI("objects", "fountain", "use", 0)
                passTime(30)
              },
              ()=> true
            )
          ]
        )
      }
    )