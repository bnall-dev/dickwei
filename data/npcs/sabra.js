import { createNpc } from "../npcs"
import { createInteraction, createAction , handleMsgUI, passTime} from "../../functions/game"

export const sabra = createNpc(
      "sabra",
      "Sabra",
      "",
      {},
      "You see Sabra.",
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
                handleMsgUI("npcs", "sabra", "examine", 0)
              },
              ()=>true
            )
          ]
        ),
         investigate: createInteraction(
          "Investigate",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI("npcs", "sabra", "investigate", 0)
              },
              ()=>true
            )
          ]
        ),
         chat: createInteraction(
          "Chat",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI("npcs", "sabra", "chat", 0)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "sabra_house",
    pm: "church"
  },
  monday: {
    am: "high_school",
    pm: "sabra_house"
  },
  tuesday: {
    am: "high_school",
    pm: "sabra_house"
  },
  wednesday: {
    am: "high_school",
    pm: "sabra_house"
  },
  thursday: {
    am: "high_school",
    pm: "sabra_house"
  },
  friday: {
    am: "high_school",
    pm: "sabra_house"
  },
  saturday: {
    am: "sabra_house",
    pm: "sabra_house"
  }}
    )