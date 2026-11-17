import { createNpc } from "../npcs"
import { createInteraction, createAction , handleMsgUI, passTime} from "../../functions/game"

export const breezy = createNpc(
      "breezy",
      "Breezy",
      "",
      {},
      "You see Breezy.",
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
                handleMsgUI("npcs", "breezy", "examine", 0)
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
                handleMsgUI("npcs", "breezy", "investigate", 0)
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
                handleMsgUI("npcs", "breezy", "chat", 0)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "beach",
    pm: "breezy_house"
  },
  monday: {
    am: "high_school",
    pm: "breezy_house"
  },
  tuesday: {
    am: "high_school",
    pm: "breezy_house"
  },
  wednesday: {
    am: "high_school",
    pm: "breezy_house"
  },
  thursday: {
    am: "high_school",
    pm: "breezy_house"
  },
  friday: {
    am: "high_school",
    pm: "breezy_house"
  },
  saturday: {
    am: "",
    pm: "breezy_house"
  }}
    )