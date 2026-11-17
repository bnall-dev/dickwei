import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const post_box = createObject(
      "post_box",
      "Post Box",
      "municipal_district",
      {},
      "You see a post box. You could send a letter in the mail if you had one.",
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
                handleMsgUI("objects", "post_box", "examine", 0)
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
                handleMsgUI("objects", "post_box", "use", 0)
                passTime()
              },
              ()=>true
            )
          ]
        )
      }
    )