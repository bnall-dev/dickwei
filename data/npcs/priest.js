import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const priest = createNpc(
      "priest",
      "priest Name",
      "Priest",
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
                handleMsgUI(window.getGame().npcs.priest.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.priest.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.priest.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "church",
    pm: "church"
  },
  monday: {
    am: "church",
    pm: "church"
  },
  tuesday: {
    am: "church",
    pm: "church"
  },
  wednesday: {
    am: "church",
    pm: "church"
  },
  thursday: {
    am: "church",
    pm: "church"
  },
  friday: {
    am: "church",
    pm: "church"
  },
  saturday: {
    am: "church",
    pm: "church"
  }}
    )