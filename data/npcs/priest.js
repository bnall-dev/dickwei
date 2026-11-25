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
                handleMsgUI(
  "npcs",
  "priest",
  "examine",
  0
)
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
                handleMsgUI(
  "npcs",
  "priest",
  "investigate",
  0
)
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
                handleMsgUI(
  "npcs",
  "priest",
  "chat",
  0
)
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