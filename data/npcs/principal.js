import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const principal = createNpc(
      "principal",
      "principal Name",
      "Principal",
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
                handleMsgUI(window.getGame().npcs.principal.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.principal.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.principal.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "high_school",
    pm: "high_school"
  },
  monday: {
    am: "high_school",
    pm: "high_school"
  },
  tuesday: {
    am: "high_school",
    pm: "high_school"
  },
  wednesday: {
    am: "high_school",
    pm: "high_school"
  },
  thursday: {
    am: "high_school",
    pm: "high_school"
  },
  friday: {
    am: "high_school",
    pm: "high_school"
  },
  saturday: {
    am: "high_school",
    pm: "high_school"
  }}
    )