import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const post_box = createObject(
      "post_box",
      "Post Box",
      "municipal_district",
      {},
      "You could mail a letter or package here if you had one.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "The red metal box has a one-way slot where you can deposit mail."
                }
              ],
              ()=>{
                handleMsgUI("objects", "post_box", "examine", 0)
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
                  text: "You don't have anything you can send!"
                }
              ],
              ()=>{
                handleMsgUI("objects", "post_box", "use", 0)
                passTime(30)
              },
              ()=>true
            )
          ]
        )
      }
    )