import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI , passTime} from "../../functions/game"

export const heather = createNpc(
      "heather",
      "Heather",
      "Girl with Camera",
      "",
      {have_met: false},
      "",
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
                handleMsgUI("npcs", "heather", "examine", 0)
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
                handleMsgUI("npcs", "heather", "investigate", 0)
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
                handleMsgUI("npcs", "heather", "chat", 0)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    )