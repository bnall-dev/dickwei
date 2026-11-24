import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const lawyer = createNpc(
      "lawyer",
      "lawyer Name",
      "Well-Dressed Man",
      "",
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
                handleMsgUI(window.getGame().npcs.lawyer.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.lawyer.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.lawyer.interactions.chat.actions[0].message)
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